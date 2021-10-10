import { InputAdornment } from '@mui/material'

const CurrencyIcon = ({ currencyName }) => {
  const currencyValue = (value) => {
    if (value === 'usd') return <>&#36;</>
    if (value === 'eur') return <>&#8364;</>
    if (value === 'rub') return <>&#8381;</>
  }
  return <InputAdornment position='start'>{currencyValue(currencyName)}</InputAdornment>
}

export default CurrencyIcon
