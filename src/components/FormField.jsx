import Form from 'react-bootstrap/Form';
import styles from '../css/UserForm.module.css';
import PropTypes from 'prop-types';

const FormField = ({ controlId, label, type, feedbackText }) => {
  const bootstrapClasses = {
    'mb-3': 'mb-3',
  };

  return (
    <>
      <Form.Group
        className={`${styles.formContainer} ${bootstrapClasses['mb-3']}`}
        md="100"
        controlId={controlId}
      >
        <Form.Label>{label}</Form.Label>
        <Form.Control required type={type} />
        <Form.Control.Feedback type="invalid" className={styles.feedbackText}>
          {feedbackText}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

FormField.propTypes = {
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  feedbackText: PropTypes.string.isRequired,
};

export default FormField;
