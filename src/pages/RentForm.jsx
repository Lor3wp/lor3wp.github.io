import { useState } from 'react';
import MyCalendar from '../components/Calendar';
import SelectTime from '../components/SelectTime';
import '../css/SelectTime.css';
import SelectProduct from '../components/SelectProduct';
import '../css/RentForm.css';
import TimeForm from '../components/TimeForm';
import Header from '../components/Header';

function RentForm() {
  return (
    <>
      <Header></Header>
      <TimeForm></TimeForm>
    </>
  );
}

export default RentForm;
