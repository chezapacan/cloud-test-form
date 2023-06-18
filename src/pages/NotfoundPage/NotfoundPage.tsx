import { Paper } from '../../components/ui/Paper/Paper';
import styles from './NotfoundPage.module.css';

export const NotfoundPage = () => {
  return (
    <Paper>
      <div className={styles.wrapper}>
        <p className={styles.title}>404 Увы(</p>
      </div>
    </Paper>
  );
};
