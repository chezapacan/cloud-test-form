import styles from './SelectField.module.css';
import { useState } from 'react';

type Props = {
  id?: string;
  options: Array<string>;
  label?: string;
  placeholder?: string;
  error?: string;
  value?: string | null;
  onChange?: (value: string) => void;
};

export const SelectField = (props: Props) => {
  const { id, label, options, placeholder, error, value, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    value || null
  );

  const handleClickOption = (event: React.MouseEvent<HTMLLIElement>) => {
    setSelectedOption(event.currentTarget.innerText);
    if (onChange) {
      onChange(event.currentTarget.innerText);
    }
    setIsOpen(false);
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const optionItems = options.map((option) => (
    <li
      id={`field-sex-option-${option}`}
      className={styles.listItem}
      key={option}
      value={option}
      onClick={handleClickOption}
    >
      {option}
    </li>
  ));

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <div
        className={`${styles.container} ${
          isOpen ? styles.containerOpened : ''
        }`}
      >
        <div
          id={id}
          className={`${styles.header} ${
            selectedOption ? '' : styles.placeholder
          }`}
          onClick={handleToggleOpen}
        >
          {selectedOption || placeholder}
          <div className={styles.icon}>
            <img src='assets/svg/select.svg' />
          </div>
        </div>
        {isOpen && (
          <div className={styles.listContainer}>
            <ul className={styles.list}>{optionItems}</ul>
          </div>
        )}
      </div>
      {error && <p className={styles.error}>* {error}</p>}
    </div>
  );
};
