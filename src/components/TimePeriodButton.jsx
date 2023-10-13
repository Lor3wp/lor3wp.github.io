import Button from 'react-bootstrap/Button';
import '../css/TimePeriodButton.css';

function TimePeriodButton({buttonText, setSelectedTime}) {
    const handleClick = () => {
        setSelectedTime(buttonText)
    }
    return (
        <>
            <Button variant="flat" onClick={handleClick}>{buttonText}</Button>
        </>
    )
}

export default TimePeriodButton;