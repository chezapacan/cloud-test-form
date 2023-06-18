import styles from './CheckBox.module.css';
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

export const CheckBox = ({ name, id, value, reactHookForm }: Props) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={id}
        name={name}
        value={value}
        {...reactHookForm?.register(name)}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};
