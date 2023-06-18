import styles from './MainPage.module.css';
import { Paper } from '../../components/ui/Paper/Paper';
import { Profile } from '../../components/ui/Profile/Profile';
import { TextField } from '../../components/ui/TextField/TextField';
import { Button } from '../../components/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { normalizePhoneNumber } from '../../utils/normalizePhoneNumber';
import { emailRegex } from '../../utils/regex';

type MainPageType = {
  phone: string;
  email: string;
};

export const MainPage = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<MainPageType>({
    defaultValues: {
      phone: '+7 (919) 903-28-06',
      email: 'czpmode@gmail.com',
    },
  });

  const handleStartButton = () => {
    handleSubmit(() => {})();
    if (isValid) {
      navigate('/create');
    }
  };

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = normalizePhoneNumber(event.target.value);
    event.target.value = phoneNumber;
  };

  return (
    <Paper>
      <div className={styles.wrapper}>
        <Profile titleName='Дмитрий Микрюков' />
        <form>
          <div className={styles.other}>
            <TextField
              name='phone'
              label='Номер телефона'
              placeholder='+7 (999) 999-99-99'
              reactHookForm={{
                errors: errors.phone,
                register: register,
                required: 'Обязательное поле',
                minLength: 18,
              }}
              onChange={handleChangePhone}
              disabled
            />
            <TextField
              name='email'
              label='Email'
              placeholder='example@example.com'
              reactHookForm={{
                errors: errors.email,
                register: register,
                required: 'Обязательное поле',
                pattern: {
                  value: emailRegex,
                  message: 'Некорректный email',
                },
              }}
              disabled
            />
          </div>
        </form>
        <Button id='button-start' text='Начать' onClick={handleStartButton} />
      </div>
    </Paper>
  );
};
