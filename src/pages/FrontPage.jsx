import GoRentButton from '../components/GoRentButton';
import Navigation from '../components/Navigation';
import styles from '../css/FrontPage.module.css';
import FrontPicture from '../assets/frontpagepicture.webp';
import RentInfoBoxList from '../components/RentalInfo';

const FrontPage = () => {
  const items = [
    'Peräkärryn vuokraus maksaa 5 € kolmelta tunnilta.',
    'Peräkärry on tarkoitettu vain henkilöasiakkaille jätteen kuljettamiseen Sortti-asemille.',
    'Yksi asiakas saa vuokrata peräkärryn vain yhdeksi kolmen tunnin vuoroksi päivässä.',
    'Jos vuokra-aikasi ylittää kolme tuntia tai et tuo jätettä kärryllä Sortti-asemalle, peritään vuokrauksesta 40 euroa.',
    'Peräkärryä ei voi vuokrata Kivikon ja Ämmässuon Sortti-asemalla myytävän mullan kuljettamiseen.',
    'Jos maksat paikan päällä, käy vahvistamassa peräkärrynvuokrauksen aloitus Sortti-aseman INFOssa näyttämällä henkilöllisyystodistuksesi. Henkilökuntamme opastaa, mistä kärry asemalla noudetaan.',
    'Perimme jätteiden vastaanotosta Sortti-asemien hinnaston mukaisen maksun. Vuokran voi maksaa INFOssa kuorman tuonnin yhteydessä.',
  ];

  const items2 = [
    'Täytä sähköinen varauslomake.',
    'Tee varaus Sortti-aseman infossa.',
    'Soita asiakaspalveluumme.',
  ];

  return (
    <>
      <body className={styles.frontPageBody}>
        <div className={styles.frontPageContent}>
          <menu>
            <Navigation />
          </menu>
          <div className={styles.headerContainer}>
            <header className={styles.frontHeader}>
              <p className={styles.frontHeaderTxt}>
                <span className={styles.lightGrayText}>
                  Jätteet ja kierrätys
                </span>
                <span className={styles.iconSpacing}>{' > '}</span>
                Sortti-peräkärryn vuokraus
              </p>
            </header>
          </div>

          <main className={styles.frontMain}>
            <div className={styles.containerInfo}>
              <div className={styles.frontImgContainer}>
                <img className={styles.frontPagePicture} src={FrontPicture} />
                <div className={styles.infoTextContainer2}>
                  <h1 className={styles.headingInfo2}>Varaukset</h1>
                  <p>
                    Sortti-peräkärryn vuokrasopimus tehdään joko sähköisen
                    varauksen yhteydessä tai Sortti-asemalla. Tarkastamme
                    asemalla vuokraajan henkilöllisyyden.
                  </p>
                  <h2 className={styles.headingInfo3}>
                    Vaihtoehtoiset tavat varata Sortti-peräkärry:
                  </h2>
                  <RentInfoBoxList items={items2} />
                  <p>
                    Huomioithan, että kello 17 alkavissa varauksissa peräkärry
                    pitää noutaa Sortti-asemalta viimeistään klo 17.30.
                  </p>
                  <GoRentButton buttonText="Vuokraa tästä"></GoRentButton>
                </div>
              </div>
              <div className={styles.frontInfoContainer}>
                <div>
                  <h1 className={styles.headingInfo}>
                    Säännöt Sortti-peräkärryn vuokraukseen ja käyttöön
                  </h1>
                </div>
                <RentInfoBoxList items={items} />
              </div>
            </div>
          </main>
        </div>
      </body>
    </>
  );
};

export default FrontPage;
