import { render, screen } from '@testing-library/react'
import Writing from './Writing'
import { speaking } from '../data/writing'

describe('Writing', () => {
  it('renders the section heading', () => {
    render(<Writing />)
    expect(screen.getByText(/writing & speaking/i)).toBeInTheDocument()
  })

  it('renders each speaking entry', () => {
    render(<Writing />)
    speaking.forEach(talk => {
      expect(screen.getByText(talk.title)).toBeInTheDocument()
      expect(screen.getByText(talk.event)).toBeInTheDocument()
    })
  })
})
