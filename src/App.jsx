import { Route, Routes } from 'react-router-dom';
import FrontPage from './pages/Frontpage';
import RentInfoPage from './pages/RentInfo';
import NotFoundPage from './pages/NotFound';
import { SuccessfulRentalPage } from './pages/SuccessfulRental';
import HeaderComponent from './pages/HeaderTestPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min'; // TODO: What exactly does this do?

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/rent-info" element={<RentInfoPage />} />
      <Route path="/rent-successful" element={<SuccessfulRentalPage />} />
      <Route path="/header-test-page" element={<HeaderComponent />} />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
