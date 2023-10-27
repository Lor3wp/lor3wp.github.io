import { Stepper } from 'react-form-stepper';

export const CustomStepper = (props) => {
  return (
    <Stepper
      {...props}
      connectorStateColors={true}
      connectorStyleConfig={{
        completedColor: '#008782',
        activeColor: '#7BC1CB',
        disabledColor: '#eee',
      }}
      styleConfig={{
        activeBgColor: '#7BC1CB',
        completedBgColor: '#008782',
        inactiveBgColor: '#eee',
        activeTextColor: '#111',
        completedTextColor: '#ffffff',
        inactiveTextColor: '#444',
      }}
    />
  );
};
