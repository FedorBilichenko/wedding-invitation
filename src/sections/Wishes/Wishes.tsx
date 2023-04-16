import * as React from 'react';

import backgroundImg from './img/background.png';
import styles from './Wishes.module.scss';

const Wishes: React.FC = () => {
  return <div className={styles.wishes}>
    <div className={styles.wishes__title}>Пожелания</div>
    <div className={styles.wishes__content}>Главное для нас&nbsp;&mdash; ваше внимание, а&nbsp;радость доставит любой подарок в&nbsp;конверте!</div>
    <img src={backgroundImg} alt="wishes" className={styles.wishes__img} />
  </div>
};

export default Wishes;
