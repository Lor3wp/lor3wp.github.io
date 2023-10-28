import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import styles from '../css/RentInfoModal.module.css';
import { useNavigate } from 'react-router-dom';

//Reservation cancellation modal component

const ModalCancellation = ({ showModal, handleClose }) => {
  const navigate = useNavigate();

  const handleCancellationClick = () => {
    navigate('/cancelled');
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={styles.modalPadding} closeButton>
        <Modal.Title className={styles.headingInfo2}>
          Peruuta varaus
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalPadding}>
        <p>Oletko varma, että haluat peruuttaa varauksen?</p>
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button
          className={styles.backButton}
          variant="primary"
          onClick={handleClose}
        >
          Takaisin
        </Button>
        <Button
          className={styles.cancelOptionButton}
          variant="primary"
          onClick={handleCancellationClick}
        >
          Kyllä
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalCancellation.propTypes = {
  showModal: PropTypes.bool,
  handleClose: PropTypes.bool,
};

export default ModalCancellation;
