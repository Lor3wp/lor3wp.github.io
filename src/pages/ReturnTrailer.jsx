import { useState, useEffect } from 'react';
import { applyVersionClass2, removeVersionClass2 } from '../utils/BodyVersion';
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

  // Use the "useEffect" hook to apply and remove body version class
  useEffect(() => {
    applyVersionClass2(); // Apply version 3 to the body
    return () => {
      removeVersionClass2(); // Remove version 3 from the body when the component unmounts
    };
  }, []);

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
