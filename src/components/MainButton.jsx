import Button from 'react-bootstrap/Button';
import '../css/MainButton.css';

function MainButton({ buttonText }) {
  return (
    <>
      <Button variant="flat" size="l">
        {buttonText}
      </Button>
    </>
  );
}

export default MainButton;