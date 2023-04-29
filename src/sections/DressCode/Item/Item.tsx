import * as React from 'react';
import cn from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import styles from './Item.module.scss';

export type ItemProps = {
  name: string;
  background: string;
  color: string;
  className?: string;
  delay?: number;
  inView?: boolean;
}

const Item: React.FC<ItemProps> = ({ name, className, background, color, delay, inView }) => {
  const controls = useAnimation();

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

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay || 0 } },
    hidden: { opacity: 0, y: 40 }
  }

  return <motion.div variants={variants} animate={controls} className={cn(styles.item, className)} style={{
    backgroundColor: background,
    color
  }}>
    <CopyToClipboard text={background}>
      <div className={styles.item__text}>
        {name}
      </div>
    </CopyToClipboard>
  </motion.div>
};

export default Item;
