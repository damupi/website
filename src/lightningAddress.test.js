import { onRequestGet, WALLETS } from '../functions/.well-known/lnurlp/[name].js'

const payRequest = {
  tag: 'payRequest',
  callback: 'https://coinos.io/api/lnurl/abc',
  minSendable: 1000,
  maxSendable: 100000000000,
  metadata: '[["text/plain","Paying damupi@coinos.io"]]',
  allowsNostr: true,
  nostrPubkey: '72bd',
}

const call = (name) => onRequestGet({ params: { name } })

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Lightning Address function', () => {
  it('relays the wallet payRequest unchanged with CORS', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify(payRequest), { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    const res = await call('damupi')

    expect(fetchMock).toHaveBeenCalledWith(WALLETS.damupi, expect.anything())
    expect(res.status).toBe(200)
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('*')
    expect(res.headers.get('Content-Type')).toBe('application/json')
    expect(await res.json()).toEqual(payRequest)
  })

  it('matches names case-insensitively', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(JSON.stringify(payRequest))))
    expect((await call('DaMuPi')).status).toBe(200)
  })

  it('returns an LNURL error for unknown names without calling the wallet', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    const res = await call('someone-else')

    expect(res.status).toBe(404)
    expect(await res.json()).toEqual({ status: 'ERROR', reason: 'Unknown Lightning Address.' })
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('returns 502 when the wallet provider fails or is unreachable', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('down', { status: 503 })))
    expect((await call('damupi')).status).toBe(502)

    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('network')))
    const res = await call('damupi')
    expect(res.status).toBe(502)
    expect((await res.json()).status).toBe('ERROR')
  })
})
