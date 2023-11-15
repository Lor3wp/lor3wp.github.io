import { Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import RentInfoPage from './pages/RentInfo';
import NotFoundPage from './pages/NotFound';
import SuccessfulRentalPage from './pages/SuccessfulRental';
import RateItemPage from './pages/RateItem';
import RentProcessPage from './pages/RentProcess';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './theme.css';
import { StepperProvider } from './context/StepperContext';

// TODO: Some routes needs to be protected
function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route
        path="/rent-process"
        title="Test"
        element={
          <>
            <StepperProvider>
              <Header title="Peräkärryn vuokraus" />
              <RentProcessPage />
            </StepperProvider>
          </>
        }
      />
      <Route
        path="/rent-successful"
        element={
          <>
            <Header title="Peräkärryn vuokraus" />
            <SuccessfulRentalPage />
          </>
        }
      />
      <Route
        path="/rent-info"
        element={
          <>
            <Header title="Varauksen tiedot" />
            <RentInfoPage />
          </>
        }
      />
      <Route
        path="/rate-item"
        element={
          <>
            <Header title="Palaute" />
            <RateItemPage />
          </>
        }
      />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
