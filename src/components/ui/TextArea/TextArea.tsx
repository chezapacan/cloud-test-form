import styles from './TextArea.module.css';
import { Path, UseFormRegister } from 'react-hook-form';
import { useEffect, useState } from 'react';

type Props = {
  id?: string;
  label?: string;
  placeholder?: string;
  name: Path<any>;
  maxLength?: number;
  reactHookForm?: ReactHookForm;
};

type ReactHookForm = {
  register: UseFormRegister<any>;
  charsCount?: number;
};

export const TextArea = (props: Props) => {
  const [charsCount, setCharsCount] = useState(0);
  const { id, label, placeholder, name, reactHookForm, maxLength } = props;

  useEffect(() => {
    if (reactHookForm?.charsCount !== undefined) {
      setCharsCount(reactHookForm?.charsCount);
    }
  }, [reactHookForm?.charsCount]);

  const isOverLimit = charsCount >= (maxLength || 200);

  return (
    <div className={styles.wrapper}>
      {label ? <label>{label}</label> : null}
      <textarea
        id={id}
        className={styles.textarea}
        placeholder={placeholder}
        {...reactHookForm?.register(name)}
      />
      <div className={styles.footer}>
        <p className={`${styles.tip} ${styles.error}`}>
          {isOverLimit && '* Превышен лимит'}
        </p>
        <p
          className={`${styles.tip} ${isOverLimit && styles.error}`}
        >{`${charsCount}/${maxLength}`}</p>
      </div>
    </div>
  );
};
