import styles from './IconButton.module.css';

type Props = {
  id?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const IconButton = ({ id, onClick, children }: Props) => {
  return (
    <div id={id} className={styles.iconbutton} onClick={onClick}>
      {children}
    </div>
  );
};
