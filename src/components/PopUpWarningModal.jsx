import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import styles from '../css/PopUpWarningModal.module.css';

const PopUpWarningModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={styles.modalHeader} closeButton>
        <Modal.Title className={styles.modalTitle}>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>
        {props.backButton && (
          <Button
            className={styles.btn}
            variant="outline-primary"
            onClick={props.onHide}
          >
            {props.backButton}
          </Button>
        )}
        <Button
          className={styles.btn}
          variant={props.acceptButtonVariant}
          onClick={props.onPrimaryButtonClick}
        >
          {props.acceptButton}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

PopUpWarningModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.obj,
  backButton: PropTypes.string,
  acceptButton: PropTypes.string,
  acceptButtonVariant: PropTypes.string,
  onPrimaryButtonClick: PropTypes.func,
};

export default PopUpWarningModal;
