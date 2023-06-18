import styles from './Avatar.module.css';

type Props = {
  titleName: string;
  img?: string;
};

export const Avatar = ({ titleName, img }: Props) => {
  const initials = titleName
    .split(' ')
    .map((elem) => elem[0])
    .join('');

  return (
    <div className={styles.avatar}>
      {img ? <img src={img} /> : <p className={styles.initials}>{initials}</p>}
    </div>
  );
};
