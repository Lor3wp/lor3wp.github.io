import {useState} from 'react';
import MyCalendar from '../components/Calendar';
import SelectTime from '../components/SelectTime';
import '../css/SelectTime.css';
import SelectProduct from '../components/SelectProduct';
import '../css/RentForm.css';
import MainButton from './MainButton';
import { useNavigate } from "react-router-dom";

function TimeForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  const futureDates = [];
  for (let i = 1; i < 4; i++) {
    const randomDate = new Date(currentYear, currentMonth, currentDay + i);
    futureDates.push(randomDate);
  }
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/rent-form")
  }
  return (
    <>
      <div className="rentBox">
        <div className="productBox">
          <SelectProduct></SelectProduct>
        </div>
        <hr />
        <div className="calendarBox">
          <h2 className="header">Valitse päivä</h2>
          <MyCalendar
            futureDates={futureDates}
            setSelectedDate={setSelectedDate}
          ></MyCalendar>
        </div>
        <hr className="hr" />
        <div className="selectTimeBox">
          <SelectTime
            setSelectedTime={setSelectedTime}
            stationName={'Kivikko'}
          ></SelectTime>
          <SelectTime
            setSelectedTime={setSelectedTime}
            stationName={'Konala'}
          ></SelectTime>
          <SelectTime
            setSelectedTime={setSelectedTime}
            stationName={'Aseman nimi'}
          ></SelectTime>
        </div>
        <div className="userFormButton">
          <MainButton buttonText="Täytä henkilötiedot" size="lg" onClick={handleClick}></MainButton>
        </div>
        {/* <p>
          selecte date: {selectedDate.toLocaleDateString()} <br></br>selected
          time: {selectedTime}
        </p> */}
      </div>
    </>
  );
}

export default TimeForm;
