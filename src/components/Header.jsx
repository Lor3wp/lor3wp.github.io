import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/Header.module.css';
import hsyLogo from '../assets/hsy-logo-valkoinen.png';
import { Link } from 'react-router-dom';
import { applyVersionClass, removeVersionClass } from '../utils/BodyVersion';
import { useEffect } from 'react';

/* Header component */
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
        <p>VUOKRAUSPALVELU</p>
      </div>
      <div className={styles.headerLogoContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img
              src={hsyLogo}
              width="30"
              height="30"
              className={styles.logo2}
              alt="Logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
