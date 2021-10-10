import { render, screen } from '@testing-library/react'
import CurrencyIcon from './СurrencyIcon'

describe('when render currencyIcon', () => {
  it('should view rub icon', () => {
    render(<CurrencyIcon currencyName={'rub'} />)
    expect(screen.getByText('₽')).toBeInTheDocument()
  })

  it('should view usd icon', () => {
    render(<CurrencyIcon currencyName={'usd'} />)
    expect(screen.getByText('$')).toBeInTheDocument()
  })

  it('should view eur icon', () => {
    render(<CurrencyIcon currencyName={'eur'} />)
    expect(screen.getByText('€')).toBeInTheDocument()
  })
})
