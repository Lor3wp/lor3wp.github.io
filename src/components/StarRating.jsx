import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import PropTypes from 'prop-types';

const StarRating = ({ className }) => {
  const [setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className={className}>
      <Rating onClick={handleRating} />
    </div>
  );
};

StarRating.propTypes = {
  className: PropTypes.string,
};

export default StarRating;
