import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import styles from '../css/PopUpWarningModal.module.css';
import { useNavigate } from 'react-router-dom';

const PopUpWarningModal = (props) => {
  const navigate = useNavigate();

  const frontPage = () => {
    //TODO: Add a toast message to confirm the return
    navigate('/');
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={styles.modalHeader} closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>
        <Button
          className={styles.btn}
          variant="outline-primary"
          onClick={props.onHide}
        >
          {props.backButton}
        </Button>
        <Button className={styles.btn} variant="danger" onClick={frontPage}>
          {props.acceptButton}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

PopUpWarningModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.string,
  backButton: PropTypes.string,
  acceptButton: PropTypes.string,
};

export default PopUpWarningModal;
