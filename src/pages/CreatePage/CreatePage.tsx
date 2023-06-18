import styles from './CreatePage.module.css';
import { Paper } from '../../components/ui/Paper/Paper';
import { UserForm } from '../../components/shared/UserForm/UserForm';

export const CreatePage = () => {
  return (
    <Paper>
      <div className={styles.wrapper}>
        <UserForm />
      </div>
    </Paper>
  );
};
