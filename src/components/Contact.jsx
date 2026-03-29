import React, { useState } from 'react'

const CONTACT_LINKS = [
  {
    label: 'Twitter',
    href: 'https://x.com/damupi/',
    text: 'X / Twitter',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/damupi_contact_bot',
    text: 'Telegram',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/damupi',
    text: 'GitHub',
  },
  {
    label: 'Nostr',
    href: 'https://njump.me/npub1hka7d6gsy2hetge3amg47png43r9t6m7k5w8s6yhhh9q33cd6j4q0nrvth',
    text: 'Nostr',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'ok' | 'error'
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.')
      return
    }

    setStatus('sending')
    try {
      const body = new FormData()
      body.append('name', form.name)
      body.append('email', form.email)
      body.append('message', form.message)

      const res = await fetch('/api/contact', { method: 'POST', body })
      const data = await res.json()

      if (data.ok) {
        setStatus('ok')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setError(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setError('Failed to send message. Try emailing me directly.')
    }
  }

  return (
    <section id="contact" className="py-16 border-t border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading">say hello</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact links */}
          <div>
            <p className="text-dark-muted text-sm mb-6 leading-relaxed">
              If something I've built looks interesting, or you just want to talk
              analytics and AI — reach out.
            </p>
            <ul className="flex flex-col gap-3">
              {CONTACT_LINKS.map(({ label, href, text }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-sm text-dark-muted hover:text-accent transition-colors"
                  >
                    <span className="text-accent mr-2">→</span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-wide text-dark-muted mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-dark-surface border border-dark-border rounded px-3 py-2 text-sm text-dark-text focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wide text-dark-muted mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-dark-surface border border-dark-border rounded px-3 py-2 text-sm text-dark-text focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-wide text-dark-muted mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-dark-surface border border-dark-border rounded px-3 py-2 text-sm text-dark-text focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}
            {status === 'ok' && (
              <p className="text-accent text-xs">Message sent. I'll get back to you soon.</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="self-start px-5 py-2 bg-accent text-white rounded text-sm font-bold hover:bg-opacity-90 disabled:opacity-50 transition-opacity"
            >
              {status === 'sending' ? 'sending...' : 'send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
