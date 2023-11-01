import { Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import RentInfoPage from './pages/RentInfo';
import NotFoundPage from './pages/NotFound';
import SuccessfulRentalPage from './pages/SuccessfulRental';
import ReturnItemPage from './pages/ReturnTrailer';
import RentProcess from './pages/RentProcess';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './theme.css';

// TODO: Some routes needs to be protected
function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/rent-process" element={<RentProcess />} />
      <Route path="/rent-successful" element={<SuccessfulRentalPage />} />
      <Route path="/rent-info" element={<RentInfoPage />} />
      <Route path="/return-item" element={<ReturnItemPage />} />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
