import Button from 'react-bootstrap/Button';
import style from '../css/RentalConfirmation.module.css';
import { RentInfoCard } from './RentInfoCard';

function RentalConfirmation() {
  const rentData = {
    date: '12.03.2023',
    timeStart: '13',
    timeEnd: '17',
    product: 'trailer',
    location: 'kivikon sorttiasema',
  };

  return (
    <>
      <div className={style.background}>
        <div className={style.popUp}>
          <div className={style.rentalInfo}>
            <RentInfoCard
              rentDate={rentData.date}
              rentStartTime={rentData.timeStart}
              rentEndTime={rentData.timeEnd}
              itemType={rentData.product}
              stationLocation={rentData.location}
            />
          </div>
          <p>
            Ulkomitat: pituus 418 cm, leveys 167 cm Tavaratilan mitat: tilavuus
            5 m3 pituus 265 cm, leveys 125 cm korkeus 50 cm, korkeus kuomun
            kanssa 150 cm Peräkärryn omapaino 195 kg Kantavuus 555 kg
            Kokonaispaino 750 kg Peräkärryssä ei ole jarruja eikä talvirenkaita.
          </p>
          <p className={style.info}>
            Vahvista peräkärrynvuokraus Sortti-aseman INFOssa näyttämällä
            henkilöllisyystodistuksesi. Henkilökuntamme opastaa, mistä kärry
            asemalla noudetaan.
          </p>
          <Button className={style.cancleButton}>Peruta</Button>
          <Button className={style.confirmationButton}>Vahvista</Button>
        </div>
      </div>
    </>
  );
}

export default RentalConfirmation;
