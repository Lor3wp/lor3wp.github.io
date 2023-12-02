import PropTypes from 'prop-types';
import BankButton from './BankButton';
import styles from '../css/BankButton.module.css';

const BankType = ({ gridName, title, arrayName, paymentName, rentId }) => {
  return (
    <div className={styles.titleButtonContainer}>
      <h3>{title}</h3>
      <div className={gridName}>
        {arrayName.map((item) => (
          <div className={paymentName} key={item.bankName}>
            <BankButton
              logo={item.logo}
              bankName={item.bankName}
              key={item.bankName}
              rentId={rentId}
            ></BankButton>
          </div>
        ))}
      </div>
    </div>
  );
};

BankType.propTypes = {
  gridName: PropTypes.string,
  title: PropTypes.string,
  arrayName: PropTypes.array,
  paymentName: PropTypes.string,
  rentId: PropTypes.string.isRequired,
};
export default BankType;
