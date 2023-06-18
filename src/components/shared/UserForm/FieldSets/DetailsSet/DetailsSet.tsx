import styles from './DetailsSet.module.css';
import { SelectField } from '../../../../ui/SelectField/SelectField';
import { TextField } from '../../../../ui/TextField/TextField';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Button } from '../../../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { changeDetails } from '../../../../../redux/slices/userForm/userFormSlice';
import { nameRegex, nicknameRegex } from '../../../../../utils/regex';

export type DetailsSetType = {
  nickname: string;
  name: string;
  sername: string;
  sex: 'man' | 'woman' | null;
};

type Props = {
  nextStep: () => void;
};

export const DetailsSet = ({ nextStep }: Props) => {
  const selectOptions = ['man', 'woman'];
  const details = useAppSelector((state) => state.userFormReducer.detailsSet);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
  } = useForm<DetailsSetType>({
    defaultValues: details,
  });

  const onSubmit: SubmitHandler<DetailsSetType> = (data) => {
    dispatch(changeDetails(data));
  };

  const handleBackButton = () => {
    navigate('/');
  };

  const handleNextButton = () => {
    handleSubmit(onSubmit)();
    if (isValid) {
      nextStep();
    }
  };

  const getValue = (value: string | null) => {
    return value ? selectOptions.find((option) => option === value) : null;
  };

  return (
    <form>
      <fieldset className={styles.fieldset} name='userDetails'>
        <TextField
          id='field-nickname'
          name='nickname'
          label='Nickname'
          placeholder='n1ckname'
          reactHookForm={{
            errors: errors.nickname,
            register: register,
            maxLength: 30,
            required: 'Обязательное поле',
            pattern: {
              value: nicknameRegex,
              message: 'Недопустимые символы',
            },
          }}
        />
        <TextField
          id='field-name'
          name='name'
          label='Name'
          placeholder='Иван'
          reactHookForm={{
            errors: errors.name,
            register: register,
            maxLength: 50,
            required: 'Обязательное поле',
            pattern: {
              value: nameRegex,
              message: 'Некорректное имя',
            },
          }}
        />
        <TextField
          id='field-sername'
          name='sername'
          label='Sername'
          placeholder='Иванов'
          reactHookForm={{
            errors: errors.sername,
            register: register,
            maxLength: 50,
            required: 'Обязательное поле',
            pattern: {
              value: nameRegex,
              message: 'Некорректная фамилия',
            },
          }}
        />
        <Controller
          control={control}
          name='sex'
          rules={{
            required: 'Обязательное поле',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <SelectField
              id='field-sex'
              options={selectOptions}
              value={getValue(value)}
              label='Sex'
              placeholder='Не выбрано'
              error={error?.message}
              onChange={(newValue) => onChange(newValue)}
            />
          )}
        />
      </fieldset>
      <div className={styles.buttons}>
        <Button
          id='button-back'
          text='Назад'
          outline
          onClick={handleBackButton}
        />
        <Button id='button-next' text='Далее' onClick={handleNextButton} />
      </div>
    </form>
  );
};
