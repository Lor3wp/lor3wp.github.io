import ListGroup from 'react-bootstrap/ListGroup';
import MainButton from './MainButton';
import '../css/StationList.css';
import Bike from '../Icons/cargobike.svg';
import Trailer from '../Icons/trailer.svg';
import { useState } from 'react';

function StationList() {
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

  // Creating array of states to track checkbox status for each station
  const [isChecked, setIsChecked] = useState(
    stations.map(() => false)
  );

  // Handle the checkbox changes for a specific station
  const handleCheckbox = (index) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsChecked(updatedChecked);
  };

  return (
    <div className="list-container">
    <ListGroup>
      {stations.map((station, index) => (
        <ListGroup.Item key={station.stationName}>
          <div className="listitem-container">
            <p className="station-name">{station.stationName}</p>
            <div className="row-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <p id="kilometers">10km</p>
              {station.cargoBike ? (
                <img src={Bike} alt="cargo bike icon" id="cargobike" />
              ) : (
                <></>
              )}
              {station.trailer ? (
                <img src={Trailer} alt="trailer icon" id="trailer" />
              ) : (
                <></>
              )}
              <input
                type="checkbox"
                id="station-checkbox"
                name="station-checkbox"
                value="station"
                checked={isChecked[index]}
                onChange={() => handleCheckbox(index)}
              />
            </div>
            <hr className="divider" />
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
    <MainButton buttonText="Valitse päivämäärä" id="date-button"></MainButton>
    </div>
  );
}

export default StationList;
