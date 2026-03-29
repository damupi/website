import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders the damupi logo', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByLabelText('damupi home')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /stack/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /what i build/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /work/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /writing/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders the theme toggle button', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument()
  })

  it('toggles dark/light class on html element', () => {
    document.documentElement.className = 'dark'
    render(<Header />)
    const btn = screen.getByRole('button', { name: /toggle theme/i })
    fireEvent.click(btn)
    expect(document.documentElement.classList.contains('light')).toBe(true)
    fireEvent.click(btn)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
