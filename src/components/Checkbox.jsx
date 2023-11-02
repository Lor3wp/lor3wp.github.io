import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import styles from '../css/UserForm.module.css';

// TODO: No idea why this has to be it's own component...
const Checkbox = ({
  label,
  routeName,
  linkText,
  onChange,
  value,
  checked,
  isRequired,
  componentId,
  className,
}) => {
  return (
    <div key="default-checkbox" className={`${className}`}>
      <Form.Check
        required={isRequired ? true : false}
        type="checkbox"
        id={componentId}
        label={
          <span>
            {label}{' '}
            <a className={styles.spanLabel} href={routeName}>
              {linkText}
            </a>
          </span>
        }
        onChange={onChange}
        value={value}
        checked={checked}
      />
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  routeName: PropTypes.string,
  linkText: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  checked: PropTypes.bool,
  isRequired: PropTypes.bool,
  componentId: PropTypes.string,
  className: PropTypes.string,
};

export default Checkbox;
