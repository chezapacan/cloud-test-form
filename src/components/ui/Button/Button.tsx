import styles from './Button.module.css';

type Props = {
  id?: string;
  text?: string;
  outline?: boolean;
  isSubmit?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = (props: Props) => {
  const { id, text, outline, onClick, isSubmit, disabled, children } = props;

  return (
    <button
      id={id}
      className={`${styles.button} ${outline && styles.outline}`}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
};
