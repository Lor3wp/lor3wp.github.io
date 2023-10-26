import { useState } from 'react';
import Header from '../components/Header';
import UserForm from '../components/UserForm';

function RentForm() {
  const [confirmedRent, setConfirmRent] = useState(false);
  return (
    <>
      <Header></Header>
      <UserForm
        confirmedRent={confirmedRent}
        setConfirmRent={setConfirmRent}
      ></UserForm>
    </>
  );
}

export default RentForm;
