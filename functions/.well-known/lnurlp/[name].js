// Lightning Address (LUD-16): <name>@damupi.com resolves to that person's
// Coinos wallet. The payRequest is relayed unchanged so the invoice's
// description hash still matches the metadata Coinos signs.
export const WALLETS = {
  damupi: 'https://coinos.io/.well-known/lnurlp/damupi',
}

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}

function error(status, reason) {
  return new Response(JSON.stringify({ status: 'ERROR', reason }), { status, headers: HEADERS })
}

export async function onRequestGet(context) {
  const name = String(context.params.name || '').toLowerCase()
  const upstream = WALLETS[name]
  if (!upstream) {
    return error(404, 'Unknown Lightning Address.')
  }

  try {
    const res = await fetch(upstream, { headers: { Accept: 'application/json' } })
    if (!res.ok) {
      console.error('LNURL upstream error', res.status, upstream)
      return error(502, 'Wallet provider unavailable.')
    }
    return new Response(await res.text(), { headers: HEADERS })
  } catch (err) {
    console.error('LNURL upstream unreachable', upstream, err)
    return error(502, 'Wallet provider unavailable.')
  }
}
