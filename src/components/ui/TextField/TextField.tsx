import styles from './TextField.module.css';
import { FieldError, Path, UseFormRegister } from 'react-hook-form';

type Props = {
  id?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  name: Path<any>;
  type?: string;
  onChange?: (elem: React.ChangeEvent<HTMLInputElement>) => void;
  reactHookForm?: ReactHookForm;
};

type ReactHookForm = {
  register: UseFormRegister<any>;
  errors?: FieldError;
  maxLength?: number;
  minLength?: number;
  required?: string;
  pattern?: Pattern;
};

type Pattern = {
  value: RegExp;
  message: string;
};

export const TextField = (props: Props) => {
  const {
    id,
    label,
    placeholder,
    defaultValue,
    disabled,
    name,
    type,
    onChange,
    reactHookForm,
  } = props;

  return (
    <div className={styles.wrapper}>
      {label ? <label>{label}</label> : null}
      <input
        className={styles.input}
        id={id}
        type={type || 'text'}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        {...reactHookForm?.register(name, {
          required: reactHookForm.required,
          maxLength: {
            value: reactHookForm.maxLength || 40,
            message: `Максимальная длинна ${reactHookForm.maxLength} символов`,
          },
          minLength: {
            value: reactHookForm.minLength || 0,
            message: 'Обязательное поле',
          },
          pattern: reactHookForm.pattern,
        })}
        onChange={onChange}
      />
      {reactHookForm?.errors && (
        <p className={styles.error}>
          * {reactHookForm?.errors.message || 'Ошибка'}
        </p>
      )}
    </div>
  );
};
