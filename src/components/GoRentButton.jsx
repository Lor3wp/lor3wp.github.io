import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import styles from '../css/GorentButton.module.css';
import { useState } from 'react';
import ModalInfo from '../components/RentInfoModal';

const GoRentButton = ({ buttonText }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Button
        className={styles.gotorentbutton}
        variant="flat"
        size="l"
        onClick={handleOpenModal}
      >
        {buttonText}
      </Button>

      <ModalInfo showModal={showModal} handleClose={handleCloseModal} />
    </>
  );
};

GoRentButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default GoRentButton;