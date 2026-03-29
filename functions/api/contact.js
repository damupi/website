import { EmailMessage } from 'cloudflare:email'

/**
 * POST /api/contact
 * Receives contact form submissions and delivers them to hola@damupi.com
 * via Cloudflare Email Routing send_email binding.
 *
 * Required binding in CF Pages dashboard:
 *   Variable name : EMAIL
 *   Destination   : hola@damupi.com
 */
export async function onRequestPost(context) {
  try {
    const data = await context.request.formData()
    const name = (data.get('name') || '').trim()
    const email = (data.get('email') || '').trim()
    const message = (data.get('message') || '').trim()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'All fields are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const raw = [
      `From: damupi.com <hola@damupi.com>`,
      `To: hola@damupi.com`,
      `Subject: New message from ${name}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=utf-8`,
      ``,
      `Name:    ${name}`,
      `Email:   ${email}`,
      ``,
      message,
    ].join('\r\n')

    await context.env.EMAIL.send(
      new EmailMessage('hola@damupi.com', 'hola@damupi.com', raw)
    )

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'Failed to send message.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
