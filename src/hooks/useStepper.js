import { useContext } from 'react';
import { StepperContext } from '../context/StepperContext';

export const useStepper = () => {
  return useContext(StepperContext);
};
