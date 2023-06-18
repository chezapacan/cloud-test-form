import styles from './Profile.module.css';
import { Avatar } from './Avatar/Avatar';
import { TitleName } from './TitleName/TitleName';
import { ProfileLink } from './ProfileLink/ProfileLink';

type Props = {
  titleName: string;
};

export const Profile = ({ titleName }: Props) => {
  return (
    <>
      <div className={styles.profile}>
        <Avatar titleName={titleName} />
        <div className={styles.info}>
          <TitleName title={titleName} />
          <div className={styles.links}>
            <ProfileLink url='https://t.me/chezapacan' text='Telegram' />
            <ProfileLink url='https://github.com/chezapacan' text='GitHub' />
            <ProfileLink
              url='https://career.habr.com/chezapacan'
              text='Resume'
            />
          </div>
        </div>
      </div>
      <div className={styles.divider} />
    </>
  );
};
