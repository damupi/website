import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText(/say hello/i)).toBeInTheDocument()
  })

  it('renders name, email and message fields', () => {
    render(<Contact />)
    expect(screen.getByRole('textbox', { name: 'Name' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Message' })).toBeInTheDocument()
  })

  it('renders the send button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('renders Telegram contact link', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /telegram/i })).toHaveAttribute(
      'href',
      'https://t.me/damupi_contact_bot'
    )
  })

  it('renders Twitter contact link', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /twitter/i })).toHaveAttribute(
      'href',
      'https://x.com/damupi/'
    )
  })

  it('renders GitHub contact link', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/damupi'
    )
  })

  it('shows validation error when submitting empty form', async () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: /send/i }))
    await waitFor(() => {
      expect(screen.getByText(/all fields are required/i)).toBeInTheDocument()
    })
  })
})
