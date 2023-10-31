import { useState } from 'react';
import ReturnCard from '../components/ReturnCard';
import ReturnPagination from '../components/ReturnPagination';
import HsyLogo from '../assets/hsy-drops.svg';
import styles from '../css/ReturnTrailer.module.css';
import Header from '../components/Header';

//Return trailer page

const ReturnItemPage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Header />
      <ReturnPagination clicked={clicked}></ReturnPagination>
      <ReturnCard clicked={clicked} onClick={handleClick}></ReturnCard>
      <div className={styles.logoBackgroundContainer}>
        <img
          className={styles.backgroundLogo}
          src={HsyLogo}
          alt="HSY Logo"
        ></img>
      </div>
    </>
  );
};

export default ReturnItemPage;
