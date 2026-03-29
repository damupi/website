import { render, screen } from '@testing-library/react'
import Experience from './Experience'
import { experience } from '../data/experience'

describe('Experience', () => {
  it('renders the section heading', () => {
    render(<Experience />)
    expect(screen.getByText(/experience/i)).toBeInTheDocument()
  })

  it('renders a card for each company', () => {
    render(<Experience />)
    experience.forEach(company => {
      expect(screen.getByText(company.name)).toBeInTheDocument()
    })
  })

  it('links each company to their website', () => {
    render(<Experience />)
    experience.forEach(company => {
      const link = screen.getByRole('link', { name: new RegExp(company.name, 'i') })
      expect(link).toHaveAttribute('href', company.url)
    })
  })
})
