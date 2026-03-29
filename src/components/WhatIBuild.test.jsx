import { render, screen } from '@testing-library/react'
import WhatIBuild from './WhatIBuild'
import { whatIBuild } from '../data/whatIBuild'

describe('WhatIBuild', () => {
  it('renders the section heading', () => {
    render(<WhatIBuild />)
    expect(screen.getByText(/what i build/i)).toBeInTheDocument()
  })

  it('renders a card for each capability', () => {
    render(<WhatIBuild />)
    whatIBuild.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    })
  })

  it('renders descriptions for each capability', () => {
    render(<WhatIBuild />)
    whatIBuild.forEach(item => {
      expect(screen.getByText(item.description)).toBeInTheDocument()
    })
  })
})
