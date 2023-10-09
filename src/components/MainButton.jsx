import Button from 'react-bootstrap/Button';

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