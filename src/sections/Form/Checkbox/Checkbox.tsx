import * as React from 'react';
import cn from 'classnames';

import styles from './Checkbox.module.scss';

type Props = {
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
  className?: string;
}

const Checkbox: React.FC<Props> = ({ value, onChange, label, className }: Props) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(!event.target.checked);
  }

  return <label className={cn(styles.container, value && styles.container_checked, className)}>
      <input className={styles.container__input} type="checkbox" checked={value} onChange={() => onChange(!value)} />
      <div className={styles['container__input-fake']}>
        <svg className={styles.container__arrow} width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6L7 12L17 1" stroke="#4E6E51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    <span className={styles.container__label}>{label}</span>
  </label>
};

export default Checkbox;
