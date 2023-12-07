import TimePeriodButton from './TimePeriodButton';
import style from '../css/SelectTime.module.css';
import PropTypes from 'prop-types';

function SelectTime({
  selectedStationAndTime,
  setSelectedStationAndTime,
  stationName,
  timeSlots,
  randomUUID,
}) {
  const handleClick = (stationName, timeSlot) => {
    setSelectedStationAndTime({
      [stationName]: timeSlot,
    });
  };

  const itemElements = timeSlots.map((item, index) => (
    <TimePeriodButton
      randomUUID={randomUUID}
      buttonText={item}
      setSelectedTime={handleClick}
      key={index}
      selectedTime={selectedStationAndTime[stationName]}
      stationName={stationName}
    />
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
  selectedStationAndTime: PropTypes.object,
  setSelectedStationAndTime: PropTypes.func,
  setSelectedStation: PropTypes.func,
  stationName: PropTypes.string.isRequired, // Expect a string prop, and it's required
  timeSlots: PropTypes.array.isRequired,
  randomUUID: PropTypes.string,
};


export default SelectTime;
