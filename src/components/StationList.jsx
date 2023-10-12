import ListGroup from 'react-bootstrap/ListGroup';
import MainButton from './MainButton';
import styles from '../css/StationList.module.css';
import Bike from '../Icons/cargobike.svg';
import Trailer from '../Icons/trailer.svg';
import { useState } from 'react';
import Checkbox from './Checkbox';
import { useNavigate } from "react-router-dom";

const StationList = () => {
  const stations = [
    {
      stationName: 'Ruskeasanta',
      cargoBike: true,
      trailer: true,
    },
    {
      stationName: 'Konala',
      cargoBike: false,
      trailer: true,
    },
    {
      stationName: 'Kivikko',
      cargoBike: true,
      trailer: false,
    },
    {
      stationName: 'Jorvas',
      cargoBike: false,
      trailer: true,
    },
    {
      stationName: 'Ämmässuo',
      cargoBike: true,
      trailer: true,
    },
    {
      stationName: 'Koivusuo',
      cargoBike: true,
      trailer: false,
    },
  ];

  // array of states to track checkbox status for each station
  const [isChecked, setIsChecked] = useState(stations.map(() => false));
  const navigate = useNavigate();

  // handling the checkbox changes for a specific station
  const handleCheckbox = (index) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsChecked(updatedChecked);
  };
  const handleClick = () => {
    navigate("/calendar");

  }
  return (
    <>
      <div className={styles.listContainer}>
        <ListGroup variant="flush" className={styles.listElement}>
          {stations.map((station, index) => (
            <ListGroup.Item key={station.stationName}>
              <div className={styles.listitemContainer}>
                <p className={styles.stationName}>{station.stationName}</p>
                <div className={styles.rowContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                    style={{
                      marginRight: '4px',
                      width: '17px',
                      height: '24px',
                      fill: '#AF3F32',
                    }}
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <p id={styles.kilometers}>10km</p>
                  {station.cargoBike ? (
                    <img
                      src={Bike}
                      alt="cargo bike icon"
                      id={styles.cargobike}
                      draggable={false}
                    />
                  ) : (
                    <></>
                  )}
                  {station.trailer ? (
                    <img
                      src={Trailer}
                      alt="trailer icon"
                      id={styles.trailer}
                      draggable={false}
                    />
                  ) : (
                    <></>
                  )}
                  <Checkbox
                    onChange={() => handleCheckbox(index)}
                    value="station"
                    checked={isChecked[index]}
                    isRequired={false}
                    id={styles.stationCheckbox}
                    className={styles.stationCheckboxContainer}
                  ></Checkbox>
                  {/* <input
                type="checkbox"
                id={styles.stationCheckbox}
                name="station-checkbox"
                value="station"
                checked={isChecked[index]}
                onChange={() => handleCheckbox(index)} /> */}
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <MainButton
        buttonText="Valitse päivämäärä"
        type="button"
        size="l"
        id="date-button"
        onClick={()=> handleClick()}
      ></MainButton>
      </div>{' '}

    </>
  );
};

export default StationList;
