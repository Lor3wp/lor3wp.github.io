import GoRentButton from '../components/GoRentButton';
import Navigation from '../components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/frontpage.css';
import FrontPicture from '../assets/frontpagepicture.webp';

const FrontPage = () => {
  return (
    <>
    <menu>
      <Navigation />
    </menu>
    
    <header>
      <img className="frontpagepicture" src={FrontPicture} />
    </header>
    
    <section>
      <GoRentButton buttonText="Vuokraa tästä"></GoRentButton>
    </section>
    </>
  );
};

export default FrontPage;
