import * as React from 'react';
import { motion } from 'framer-motion';

import Names from './Names';
import Date from './Date';
import styles from './Main.module.scss';

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0
  },
};


const children = [
  <div className={styles.main__names}>
    <Names />
  </div>,
  <div className={styles.main__date}>
    <Date />
  </div>,
  <div
    className={styles.main__text}>
    <span className={styles['main__text-bold']}>Дорогие родные и друзья,</span><br />
    Приглашаем вас разделить с нами радость особенного для нас события и стать частью нашей семейной истории
  </div>
]

const Main: React.FC = () => {
  return <div className={styles.main}>
    <motion.div variants={container} initial="hidden" animate="show" className={styles.main__content}>
      {children.map((child, key) =>
        <motion.div
          transition={{
            duration: 1,
            ease: 'easeInOut'
          }}
          variants={item}
          key={key}>
          {child}
        </motion.div>)}
    </motion.div>
  </div>
}

export default Main;
