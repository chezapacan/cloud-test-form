import styles from './RadioButton.module.css';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  name: string;
  id?: string;
  value: number;
  reactHookForm?: ReactHookForm;
};

type ReactHookForm = {
  register: UseFormRegister<any>;
};

export const RadioButton = ({ name, id, value, reactHookForm }: Props) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.radio}
        type='radio'
        id={id}
        name={name}
        value={value}
        {...reactHookForm?.register(name)}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};
