import styles from './Profile.module.css';
import { Avatar } from './Avatar/Avatar';
import { TitleName } from './TitleName/TitleName';
import { ProfileLink } from './ProfileLink/ProfileLink';

export const Profile = () => {
  return (
    <>
      <div className={styles.profile}>
        <Avatar />
        <div className={styles.info}>
          <TitleName title='Дмитрий Микрюков' />
          <div className={styles.links}>
            <ProfileLink url='https://t.me/chezapacan' text='Telegram' />
            <ProfileLink url='https://github.com/chezapacan' text='GitHub' />
          </div>
        </div>
      </div>
      <div className={styles.divider} />
    </>
  );
};
