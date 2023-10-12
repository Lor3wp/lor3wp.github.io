import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Container from 'react-bootstrap/Container';
import { DEFAULT_TIME_DURATION } from '../utils/constants';
import styles from '../css/circularCountdownTimer.module.css';
import PropTypes from 'prop-types';

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
  rentStartTime,
  duration = DEFAULT_TIME_DURATION,
  timerText = 'Jäljellä',
}) => {
  // Some fun animation
  /*const [strokeWidth, setStrokeWidth] = useState(130);
  useEffect(() => {
    const interval = setInterval(() => {
      setStrokeWidth((prevWidth) => {
        if (prevWidth > 19) {
          return prevWidth - 1;
        } else {
          return prevWidth;
        }
      });
    }, 3);

    return () => {
      clearInterval(interval);
    };
  }, []);*/

  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={duration}
      colors="#008782"
      size={250}
      strokeWidth={19}
      onComplete={() => {
        return { shouldRepeat: false };
      }}
    >
      {({ remainingTime }) => {
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
              <div className={styles.rentStartText}>
                Alkaa {rentStartTime} päästä
              </div>
            )}
          </Container>
        );
      }}
    </CountdownCircleTimer>
  );
};

CircularCountdownTimer.propTypes = {
  isPlaying: PropTypes.bool,
  rentStartTime: PropTypes.instanceOf(Date),
  duration: PropTypes.number,
  timerText: PropTypes.string,
};
