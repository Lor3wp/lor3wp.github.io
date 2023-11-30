import { Button, Form } from 'react-bootstrap';
import productStyle from '../css/SelectProduct.module.css';
import timeStyle from '../css/SelectTime.module.css';
import Bike from '../assets/cargobike.svg';
import Trailer from '../assets/trailer.svg';
import { useStepper } from '../hooks/useStepper';
import Checkbox from './Checkbox';
import { useTranslation } from 'react-i18next';

const SelectProduct = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    selectAdaptor,
    setSelectAdaptor,
  } = useStepper();

  const { t } = useTranslation();

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
            label={t('Tarvitsen adapterin')}
            checked={selectAdaptor}
            onChange={() => setSelectAdaptor(!selectAdaptor)}
          />
        </Form>
      </div>
    </>
  );
};

export default SelectProduct;
