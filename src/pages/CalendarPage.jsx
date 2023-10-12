import MainButton from "../components/MainButton";
import { useNavigate } from "react-router-dom";

const CalendarPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/rent-form");

  }
  return (
    <>
    {/* THIS IS JUST MOCKUP CODE PAVEL NEEDS TO FILL IN THIS FILE */}
      <p>Here will be calendar</p>
      <MainButton
        buttonText="Täytä henkilötiedot"
        type="button"
        size="l"
        onClick={()=> handleClick()}
      ></MainButton>    </>
  );
}
export default CalendarPage;