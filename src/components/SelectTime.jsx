import TimePeriodButton from "./TimePeriodButton";
import style from '../css/SelectTime.module.css';
import PropTypes from 'prop-types';

function SelectTime({ setSelectedTime, stationName }) {
  const timeOptions = ['10-13', '11-14', '12-15', '13-16', '14-17', '15-18'];
  const itemElements = timeOptions.map((item, index) => (
    <TimePeriodButton
      buttonText={item}
      setSelectedTime={setSelectedTime}
      key={index}
    ></TimePeriodButton>
  ));
  return (
    <>
      <div className={style.singleSelectTime}>
        <h2 className={style.header}>{stationName}</h2>
        <div className={style.timeBox}>{itemElements}</div>
      </div>
    </>
  );
}

SelectTime.propTypes = {
  setSelectedTime: PropTypes.string.isRequired, // Expect a string prop, and it's required
  stationName: PropTypes.string.isRequired, // Expect a string prop, and it's required
};

export default SelectTime;

