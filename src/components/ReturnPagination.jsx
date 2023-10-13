import styles from '../css/ReturnTrailer.module.css';
import PropTypes from 'prop-types';

const ReturnPagination = ( {clicked} ) => {
  return(
    <>
  
      <div className={styles.paginationContainer}>

      <div className={clicked ? styles.pageNumber2 : styles.pageNumber1}>1</div>
      <hr className={styles.dividerLine}></hr>
      <div className={clicked ? styles.pageNumber1 : styles.pageNumber2}>2</div>

      </div>
    </>
  );
}

ReturnPagination.propTypes = {
  clicked: PropTypes.bool.isRequired,
};

export default ReturnPagination;