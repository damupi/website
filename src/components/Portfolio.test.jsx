import { render, screen } from '@testing-library/react'
import Portfolio from './Portfolio'
import { portfolio } from '../data/portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText(/projects/i)).toBeInTheDocument()
  })

  it('renders a card for each project', () => {
    render(<Portfolio />)
    portfolio.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    })
  })

  it('renders GitHub links only for public repos', () => {
    render(<Portfolio />)
    const publicProjects = portfolio.filter(p => p.url)
    publicProjects.forEach(p => {
      expect(screen.getByRole('link', { name: new RegExp(p.title, 'i') })).toHaveAttribute('href', p.url)
    })
  })

  it('renders private repos without a link', () => {
    render(<Portfolio />)
    const privateProjects = portfolio.filter(p => !p.url)
    privateProjects.forEach(p => {
      const card = screen.getByText(p.title).closest('div')
      expect(card.querySelector('a[href]')).toBeNull()
    })
  })

  it('links to github profile', () => {
    render(<Portfolio />)
    expect(screen.getByRole('link', { name: /github\.com\/damupi/i })).toBeInTheDocument()
  })
})
