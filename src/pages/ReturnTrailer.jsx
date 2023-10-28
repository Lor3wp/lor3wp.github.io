import { useState } from 'react';
import ReturnCard from '../components/ReturnCard';
import ReturnPagination from '../components/ReturnPagination';
import Footer from '../components/Footer';

const ReturnItemPage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <ReturnPagination clicked={clicked}></ReturnPagination>
      <ReturnCard clicked={clicked} onClick={handleClick}></ReturnCard>
      <Footer />
    </>
  );
};

export default ReturnItemPage;
