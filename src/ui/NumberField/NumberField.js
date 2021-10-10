import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
import CurrencyIcon from '../СurrencyIcon/СurrencyIcon'

const NumberField = ({id, value, handleChange, currencyName, label}) => {
  return(
    <FormControl>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        value={value}
        onChange={handleChange}
        startAdornment={<CurrencyIcon currencyName={currencyName}/>}
        label={label}
      />
    </FormControl>
  )
}

export default NumberField
