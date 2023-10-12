import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import '../css/SelectProduct.css';
import '../css/SelectTime.css';
function SelectProduct() {
  const [product, setProduct] = useState('');

  return (
    <>
      <h1 className="header">Valitse tuote</h1>
      <div className="selectProductBox">
        <Button className="productButton"></Button>
        <Button className="productButton">Pyöräkärry</Button>
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
