import MainButton from "../components/MainButton";
import { useNavigate } from "react-router-dom";
import TimeForm from '../components/TimeForm';

const CalendarPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/rent-form');
  };
  return (
    <>
      <TimeForm />
      <MainButton
        buttonText="Täytä henkilötiedot"
        type="button"
        size="l"
        onClick={() => handleClick()}
      ></MainButton>{' '}
    </>
  );
};
export default CalendarPage;