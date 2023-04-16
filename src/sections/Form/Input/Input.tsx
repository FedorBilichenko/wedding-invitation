import * as React from 'react';

import styles from './Input.module.scss';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
}

const Input: React.FC<Props> = ({ value, onChange, placeholder, disabled }: Props) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  }
  return <input
    type="text"
    className={styles.input}
    value={value}
    onChange={handleChange}
    placeholder={placeholder}
    disabled={disabled}
  />
};

export default Input;
