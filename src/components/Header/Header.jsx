import { useState } from 'react'
import { notifyError } from '../../utils/notifications/notifications'
import Calendar from '../Calendar/Calendar'

const Header = () => {
  const [date, setSelectDate] = useState(new Date())

  const handleDateChange = (date) => {
    if(new Date(date) <= new Date()){
      setSelectDate(date)
    } else {
      notifyError('We cannot predict the course of currencies.')
    }
  }

  return (
    <header>
      <h1>Конвертер валют</h1>
      <Calendar selectedDate={date} handleDateChange={handleDateChange}/>
    </header>
  )
}

export default Header
