import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import RentalConfirmation from './components/RentalConfirmation';
import Calendar from 'react-calendar';
import TimeForm from './components/TimeForm';
//import 'bootstrap/dist/js/bootstrap.bundle.min'; // TODO: What exactly does this do?

function App() {
  return (
    <>
      <RentalConfirmation />
      <TimeForm />
    </>
    // <Routes>
    //   <Route path="/" element={<FrontPage />} />
    //   <Route path="/stations" element={<Stations />} />
    //   <Route path="/calendar" element={<CalendarPage />} />
    //   <Route path="/rent-form" element={<RentForm />} />
    //   <Route path="/payment" element={<Payment />} />
    //   <Route path="/rent-info" element={<RentInfoPage />} />
    //   <Route path="/rent-successful" element={<SuccessfulRentalPage />} />
    //   <Route path="/header-test-page" element={<HeaderComponent />} />
    //   <Route path="*" element={<NotFoundPage />}></Route>
    // </Routes>
  );
}

export default App;
