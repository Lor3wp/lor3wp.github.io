import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styles from '../css/ReservationTimer.module.css';
import { useTranslation } from 'react-i18next';

/* Reservation timer component */
const ReservationTimer = ({ reservationDeadline }) => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  const { t } = useTranslation();

  useEffect(
    () => {
      setRemainingTime(calculateRemainingTime());
      const timerInterval = setInterval(() => {
        setRemainingTime(calculateRemainingTime());
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [reservationDeadline],
  );

  function calculateRemainingTime() {
    const now = new Date().getTime();
    const remainingTime = reservationDeadline - now;
    return remainingTime <= 0 ? 0 : remainingTime;
  }

  const minutes = Math.floor(remainingTime / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div className={styles.timerContainer}>
      {remainingTime <= 0 ? (
        <p>{t('Aloita varaus uudelleen.')}</p>
      ) : (
        <p>{t('rent_process_timer', { minutes: minutes, seconds: seconds })}</p>
      )}
    </div>
  );
};

ReservationTimer.propTypes = {
  reservationDeadline: PropTypes.number.isRequired,
};

export default ReservationTimer;
