import { Rating } from 'react-simple-star-rating';
import PropTypes from 'prop-types';

const StarRating = ({ className, handleRating }) => {
  return (
    <div className={className}>
      <Rating onClick={handleRating} />
    </div>
  );
};

StarRating.propTypes = {
  className: PropTypes.string,
  handleRating: PropTypes.func,
};

export default StarRating;
