import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('when render header', () => {
  it('should contain the text', () => {
    render(<Header />)
    expect(screen.getByText(/Конвертер валют/i)).toBeInTheDocument()
  })
})
