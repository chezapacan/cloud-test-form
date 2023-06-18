import styles from './AboutSet.module.css';
import { TextArea } from '../../../../ui/TextArea/TextArea';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import {
  changeAbout,
  clearState,
} from '../../../../../redux/slices/userForm/userFormSlice';
import { Button } from '../../../../ui/Button/Button';
import { useState } from 'react';
import { Modal } from '../../../../ui/Modal/Modal';
import { userFormApi } from '../../../../../redux/api/userFormApi';
import { IconButton } from '../../../../ui/IconButton/IconButton';
import { useNavigate } from 'react-router-dom';

export type AboutSetType = {
  about: string;
};

type Props = {
  prevStep: () => void;
};

export const AboutSet = ({ prevStep }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [createUser, { isLoading, isError, isSuccess, data }] =
    userFormApi.useCreateUserMutation();
  const userForm = useAppSelector((state) => state.userFormReducer);
  const about = userForm.aboutSet;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { isValid },
    handleSubmit,
    watch,
  } = useForm<AboutSetType>({
    defaultValues: about,
  });

  const aboutCharsCount = watch('about').replace(/\s/g, '').length;

  const onSubmit: SubmitHandler<AboutSetType> = async (data) => {
    dispatch(changeAbout(data));
    await createUser({
      ...userForm.detailsSet,
      about: data.about,
      advantages: userForm.advantagesSet.advantages.map(
        (elem) => elem.advantage
      ),
      checkbox: userForm.advantagesSet.checkbox.map(Number),
      radio: +userForm.advantagesSet.radio,
    });
  };

  const handleBackButton = () => {
    handleSubmit(onSubmit)();
    prevStep();
  };

  const handleSendButton = () => {
    if (isValid && aboutCharsCount <= 200) {
      handleSubmit(onSubmit)();
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    if (!isLoading) {
      setOpenModal(false);
      if (data.status === 'success') {
        dispatch(clearState());
        navigate('/');
      }
    }
  };

  return (
    <>
      <Modal isOpen={openModal} onClose={handleCloseModal}>
        <div className={styles.modalwrapper}>
          {isLoading && (
            <>
              <p className={styles.modalMessage}>Отправка формы</p>
              <div className={styles.modalIcon}></div>
              <div className={styles.modalButton} />
            </>
          )}
          {isSuccess && (
            <>
              {data.status === 'success' ? (
                <>
                  <p className={styles.modalMessage}>{data.message}</p>
                  <div className={styles.modalIcon}>
                    <img src={'assets/svg/success.svg'} />
                  </div>
                  <Button text='На главную' onClick={() => navigate('/')} />
                </>
              ) : (
                <>
                  <div className={styles.modalErrorMessage}>
                    <p className={styles.modalMessage}>{data.message}</p>
                    <IconButton onClick={handleCloseModal}>
                      <img src='assets/svg/close.svg'></img>
                    </IconButton>
                  </div>
                  <div className={styles.modalIcon}>
                    <img src={'assets/svg/error.svg'} />
                  </div>
                  <div className={styles.modalButtonCloseWrapper}>
                    <Button text='Закрыть' onClick={handleCloseModal} />
                  </div>
                </>
              )}
            </>
          )}
          {isError && (
            <>
              <div className={styles.modalErrorMessage}>
                <p className={styles.modalMessage}>Ошибка сервера</p>
                <IconButton onClick={handleCloseModal}>
                  <img src='assets/svg/close.svg'></img>
                </IconButton>
              </div>
              <div className={styles.modalIcon}>
                <img src={'assets/svg/error.svg'} />
              </div>
              <div className={styles.modalButtonCloseWrapper}>
                <Button text='Закрыть' onClick={handleCloseModal} />
              </div>
            </>
          )}
        </div>
      </Modal>
      <form>
        <fieldset className={styles.fieldset}>
          <TextArea
            id='field-about'
            label='About'
            name='about'
            placeholder='О себе'
            maxLength={200}
            reactHookForm={{
              register: register,
              charsCount: aboutCharsCount,
            }}
          />
        </fieldset>
        <div className={styles.buttons}>
          <Button
            id='button-back'
            text='Назад'
            outline
            onClick={handleBackButton}
          />
          <Button
            id='button-send'
            text='Отправить'
            onClick={handleSendButton}
          />
        </div>
      </form>
    </>
  );
};
