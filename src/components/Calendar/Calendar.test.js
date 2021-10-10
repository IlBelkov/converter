import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { format } from 'date-fns'
import App from '../../App'
import Calendar from './Calendar'

const handleDateChangeMock = jest.fn()

describe('when render calendar', () => {
  it('should contain the label', () => {
    render(<Calendar handleDateChange={handleDateChangeMock} selectedDate={new Date()}/>)
    expect(screen.getAllByText('Course update date')).toHaveLength(2)
  })

  it('should contain the current day', () => {
    const date = format(new Date(), 'dd/MM/yyyy')
    render(<Calendar handleDateChange={handleDateChangeMock} selectedDate={new Date()}/>)
    const input = screen.getByPlaceholderText('dd/mm/yyyy')
    expect(input).toHaveValue(date)
  })

  it('should set new value', () => {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    const formatted = format(date, 'dd/MM/yyyy')
    render(<Calendar handleDateChange={handleDateChangeMock}/>)
    const input = screen.getByPlaceholderText('dd/mm/yyyy')
    userEvent.clear(input)
    userEvent.type(input, formatted)
    expect(input).toHaveValue(formatted)
  })

  it('should show error message', async () => {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    const formatted = format(date, 'dd/MM/yyyy')
    render(<App />)
    const input = screen.getByPlaceholderText('dd/mm/yyyy')
    userEvent.clear(input)
    userEvent.type(input, formatted)

    expect(await screen.findByText('Error: We cannot predict the course of currencies.')).toBeInTheDocument()
  })
})
