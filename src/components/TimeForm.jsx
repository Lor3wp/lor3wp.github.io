import { useState } from 'react';
import RentCalendar from '../components/Calendar';
import SelectTime from '../components/SelectTime';
import timeStyle from '../css/SelectTime.module.css';
import SelectProduct from '../components/SelectProduct';
import rentStyle from '../css/RentForm.module.css';
import MainButton from './MainButton';
import { useNavigate } from 'react-router-dom';

const TimeForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  const navigate = useNavigate();
  const futureDates = [];

  for (let i = 1; i < 4; i++) {
    const randomDate = new Date(currentYear, currentMonth, currentDay + i);
    futureDates.push(randomDate);
  }

  const handleClick = () => {
    navigate('/rent-form');
  };

  return (
    <div className="rentBox">
      <div className="productBox">
        <SelectProduct></SelectProduct>
      </div>
      <hr />
      <div className="calendarBox">
        <h2 className="header">Valitse päivä</h2>
        <RentCalendar
          futureDates={futureDates}
          setSelectedDate={setSelectedDate}
        ></RentCalendar>
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
        <MainButton
          buttonText="Täytä henkilötiedot"
          size="lg"
          onClick={handleClick}
        ></MainButton>
      </div>
      {/* <p>
          selecte date: {selectedDate.toLocaleDateString()} <br></br>selected
          time: {selectedTime}
        </p> */}
    </div>
  );
};

export default TimeForm;
