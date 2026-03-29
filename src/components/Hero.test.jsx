import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toHaveTextContent(/Analytics Engineer/i)
    expect(h1).toHaveTextContent(/MCP Developer/i)
  })

  it('renders the one-liner description', () => {
    render(<Hero />)
    expect(screen.getByText(/10\+ years/i)).toBeInTheDocument()
  })

  it('renders See my work CTA linking to portfolio', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /see my work/i })
    expect(link).toHaveAttribute('href', '#portfolio')
  })

  it('renders Say hello CTA linking to contact', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /say hello/i })
    expect(link).toHaveAttribute('href', '#contact')
  })

  it('renders avatar image', () => {
    render(<Hero />)
    expect(screen.getByAltText(/damupi avatar/i)).toBeInTheDocument()
  })
})
