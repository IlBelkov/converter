import { useState } from 'react'
import NumberField from '../../ui/NumberField/NumberField'

export const Converter = () => {
  const [value, setValue] = useState(100)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <form>
      <NumberField
      id={'From'}
      value={value}
      handleChange={handleChange}
      label={'From'}
      currencyName={'rub'}
      />
      <NumberField
        id={'To'}
        value={value}
        handleChange={handleChange}
        label={'To'}
        currencyName={'rub'}
      />
    </form>
  )
}
