import { useState } from 'react';
import { StepperForm } from '../../ui/StepperForm/StepperForm';
import { DetailsSet } from './FieldSets/DetailsSet/DetailsSet';
import { AdvantagesSet } from './FieldSets/AdvantagesSet/AdvantagesSet';
import { AboutSet } from './FieldSets/AboutSet/AboutSet';

export const UserForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const getSectionComponent = () => {
    switch (activeStep) {
      case 0:
        return <DetailsSet nextStep={nextStep} />;
      case 1:
        return <AdvantagesSet nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <AboutSet prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <>
      <StepperForm activeStep={activeStep} count={3} />
      {getSectionComponent()}
    </>
  );
};
