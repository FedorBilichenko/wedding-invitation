import * as React from 'react';
import cn from 'classnames';
import { motion, useAnimation } from 'framer-motion';

import styles from './Item.module.scss';

export type ItemProps = {
  time: string;
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  inView?: boolean;
  delay?: number;
}



const Item: React.FC<ItemProps> = ({ time, title, content, className, inView, delay }) => {
  const controls = useAnimation();

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: delay || 0 } },
    hidden: { opacity: 0, y: 40 }
  }

  React.useEffect(() => {
    if (inView === undefined) {
      return;
    }

    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView]);

  return <motion.div animate={controls} variants={variants} className={cn(styles.item, className)}>
    <div className={styles.item__time}>{time}</div>
    <div className={styles.item__content}>
      <div className={styles.item_bold}>{title}</div>
      {content}
    </div>
  </motion.div>
};

export default Item;
