import styles from './StepperForm.module.css';
import { Step, Stepper } from 'react-form-stepper';

type Props = {
  count: number;
  activeStep: number;
};

export const StepperForm = ({ count, activeStep }: Props) => {
  const labelStyle = (index: number) => {
    if (index < activeStep) {
      return styles.complitedLabel;
    }
    if (index === activeStep) {
      return styles.activeLabel;
    }
    return '';
  };

  const stepIcon = (index: number) => {
    if (index < activeStep) {
      return <img src='/src/assets/svg/complite.svg' />;
    }
    if (index === activeStep) {
      return <img src='/src/assets/svg/active.svg' />;
    }
    return null;
  };

  const steps = Array.from({ length: count }, (_, index) => {
    return <Step key={index}>{stepIcon(index)}</Step>;
  });

  const labels = Array.from({ length: count }, (_, index) => {
    return (
      <label key={index} className={labelStyle(index)}>
        {index + 1}
      </label>
    );
  });

  return (
    <div className={styles.wrapper}>
      <Stepper
        style={{
          width: `calc(${(count / (count - 1)) * 100}% - ${
            (count / (count - 1)) * 16
          }px)`,
        }}
        className={styles.stepper}
        stepClassName={styles.step}
        activeStep={activeStep}
        connectorStateColors={true}
        connectorStyleConfig={{
          completedColor: 'var(--color-primary)',
          activeColor: 'var(--color-primary)',
          disabledColor: 'rgba(0, 0, 0, 0.08);',
          size: '8px',
          style: 'solid',
          stepSize: '8px',
        }}
        styleConfig={{
          activeBgColor: '#5558FA',
          completedBgColor: '#5558FA',
          inactiveBgColor: '#A6A6A6',
          activeTextColor: 'white',
          completedTextColor: 'white',
          inactiveTextColor: 'white',
          size: '16px',
          circleFontSize: '0px',
          labelFontSize: '0px',
          borderRadius: '50%',
          fontWeight: '400',
        }}
      >
        {steps}
      </Stepper>
      <div className={styles.labels}>{labels}</div>
    </div>
  );
};
