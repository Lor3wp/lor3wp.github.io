import Button from 'react-bootstrap/Button';

function GoRentButton({ buttonText }) {
  return (
    <>

      <Button className="gotorentbutton" variant="flat" size="l">
        {buttonText}
      </Button>
    </>
  );
}

export default GoRentButton;