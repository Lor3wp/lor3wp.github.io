import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styles from '../css/RateTrailer.module.css';

/* Star rating component */

const StarRating = () => {
  const [setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);

    // Add your custom logic here, if needed
  };

  return (
    <div className={styles.starRatingContainer}>
      <Rating onClick={handleRating} />
      {/*<p className={styles.star - rating}>Selected rating: {rating} stars</p>*/}
    </div>
  );
};

export default StarRating;
