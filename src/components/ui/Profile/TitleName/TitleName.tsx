import styles from './TitleName.module.css';

type Props = {
  title: string;
};

export const TitleName = ({ title }: Props) => {
  return <p className={styles.title}>{title}</p>;
};
