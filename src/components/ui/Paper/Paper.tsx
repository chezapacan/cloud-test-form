import styles from './Paper.module.css';

type Props = {
  children?: React.ReactNode;
};

export const Paper = ({ children }: Props) => {
  return <div className={styles.paper}>{children}</div>;
};
