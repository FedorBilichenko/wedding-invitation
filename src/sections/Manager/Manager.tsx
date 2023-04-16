import * as React from 'react';

import backLg from './img/bg-lg.png';
import backSmall from './img/bg-small.png';
import styles from './Manager.module.scss';
import {useWindowSize} from "utils";

const Manager: React.FC = () => {
  const { isPhone } = useWindowSize();

  return <div className={styles.manager}>
    <div className={styles.manager__title}>Свадебный организатор</div>
    <div className={styles.manager__content}>По&nbsp;всем вопросам обращайтесь к&nbsp;нашему свадебному организатору</div>
    <div className={styles.manager__content}>
      <div className={styles.manager_bold}>Изольда</div>
      <a href={`tel:+79715086888`}>+7 (971) 508-68-88</a>
    </div>
    <img src={isPhone ? backSmall : backLg} className={styles.manager__img} alt="back" />
  </div>
};

export default Manager;
