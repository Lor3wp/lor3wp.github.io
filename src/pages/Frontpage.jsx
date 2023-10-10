import GoRentButton from '../components/GoRentButton';
import Navigation from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/frontpage.css';
import FrontPicture from '../assets/frontpagepicture.webp';
import ItemList from '../components/ItemList';


const FrontPage = () => {
  
  const items = ['Peräkärryn vuokraus maksaa 5 € kolmelta tunnilta.', 'Peräkärry on tarkoitettu vain henkilöasiakkaille jätteen kuljettamiseen Sortti-asemille.', 
  'Yksi asiakas saa vuokrata peräkärryn vain yhdeksi kolmen tunnin vuoroksi päivässä.', 'Jos vuokra-aikasi ylittää kolme tuntia tai et tuo jätettä kärryllä Sortti-asemalle, peritään vuokrauksesta 40 euroa.',
  'Peräkärryä ei voi vuokrata Kivikon ja Ämmässuon Sortti-asemalla myytävän mullan kuljettamiseen.', 'Jos maksat paikan päällä, käy vahvistamassa peräkärrynvuokrauksen aloitus Sortti-aseman INFOssa näyttämällä henkilöllisyystodistuksesi. Henkilökuntamme opastaa, mistä kärry asemalla noudetaan.',
'Perimme jätteiden vastaanotosta Sortti-asemien hinnaston mukaisen maksun. Vuokran voi maksaa INFOssa kuorman tuonnin yhteydessä.'];
  
  return (
    <>
    <menu>
      <Navigation />
    </menu>
    <header><p className="header-txt">Jätteet ja kierrätys {' > '} Sortti-peräkärryn vuokraus</p></header>
    <main>
      <div className="container-info">
        <div className='imgContainer'>
        <img className="frontpagepicture" src={FrontPicture} />
        </div>

        <div className='infoContainer'>
          <div>
            <h1 className='heading-info'>Säännöt Sortti-peräkärryn vuokraukseen ja käyttöön</h1>
          </div>
            <ItemList items={items} />
        </div>
      </div>
    </main>
    
    <section>
      <GoRentButton buttonText="Vuokraa tästä"></GoRentButton>
    </section>
    </>
  );
};

export default FrontPage;
