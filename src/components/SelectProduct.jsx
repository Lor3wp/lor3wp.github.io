import { Button, Form } from 'react-bootstrap';
import productStyle from '../css/SelectProduct.module.css';
import timeStyle from '../css/SelectTime.module.css';
import Bike from '../Icons/cargobike.svg';
import Trailer from '../Icons/trailer.svg';
import { useStepper } from '../hooks/useStepper';
import Checkbox from './Checkbox';

const SelectProduct = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    selectAdaptor,
    setSelectAdaptor,
  } = useStepper();

  return (
    <>
      <h2 className={timeStyle.header}>Valitse tuote</h2>
      <div className={productStyle.selectProductBox}>
        <Button
          className={
            selectedProduct === 'trailer'
              ? productStyle.activeProductButton
              : productStyle.productButton
          }
          onClick={() => setSelectedProduct('trailer')}
        >
          <img src={Trailer} alt="trailer icon" />
        </Button>
        <Button
          className={
            selectedProduct === 'bike'
              ? productStyle.activeProductButton
              : productStyle.productButton
          }
          onClick={() => setSelectedProduct('bike')}
        >
          <img src={Bike} alt="cargobike icon" />
        </Button>
        <Form className={productStyle.adapterCheckBox}>
          <Checkbox
            label="Tarvitsen adapterin"
            checked={selectAdaptor}
            onChange={() => setSelectAdaptor(!selectAdaptor)}
          />
        </Form>
      </div>
    </>
  );
};

export default SelectProduct;
