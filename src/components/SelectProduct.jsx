import React, { useState } from 'react';
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

const SelectProduct = ({ stationName, setFutureDates, futureDates }) => {
  const {
    selectedProduct,
    setSelectedProduct,
    selectAdaptor,
    setSelectAdaptor,
  } = useStepper();
  const { getRequest } = useApi();
  const { t } = useTranslation();
  const [localFutureDates, setLocalFutureDates] = useState(futureDates);

  const handleProductClick = async (product) => {
    setSelectedProduct(product);
    const response = await getRequest('/reserved-dates', {
      station: stationName,
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
};

export default SelectProduct;
