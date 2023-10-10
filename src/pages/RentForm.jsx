import { useState } from 'react';
import MyCalendar from '../components/Calendar';
import SelectTime from '../components/SelectTime';
import '../css/SelectTime.css'

function RentForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());
   const [selectedTime, setSelectedTime] = useState(null);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  const futureDates = [];
  for (let i = 1; i < 4; i++) {
    const randomDate = new Date(currentYear, currentMonth, currentDay +i);
    futureDates.push(randomDate);
  }
  return (
      <>
          <h1 className='header'>Valitse päivä</h1>
          <MyCalendar futureDates={futureDates} setSelectedDate={setSelectedDate}></MyCalendar>
      <SelectTime setSelectedTime={setSelectedTime}></SelectTime>
      <p>selecte date: {selectedDate.toLocaleDateString()} <br></br>selected time: {selectedTime}</p>
    </>
  );
}

export default RentForm;