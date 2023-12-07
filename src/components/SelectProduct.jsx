import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import productStyle from '../css/SelectProduct.module.css';
import timeStyle from '../css/SelectTime.module.css';
import Bike from '../assets/cargobike.svg';
import Trailer from '../assets/trailer.svg';
import { useStepper } from '../hooks/useStepper';
import Checkbox from './Checkbox';
import { useTranslation } from 'react-i18next';
import useApi from '../hooks/useApi';
import PropTypes from 'prop-types';

const SelectProduct = ({
  selectedStationAndTime,
  setFutureDates,
  futureDates,
  randomUUID,
}) => {
  const {
    selectedProduct,
    setSelectedProduct,
    selectAdaptor,
    setSelectAdaptor,
    stationsData,
    selectedDate,
  } = useStepper();
  const { getRequest } = useApi();
  const { t } = useTranslation();
  const [localFutureDates, setLocalFutureDates] = useState(futureDates);
  const [selectedStation, setSelectedStation] = useState([]);

  const { postRequest } = useApi();

  const handleProductClick = async (product) => {
    try {
      const bodyData = {
        uuid: randomUUID,
        station: Object.keys(selectedStationAndTime)[0],
        timeSlot: Object.values(selectedStationAndTime)[0],
        product: product,
        date: selectedDate,
        isAdapter: selectAdaptor,
      };
      const isEmptyField = Object.values(bodyData).some((value) => !value);
      if (isEmptyField) {
        const response = await postRequest('add-temp-reservation', bodyData);
        console.log('TimePeriodButton.jsx 30 ', response);
      }
    } catch (error) {
      console.error('api error: ', error);
    }

    stationsData.map((station) => {
      if (station.selected) {
        console.log('stations', station.stationName);
        setSelectedStation(station.stationName);
      }
    });

    setSelectedProduct(product);
    const response = await getRequest('/reserved-dates', {
      station: selectedStation,
      product: selectedProduct,
    });
    // Extracting only the dates from the response arrays
    const newDates = response.map((item) => item.date);
    console.log(response);
    // Updating localFutureDates
    setLocalFutureDates([...localFutureDates, ...newDates]);

    // Updating futureDates
    setFutureDates([...localFutureDates, ...newDates]);
  };

  return (
    <>
      <h2 className={timeStyle.header}>{t('Valitse tuote')}</h2>
      <div className={productStyle.selectProductBox}>
        <Button
          className={
            selectedProduct === 'trailer'
              ? productStyle.activeProductButton
              : productStyle.productButton
          }
          onClick={() => handleProductClick('trailer')}
          disabled={
            !stationsData.find(
              (station) =>
                station.stationName === Object.keys(selectedStationAndTime)[0],
            ).cargoBike
          }
        >
          <img src={Trailer} alt="trailer icon" />
        </Button>
        <Button
          className={
            selectedProduct === 'bike'
              ? productStyle.activeProductButton
              : productStyle.productButton
          }
          onClick={() => handleProductClick('bike')}
          disabled={
            !stationsData.find(
              (station) =>
                station.stationName === Object.keys(selectedStationAndTime)[0],
            ).trailer
          }
        >
          <img src={Bike} alt="cargobike icon" />
        </Button>
        <Form className={productStyle.adapterCheckBox}>
          <Checkbox
            label={t('Tarvitsen adapterin')}
            checked={selectAdaptor}
            onChange={() => setSelectAdaptor(!selectAdaptor)}
          />
        </Form>
      </div>
    </>
  );
};

SelectProduct.propTypes = {
  stationName: PropTypes.string.isRequired,
  setFutureDates: PropTypes.func.isRequired,
  futureDates: PropTypes.array.isRequired,
  randomUUID: PropTypes.string,
  selectedStationAndTime: PropTypes.object,
};

export default SelectProduct;
