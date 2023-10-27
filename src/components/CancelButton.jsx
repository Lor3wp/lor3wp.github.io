import PropTypes from 'prop-types';

const CancelButton = ({ buttonText, className }) => {
  // Why isn't the react-bootstrap button being used here??? Do we even need this?
  return <button className={className}>{buttonText}</button>;
};

CancelButton.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
};

export default CancelButton;
