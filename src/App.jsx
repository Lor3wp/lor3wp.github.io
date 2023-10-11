import './App.css';
import FrontPage from './pages/Frontpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SuccessfulRental } from './pages/SuccessfulRental';
import UserForm from './components/UserForm';

function App() {
  return (
    <>
    <UserForm></UserForm>
    {/* <SuccessfulRental /> */}
    </>
  );
}

export default App;
