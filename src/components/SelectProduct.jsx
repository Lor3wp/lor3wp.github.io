import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import productStyle from '../css/SelectProduct.module.css';
import timeStyle from '../css/SelectTime.module.css';
import Bike from '../Icons/cargobike.svg';
import Trailer from '../Icons/trailer.svg';

/* Select product component */

function SelectProduct() {
  const [product, setProduct] = useState('');

  const handleButtonClick = (prd) => {
    setProduct(prd);
  };

  return (
    <>
      <h2 className={timeStyle.header}>Valitse tuote</h2>
      <div className={productStyle.selectProductBox}>
        <Button
          className={`${
            product === 'trailer'
              ? productStyle.activeProductButton
              : productStyle.productButton
          }`}
          onClick={() => handleButtonClick('trailer')}
        >
          <img src={Trailer} alt="trailer icon" />
        </Button>
        <Button
          className={`${
            product === 'bike'
              ? productStyle.activeProductButton
              : productStyle.productButton
          }`}
          onClick={() => handleButtonClick('bike')}
        >
          <img src={Bike} alt="cargobike icon" />
        </Button>
        <Form className={productStyle.adapterCheckBox}>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`}>
              <Form.Check // prettier-ignore
                type={type}
                id={`default-${type}`}
                label={`Tarvitsen adapterin`}
              />
            </div>
          ))}
        </Form>
      </div>
    </>
  );
}

export default SelectProduct;
