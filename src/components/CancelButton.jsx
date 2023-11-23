import PropTypes from 'prop-types';

const CancelButton = ({ buttonText, className }) => {
  return <button className={className}>{buttonText}</button>;
};

CancelButton.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
};

export default CancelButton;
