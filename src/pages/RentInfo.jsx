import { useState } from 'react';
import { CircularCountdownTimer } from '../components/CircularCountdownTimer';
import { Container, Button, Stack } from 'react-bootstrap';
import { RentInfoCard } from '../components/RentInfoCard';

const RentInfoPage = () => {
  // TODO: Maybe there's a better way instead of doing multiple states?
  const [rentDate, setRentDate] = useState('17.09.2023');
  const [rentStartTime, setRentStartTime] = useState('13:00');
  const [rentEndTime, setRentEndTime] = useState('14:00');
  const [itemType, setItemType] = useState('Peräkärry');
  const [stationLocation, setStationLocation] = useState(
    'Kivikon sortti asema',
  );
  const [timeStarted, setTimeStarted] = useState(false);

  // TODO: Write a logic to calculate time until rent starts using the date/time from api extracted from current date/time.
  const timeUntilRentStart = () => {
    return '3h';
  };

  return (
    <Container>
      <Stack gap={5}>
        <Stack direction="horizontal" gap={5}>
          <div>
            <CircularCountdownTimer
              isPlaying={timeStarted}
              rentStartTime={timeUntilRentStart()}
            />
          </div>
          <div>
            <RentInfoCard
              rentDate={rentDate}
              rentStartTime={rentStartTime}
              rentEndTime={rentEndTime}
              itemType={itemType}
              stationLocation={stationLocation}
            />
          </div>
        </Stack>

        {timeStarted ? (
          <Button variant="success">Palauta peräkärry</Button>
        ) : (
          <Button variant="danger">Peruta varaus</Button>
        )}
      </Stack>
    </Container>
  );
};

export default RentInfoPage;
