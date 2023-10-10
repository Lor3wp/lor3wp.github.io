import TimePeriodButton from "./TimePeriodButton";
import '../css/SelectTime.css'

function SelectTime({setSelectedTime}) {
    const timeOptions = ['10-13', '11-14', '12-15', '13-16', '14-17', '15-18']
 const itemElements = timeOptions.map((item, index) => (
    <TimePeriodButton buttonText={item} setSelectedTime={setSelectedTime} key={index}></TimePeriodButton>
  ));
  return (
      <>
          <h1 className="header">Valite aika</h1>
          <div className="timeBox">{itemElements}</div>
      </>
  );
}

export default SelectTime;
