import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Converter } from './Converter'

describe('when render converter', () => {
  it('first value should contain value 100', () => {
    render(<Converter />)
    expect(screen.getByLabelText(/From/)).toHaveValue('100')
  })

  it('the initial value is 100', () => {
    render(<Converter />)
    const input = screen.getByLabelText(/To/)
    userEvent.clear(input)
    userEvent.type(input, '20')
    expect(input).toHaveValue('20')
  })
})
