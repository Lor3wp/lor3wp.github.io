import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/Header.module.css';
import hsyLogo from '../assets/hsy-logo-valkoinen.png';
import { applyVersionClass, removeVersionClass } from '../utils/BodyVersion';
import { useEffect } from 'react';

const Header = () => {
  // use body version 2
  useEffect(() => {
    applyVersionClass();
    return () => {
      removeVersionClass();
    };
  }, []);
  return (
    <div className={styles.customHeaderContainer}>
      <div className={styles.textContainer}>
        <p>VUOKRAUS</p>
      </div>
      <div className={styles.headerLogoContainer}>
        <div className={styles.logoContainer}>
          <img
            src={hsyLogo}
            width="30"
            height="30"
            className={styles.logo2}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
