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

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'damupi.com <onboarding@resend.dev>',
        to: ['hola@damupi.com'],
        subject: `New message from ${name}`,
        text: `Name:  ${name}\nEmail: ${email}\n\n${message}`,
      }),
    })

    if (!res.ok) {
      const resendError = await res.text()
      return new Response(JSON.stringify({ ok: false, error: resendError, status: res.status }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

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
