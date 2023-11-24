import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Container from 'react-bootstrap/Container';
import { DEFAULT_TIME_DURATION } from '../utils/constants';
import styles from '../css/circularCountdownTimer.module.css';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// Formats remaining time to hours:minutes or seconds if hours and minutes are 0
const formatRemainingTime = (remainingTime) => {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  let timeText = `${hours}:${minutes}`;
  if (hours == 0 && minutes == 0) {
    timeText = seconds;
  }

  return timeText;
};

export const CircularCountdownTimer = ({
  isPlaying = false,
  timerInfoText,
  duration = DEFAULT_TIME_DURATION,
  timerText,
}) => {
  const { t } = useTranslation();

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return (
        <div className={styles.timerInfoText}>{t('Varaus aika päättyi')}!</div>
      );
    }

    return (
      <Container>
        {isPlaying ? (
          <>
            <div className={styles.timer}>
              {formatRemainingTime(remainingTime)}
            </div>
            <div className={styles.timerText}>{timerText}</div>
          </>
        ) : (
          <div className={styles.rentStartText}>{timerInfoText}</div>
        )}
      </Container>
    );
  };

  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={duration}
      colors="#008782"
      size={250}
      strokeWidth={19}
      onComplete={() => ({ shouldRepeat: false })}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

CircularCountdownTimer.propTypes = {
  isPlaying: PropTypes.bool,
  timerInfoText: PropTypes.string,
  duration: PropTypes.number,
  timerText: PropTypes.string,
};
