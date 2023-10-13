import { Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import RentInfoPage from './pages/RentInfo';
import NotFoundPage from './pages/NotFound';
import SuccessfulRentalPage from './pages/SuccessfulRental';
import RentForm from './pages/RentForm';
import StationsPages from './pages/Stations';
import CalendarPage from './pages/CalendarPage';
import Payment from './pages/Payment';
import ReturnItemPage from './pages/ReturnTrailer';
import HeaderComponent from './pages/HeaderTestPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min'; // TODO: What exactly does this do?
function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/select-stations" element={<StationsPages />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/rent-form" element={<RentForm />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/rent-successful" element={<SuccessfulRentalPage />} />
      <Route path="/rent-info" element={<RentInfoPage />} />
      <Route path="/return-item" element={<ReturnItemPage />} />
      <Route path="/header-test-page" element={<HeaderComponent />} />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
