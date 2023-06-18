import { useNavigate } from 'react-router-dom';
import { Paper } from '../../components/ui/Paper/Paper';
import styles from './NotfoundPage.module.css';

export const NotfoundPage = () => {
  const navigate = useNavigate();

  return (
    <Paper>
      <div className={styles.wrapper}>
        <p className={styles.title}>404</p>
        <div className={styles.kek} onClick={() => navigate('/')}></div>
      </div>
    </Paper>
  );
};
