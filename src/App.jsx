import { Navigate, Route, Routes } from 'react-router-dom';
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
import { useTranslation } from 'react-i18next';
import { useState } from 'react';


function App() {
  const [itemReturned, setItemReturned] = useState(false);

  const handleItemReturned = () => {
    setItemReturned(true);
  };

  const { t } = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route
        path="/rent-process"
        element={
          <>
            <StepperProvider>
              <Header title={t('Peräkärryn vuokraus')} />
              <RentProcessPage />
            </StepperProvider>
          </>
        }
      />
      <Route
        path="/rent-successful/:id"
        element={
          <>
            <Header title={t('Peräkärryn vuokraus')} />
            <SuccessfulRentalPage />
          </>
        }
      />
      <Route
        path="/rent-info/:id"
        element={
          <>
            <Header title={t('Varauksen tiedot')} />
            <RentInfoPage handleItemReturned={handleItemReturned} />
          </>
        }
      />
      {itemReturned ? (
        <Route
          path="/rate-item/:id"
          element={
            <>
              <Header title={t('Palaute')} />
              <RateItemPage />
            </>
          }
        />
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
