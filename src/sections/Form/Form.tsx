import * as React from 'react';
import cn from 'classnames';
import { initializeApp } from "firebase/app";
import { AnimatePresence } from 'framer-motion';
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, addDoc } from 'firebase/firestore/lite';
import Input from './Input';

import styles from './Form.module.scss';
import Checkbox from "./Checkbox";
import Banner from "./Banner";

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

const firebaseConfig = {
  apiKey: "AIzaSyBbV-AAHmSmEgZqbeeu_hLimkcZfUPb-Dg",
  authDomain: "wedding-invitation-bff82.firebaseapp.com",
  projectId: "wedding-invitation-bff82",
  storageBucket: "wedding-invitation-bff82.appspot.com",
  messagingSenderId: "506587225924",
  appId: "1:506587225924:web:0f1e76cc4ad182852a8111"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type Props = {
  scrollToTop: () => void;
}

export type Sex = 'male' | 'female';

export const Form: React.FC<Props> = ({ scrollToTop }) => {
  const [id, setId] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [sex, setSex] = React.useState<Sex>('male');
  const [come, setCome] = React.useState<string>(availableCome[0]);
  const [dish, setDish] = React.useState<string | null>(availableDishes[0]);
  const [alcohol, setAlcohol] = React.useState<string[]>([availableAlcohol[0]]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [showBanner, setShowBanner] = React.useState<boolean>(false);

  React.useEffect(() => {
    const init = async () => {
      const search = new URLSearchParams(window.location.search);
      const id = search.get('uid');

      if (!id) {
        return;
      }

      setId(id);

      try {
        const docRef = doc(db, 'users', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data: Partial<{ name: string; alcohol: string[]; come: string; dish: string; sex: 'male' | 'female' }> = docSnap.data();

          const name = data.name || '';

          setName(name);

          if (data.alcohol !== undefined) {
            setAlcohol(data.alcohol);
          }
          if (data.come !== undefined) {
            setCome(data.come);
          }
          if (data.dish !== undefined) {
            setDish(data.dish)
          }
          if (data.sex !== undefined) {
            setSex(data.sex)
          }
        }
      } catch (e) {
        console.log('firebase get user error');
      }
    }

    init();
  }, []);

  const setData = async () => {
    if (!id) {
      return;
    }
    try {
      setIsLoading(true);
      const docRef = doc(db, 'users', id);
      await setDoc(docRef, { alcohol, dish, come }, { merge: true });
      setShowBanner(true);
      setTimeout(scrollToTop, 500);
      setTimeout(() => setShowBanner(false), 2000);
      setIsLoading(false);
    } catch (e) {
      console.log('firebase set user error');
      setIsLoading(false);
    }
  }

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

  if (!id) {
    return null;
  }

  return <>
    <AnimatePresence>
      {showBanner && <Banner />}
    </AnimatePresence>
    <div className={styles.form}>
    <div className={styles.form__title}>{sex === 'male' ? 'Дорогой' : 'Дорогая'} {name}, подтвердите, пожалуйста, свое присутствие на&nbsp;нашем торжестве</div>
    <div className={styles.form__description}>Будем ждать ответ до&nbsp;01.06.2023</div>
    <form onSubmit={e => e.preventDefault()} className={styles.form__content}>
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
      <button className={styles.form__button} onClick={setData} disabled={isLoading}>{isLoading ? 'Отправляю...' : 'Отправить'}</button>
    </form>
  </div>
    </>
};

export default Form;
