import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the damupi logo', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the slogan', () => {
    render(<Footer />)
    expect(screen.getByText(/love me or hate me/i)).toBeInTheDocument()
  })
})
