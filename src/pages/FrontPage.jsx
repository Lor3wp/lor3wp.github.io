import { useState } from 'react';
import FrontPageNavBar from '../components/Navigation';
import styles from '../css/FrontPage.module.css';
import FrontPicture from '../assets/frontpagepicture.jpg';
import RentInfoBoxList from '../components/RentalInfo';
import Footer from '../components/Footer';
import { applyVersionClass, removeVersionClass } from '../utils/BodyVersion';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import RulesModal from '../components/RulesModal';
import { useTranslation } from 'react-i18next';

const FrontPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const { t } = useTranslation();

  // Event handlers for opening
  const handleOpenModal = () => setShowModal(true);

  const handleCloseModal = () => {
    setShowModal(false);
    setIsChecked(false);
  };

  // Check box handler
  const handleCheckChange = () => {
    setIsChecked(!isChecked);
  };

  // Use the "useEffect" hook to apply and remove body version class
  useEffect(() => {
    applyVersionClass();
    return () => {
      removeVersionClass();
    };
  }, []);

  const items = [
    `${t('Peräkärryn vuokraus maksaa 5 € kolmelta tunnilta.')}`,
    `${t(
      'Peräkärry on tarkoitettu vain henkilöasiakkaille jätteen kuljettamiseen Sortti-asemille.',
    )}`,
    `${t(
      'Yksi asiakas saa vuokrata peräkärryn vain yhdeksi kolmen tunnin vuoroksi päivässä.',
    )}`,
    `${t(
      'Jos vuokra-aikasi ylittää kolme tuntia tai et tuo jätettä kärryllä Sortti-asemalle, peritään vuokrauksesta 40 euroa.',
    )}`,
    `${t(
      'Peräkärryä ei voi vuokrata Kivikon ja Ämmässuon Sortti-asemalla myytävän mullan kuljettamiseen.',
    )}`,
    `${t(
      'Jos maksat paikan päällä, käy vahvistamassa peräkärrynvuokrauksen aloitus Sortti-aseman INFOssa näyttämällä henkilöllisyystodistuksesi. Henkilökuntamme opastaa, mistä kärry asemalla noudetaan.',
    )}`,
    `${t(
      'Perimme jätteiden vastaanotosta Sortti-asemien hinnaston mukaisen maksun. Vuokran voi maksaa INFOssa kuorman tuonnin yhteydessä.',
    )}`,
  ];

  const itemsForModal = [...items];
  itemsForModal.pop();

  const items2 = [
    `${t('Täytä sähköinen varauslomake.')}`,
    `${t('Tee varaus Sortti-aseman infossa.')}`,
    `${t('Soita asiakaspalveluumme.')}`,
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={styles.frontPageBody}>
        <div className={styles.frontPageContent}>
          <menu>
            <FrontPageNavBar />
          </menu>
          <div className={styles.headerContainer}>
            <header className={styles.frontHeader}>
              <p className={styles.frontHeaderTxt}>
                <span className={styles.lightGrayText}>
                  {t('Jätteet ja kierrätys')}
                </span>
                <span className={styles.iconSpacing}>{' > '}</span>
                {t('Sortti-peräkärryn vuokraus')}
              </p>
            </header>
          </div>

          <main className={styles.frontMain}>
            <div className={styles.containerInfo}>
              <div className={styles.frontImgContainer}>
                <img className={styles.frontPagePicture} src={FrontPicture} />
                <div className={styles.infoTextContainer2}>
                  <h1 className={styles.headingInfo2}>{t('Varaukset')}</h1>
                  <p>
                    {t(
                      'Sortti-peräkärryn vuokrasopimus tehdään joko sähköisen varauksen yhteydessä tai Sortti-asemalla. Tarkastamme asemalla vuokraajan henkilöllisyyden.',
                    )}
                  </p>
                  <h2 className={styles.headingInfo3}>
                    {t('Vaihtoehtoiset tavat varata Sortti-peräkärry:')}
                  </h2>
                  <RentInfoBoxList items={items2} />
                  <p>
                    {t(
                      'Huomioithan, että kello 17 alkavissa varauksissa peräkärry pitää noutaa Sortti-asemalta viimeistään klo 17.30.',
                    )}
                  </p>
                  <Button
                    size="lg"
                    variant="primary"
                    className={styles.rentButton}
                    onClick={handleOpenModal}
                  >
                    {t('Vuokraa tästä')}
                  </Button>
                </div>
              </div>
              <div className={styles.frontInfoContainer}>
                <div>
                  <h1 className={styles.headingInfo}>
                    {t('Säännöt Sortti-peräkärryn vuokraukseen ja käyttöön')}
                  </h1>
                </div>
                <RentInfoBoxList items={items} />
              </div>
              <Button
                size="lg"
                variant="primary"
                className={styles.rentButton2}
                onClick={handleOpenModal}
              >
                {t('Vuokraa tästä')}
              </Button>
            </div>
          </main>
        </div>

        <RulesModal
          showModal={showModal}
          handleClose={handleCloseModal}
          handleCheckBox={handleCheckChange}
          isChecked={isChecked}
          items={itemsForModal}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FrontPage;
