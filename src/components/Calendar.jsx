import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/CustomCalendar.css'; 
import PropTypes from 'prop-types';

const MyCalendar = (props) => {
  const [date, setDate] = useState(null);
  const futureDates = props.futureDates;
  const setSelectedDate = props.setSelectedDate;
  useEffect(() => {
    const calendar = document.querySelector('.react-calendar');
    if (calendar) {
      calendar.addEventListener('click', handleCalendarClick);
    }

    return () => {
      if (calendar) {
        calendar.removeEventListener('click', handleCalendarClick);
      }
    };
  }, []);

  const handleCalendarClick = (event) => {
    event.preventDefault();
  };

  const handleChange = (date) => {
    setSelectedDate(date);
    setDate(date);
  };

  const tileDisabled = ({ date }) => {
    return futureDates.some(
      (disabledDate) => date.toDateString() === disabledDate.toDateString(),
    );
  };

  const tileClassName = ({ date }) => {
    return tileDisabled({ date }) ? 'disabled-tile' : '';
  };

  return (
    <div>
      <Calendar
        onChange={handleChange}
        value={date}
        minDate={new Date()}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
      />
    </div>
  );
};

MyCalendar.propTypes = {
  futureDates: PropTypes.array.isRequired,
  setSelectedDate: PropTypes.date,
};


export default MyCalendar;
