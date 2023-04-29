import * as React from 'react';
import cn from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import img1 from './img/1.png';
import img2 from './img/2.png';
import {useWindowSize} from "utils";
import {useInView} from "react-intersection-observer";

import styles from './Manager.module.scss';

const variants1 = {
  visible: { opacity: 1, x: 0, rotate: 19, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 60, rotate: 19 }
}

const variants2 = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -60 }
}

const Manager: React.FC = () => {
  const { isPhone } = useWindowSize();
  const [ref, inView] = useInView();
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  React.useEffect(() => {

    if (inView) {
      controls1.start('visible');
      controls2.start('visible');
    } else {
      controls1.start('hidden');
      controls2.start('hidden');
    }
  }, [inView]);


  return <div className={styles.manager}>
    <div className={styles.manager__title}>Свадебный организатор</div>
    <div className={styles.manager__content}>По&nbsp;всем вопросам обращайтесь к&nbsp;нашему свадебному организатору</div>
    <div className={styles.manager__content}>
      <div className={styles.manager_bold}>Изольда</div>
      <a href={`tel:+79715086888`}>+7 (971) 508-68-88</a>
    </div>
    <div className={styles.manager__imgs} ref={ref}>
      <motion.img src={img1} animate={controls1} variants={variants2} className={cn(styles.manager__img, styles.manager__img_1)} alt="back" />
      <motion.img src={img2} animate={controls2} variants={variants1} className={cn(styles.manager__img, styles.manager__img_2)} alt="back" />
    </div>
  </div>
};

export default Manager;
