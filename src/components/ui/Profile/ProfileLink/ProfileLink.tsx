import styles from './ProfileLink.module.css';

type Props = {
  url: string;
  text: string;
};

export const ProfileLink = ({ url, text }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src='/src/assets/svg/folder.svg' />
      <a href={url} target='_blank'>
        {text}
      </a>
    </div>
  );
};
