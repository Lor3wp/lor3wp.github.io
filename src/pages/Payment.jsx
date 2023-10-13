import MobilePay from '../assets/mobilepay.png';
import VisaBlue from '../assets/visablue.png';
import VisaBlack from '../assets/visablack.png';
import MasterCard from '../assets/mastercard.png';
import Aktia from '../assets/aktia.png';
import Danske from '../assets/danske.png';
import Nordea from '../assets/nordea.png';
import Handels from '../assets/handels.png';
import Olands from '../assets/olands.png';
import Omasp from '../assets/omasp.png';
import Poppankki from '../assets/poppankki.png';
import Saastopankki from '../assets/saastopankki.png';
import Spankki from '../assets/spankki.png';
import OsuusPankki from '../assets/op.png';
import HSY from '../assets/hsy_logo.png';
import styles from '../css/BankButton.module.css';
import BankType from '../components/BankType';
import CancelButton from '../components/CancelButton';
import Header from '../components/Header';

const Payment = () => {
  const mobileBanks = [{ logo: MobilePay, bankName: 'mobilepay' }];
  const cardPayments = [
    { logo: VisaBlue, bankName: 'visablue' },
    { logo: VisaBlack, bankName: 'visablack' },
    { logo: MasterCard, bankName: 'mastercard' },
  ];
  const bankPayments = [
    { logo: OsuusPankki, bankName: 'osuuspankki' },
    { logo: Aktia, bankName: 'aktia' },
    { logo: Danske, bankName: 'danske' },
    { logo: Nordea, bankName: 'nordea' },
    { logo: Handels, bankName: 'handels' },
    { logo: Olands, bankName: 'olands' },
    { logo: Omasp, bankName: 'omasp' },
    { logo: Poppankki, bankName: 'poppankki' },
    { logo: Saastopankki, bankName: 'saastopankki' },
    { logo: Spankki, bankName: 'spankki' },
  ];
  const irlPayments = [{ logo: HSY, bankName: 'HSY' }];

  return (
    <>
      <Header></Header>
      <div className={styles.bankContainer}>
        <BankType
          gridName={styles.mobileGrid}
          title="Mobiilimaksutavat"
          arrayName={mobileBanks}
          paymentName={styles.mobilePayment}
        ></BankType>
        <BankType
          gridName={styles.cardGrid}
          title="Korttimaksutavat"
          arrayName={cardPayments}
          paymentName={styles.cardPayment}
        ></BankType>
        <BankType
          gridName={styles.bankGrid}
          title="Pankkimaksutavat"
          arrayName={bankPayments}
          paymentName={styles.bankPayment}
        ></BankType>
        <div className={styles.cancelContainer}>
          <BankType
            gridName={styles.irlGrid}
            title="Maksu paikan päällä"
            arrayName={irlPayments}
            paymentName={styles.irlPayment}
          ></BankType>
          <CancelButton
            buttonText="Peruuta maksu"
            className={styles.cancelButton}
          ></CancelButton>
        </div>
        <footer></footer>
      </div>
    </>
  );
};
export default Payment;
