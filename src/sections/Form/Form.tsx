import * as React from 'react';
import cn from 'classnames';
import Input from './Input';

import styles from './Form.module.scss';
import Checkbox from "./Checkbox";

const availableAlcohol = [
  'Шампанское полусладкое',
  'Красное сухое вино',
  'Белое полусладкое вино',
  'Ром',
  'Виски',
  'Водка',
];

const availableCome = [
  'Я с удовольствием приду',
  'К сожалению, не смогу присутствовать'
];

const availableDishes = [
  'Рыба',
  'Мясо'
];

export const Form: React.FC = () => {
  const [name, setName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [come, setCome] = React.useState<string>(availableCome[0]);
  const [dish, setDish] = React.useState<string | null>(availableDishes[0]);
  const [alcohol, setAlcohol] = React.useState<string[]>([availableAlcohol[0]]);

  const handleAlco = (value: boolean, alco: string) => {
    const inList = alcohol.includes(alco);

    if (value) {
      if (inList) {
        setAlcohol(value => value.filter(val => val !== alco));
      } {
        setAlcohol(value => [...value, alco]);
      }
    } else {
      setAlcohol(value => value.filter(val => val !== alco));
    }
  }

  return <div className={styles.form}>
    <div className={styles.form__title}>Подтвердите, пожалуйста, свое присутствие на&nbsp;нашем торжестве</div>
    <div className={styles.form__description}>Будем ждать ответ до&nbsp;01.06.2023</div>
    <form onSubmit={e => e.preventDefault()} className={styles.form__content}>
      <div className={styles.form__inputs}>
        <Input value={name} onChange={setName} placeholder="Имя" />
        <Input value={lastName} onChange={setLastName} placeholder="Фамилия" />
      </div>
      <div className={cn(styles['form__section-title'], styles['form__section-title_bold'])}>
        Присутствие:
      </div>
      {availableCome.map(val =>
        <Checkbox
          key={val}
          className={styles.form__checkbox}
          value={come === val}
          onChange={(value) => value && setCome(val)}
          label={val}
        />
      )}
      {come === availableCome[0] && <>
        <div className={cn(styles['form__section-title'], styles['form__section-title_bold'], styles['form__section-title_alcohol'])}>
            Мы&nbsp;хотим, чтобы свадьба прошла весело, поэтому просим вас выбрать алкоголь, который вы&nbsp;предпочитаете:
        </div>
        {availableAlcohol.map(alco =>
          <Checkbox
            key={alco}
            className={styles.form__checkbox}
            value={alcohol.includes(alco)}
            onChange={(value) => handleAlco(value, alco)}
            label={alco}
          />
        )}
        <div className={cn(styles['form__section-title'], styles['form__section-title_bold'], styles['form__section-title_dishes'])}>
            Также уточните ваши предпочтения в&nbsp;горячих блюдах:
        </div>
        {availableDishes.map(val =>
          <Checkbox
            key={val}
            className={styles.form__checkbox}
            value={dish === val}
            onChange={(value) => value ? setDish(val) : setDish(null)}
            label={val}
          />
        )}
      </>
      }
      <button className={styles.form__button}>Отправить</button>
    </form>
  </div>
};

export default Form;
