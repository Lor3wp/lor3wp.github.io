import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import cargoBikeIcon from '../Icons/cargobike.svg';
import trailerIcon from '../Icons/trailer.svg';
import '../css/SelectProduct.css';
import '../css/SelectTime.css';
import Bike from '../Icons/cargobike.svg';
import Trailer from '../Icons/trailer.svg';
function SelectProduct() {
  const [product, setProduct] = useState('');
  const handleButtonClick = (prd) => {
    setProduct(prd);
  };
  return (
    <>
      <h1 className="header">Valitse tuote</h1>
      <div className="selectProductBox">
        <Button
          className={
            product == 'trailer' ? 'activeProductButton' : 'productButton'
          }
          onClick={() => handleButtonClick('trailer')}
        >
          <img src={Trailer} alt="trailer icon" />
        </Button>
        <Button
          className={
            product == 'bike' ? 'activeProductButton' : 'productButton'
          }
          onClick={() => handleButtonClick('bike')}
        >
          <img src={Bike} alt="cargobike icon" />
        </Button>
        <Form className="adapterCheckBox">
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
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
