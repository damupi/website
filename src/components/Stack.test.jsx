import { render, screen } from '@testing-library/react'
import Stack from './Stack'
import { stack } from '../data/stack'

describe('Stack', () => {
  it('renders the section heading', () => {
    render(<Stack />)
    expect(screen.getByText(/stack/i)).toBeInTheDocument()
  })

  it('renders a pill for every stack item', () => {
    render(<Stack />)
    stack.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })
})
