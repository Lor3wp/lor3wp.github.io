import { useState } from 'react';
import RentCalendar from '../components/Calendar';
import SelectTime from '../components/SelectTime';
import timeStyle from '../css/SelectTime.module.css';
import SelectProduct from '../components/SelectProduct';
import rentStyle from '../css/RentForm.module.css';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ProductAndTime = ({ onProductAndTimeSelected }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedStation, setSelectedStation] = useState('');

  // values will be used in future
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  const futureDates = [];

  for (let i = 1; i < 4; i++) {
    const randomDate = new Date(currentYear, currentMonth, currentDay + i);
    futureDates.push(randomDate);
  }

  // handling the button click for selecting a time and date
  const handleSubmit = () => {
    if (selectedTime === null || selectedDate === null) {
      alert('Valitse aika ja päivämäärä ennen kuin jatkat.');
    } else {
      onProductAndTimeSelected();
    }
  };
  return (
    <div className={rentStyle.rentBox}>
      <div className={rentStyle.productBox}>
        <SelectProduct />
      </div>
      <hr />
      <div className={rentStyle.calendarBox}>
        <h2 className={timeStyle.header}>Valitse päivä</h2>
        <RentCalendar
          futureDates={futureDates}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <hr className={rentStyle.hr} />
      <div className={rentStyle.selectTimeBox}>
        <SelectTime
          setSelectedTime={setSelectedTime}
          selectedStation={selectedStation}
          setSelectedStation={setSelectedStation}
          selectedTime={selectedTime}
          stationName={'Kivikko'}
        ></SelectTime>
        <SelectTime
          selectedTime={selectedTime}
          setSelectedStation={setSelectedStation}
          selectedStation={selectedStation}
          setSelectedTime={setSelectedTime}
          stationName={'Konala'}
        ></SelectTime>
        <SelectTime
          selectedTime={selectedTime}
          setSelectedStation={setSelectedStation}
          setSelectedTime={setSelectedTime}
          selectedStation={selectedStation}
          stationName={'Aseman nimi'}
        ></SelectTime>
      </div>
      <div className="userFormButton">
        <Button size="lg" onClick={handleSubmit}>
          Täytä henkilötiedot
        </Button>
      </div>
      {/* <p>
          selecte date: {selectedDate.toLocaleDateString()} <br></br>selected
          time: {selectedTime}
        </p> */}
    </div>
  );
};

ProductAndTime.propTypes = {
  onProductAndTimeSelected: PropTypes.func.isRequired,
};

export default ProductAndTime;
