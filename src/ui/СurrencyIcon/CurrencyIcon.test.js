import { render, screen } from '@testing-library/react'
import CurrencyIcon from './СurrencyIcon'

describe('when render currencyIcon', () => {
  it('should view rub icon', () => {
    render(<CurrencyIcon currencyName={'rub'} />)
    expect(screen.getByText('&#8381;')).toBeInTheDocument()
  })

  it('should view usd icon', () => {
    render(<CurrencyIcon currencyName={'usd'} />)
    expect(screen.getByText('&#36;')).toBeInTheDocument()
  })

  it('should view eur icon', () => {
    render(<CurrencyIcon currencyName={'eur'} />)
    expect(screen.getByText('&#8364;')).toBeInTheDocument()
  })
})
