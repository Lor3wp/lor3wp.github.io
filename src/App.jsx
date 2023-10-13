import { Route, Routes } from 'react-router-dom';
import FrontPage from './pages/Frontpage';
import RentInfoPage from './pages/RentInfo';
import NotFoundPage from './pages/NotFound';
import { SuccessfulRentalPage } from './pages/SuccessfulRental';
import HeaderComponent from './pages/HeaderTestPage';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import RentForm from './pages/RentForm';
import Stations from './pages/Stations';
import CalendarPage from './pages/CalendarPage';
import Payment from './pages/Payment';
import ReturnTrailer from './pages/ReturnTrailer';
//import 'bootstrap/dist/js/bootstrap.bundle.min'; // TODO: What exactly does this do?

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/stations" element={<Stations />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/rent-form" element={<RentForm />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/rent-info" element={<RentInfoPage />} />
      <Route path="/rent-successful" element={<SuccessfulRentalPage />} />
      <Route path="/return-trailer" element={<ReturnTrailer />} />
      <Route path="/header-test-page" element={<HeaderComponent />} />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;