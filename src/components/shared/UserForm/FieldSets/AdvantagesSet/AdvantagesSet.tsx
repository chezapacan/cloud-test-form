import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import styles from './AdvantagesSet.module.css';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { Button } from '../../../../ui/Button/Button';
import { changeAdvantages } from '../../../../../redux/slices/userForm/userFormSlice';
import { CheckBox } from '../../../../ui/CheckBox/CheckBox';
import { RadioButton } from '../../../../ui/RadioButton/RadioButton';
import { TextField } from '../../../../ui/TextField/TextField';
import { IconButton } from '../../../../ui/IconButton/IconButton';

export type AdvantagesSetType = {
  advantages: Array<AdvantageItem>;
  checkbox: Array<string>;
  radio: string;
};

type AdvantageItem = {
  advantage: string;
};

type Props = {
  nextStep: () => void;
  prevStep: () => void;
};

export const AdvantagesSet = ({ nextStep, prevStep }: Props) => {
  const advantages = useAppSelector(
    (state) => state.userFormReducer.advantagesSet
  );
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { isValid },
    handleSubmit,
    control,
  } = useForm<AdvantagesSetType>({
    defaultValues: advantages,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'advantages',
    control,
  });

  const onSubmit: SubmitHandler<AdvantagesSetType> = (data) => {
    if (isValid) {
      const emptyAdvantages = data.advantages.filter((elem) => elem.advantage);
      data.advantages =
        emptyAdvantages.length === 0
          ? Array.from({ length: 3 }, () => ({
              advantage: '',
            }))
          : emptyAdvantages;
      dispatch(changeAdvantages(data));
    }
  };

  const handleBackButton = () => {
    handleSubmit(onSubmit)();
    prevStep();
  };

  const handleNextButton = () => {
    handleSubmit(onSubmit)();
    nextStep();
  };

  const advantageElements = fields.map((field, index) => (
    <div className={styles.advantageItem} key={field.id}>
      <TextField
        id={`field-advatages-${index + 1}`}
        placeholder='Ваше приемущество'
        name={`advantages.${index}.advantage` as const}
        defaultValue={field.advantage}
        reactHookForm={{ register: register }}
      />
      <IconButton
        id={`button-remove-${index + 1}`}
        onClick={() => remove(index)}
      >
        <img src='/src/assets/svg/trash.svg' />
      </IconButton>
    </div>
  ));

  const checkboxElements = Array.from({ length: 3 }, (_, index) => (
    <CheckBox
      key={index}
      id={`field-checkbox-group-option-${index + 1}`}
      name='checkbox'
      value={index + 1}
      reactHookForm={{ register: register }}
    />
  ));

  const radioElements = Array.from({ length: 3 }, (_, index) => (
    <RadioButton
      key={index}
      id={`field-radio-group-option-${index + 1}`}
      name='radio'
      value={index + 1}
      reactHookForm={{ register: register }}
    />
  ));

  return (
    <form>
      <fieldset className={styles.fieldset} name='userDetails'>
        <div className={styles.advantages}>
          <label>Advantages</label>
          {advantageElements}
          <div>
            <Button
              id='button-add'
              outline
              onClick={() => append({ advantage: '' })}
            >
              <div className={styles.addButtonIcon}>
                <img src='/src/assets/svg/plus.svg' />
              </div>
            </Button>
          </div>
        </div>
        <div>
          <label>Checkbox group</label>
          {checkboxElements}
        </div>
        <div>
          <label>Radio group</label>
          {radioElements}
        </div>
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
