import * as React from 'react';
import cn from 'classnames';

import styles from './Item.module.scss';

export type ItemProps = {
  time: string;
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

const Item: React.FC<ItemProps> = ({ time, title, content, className }) => {
  return <div className={cn(styles.item, className)}>
    <div className={styles.item__time}>{time}</div>
    <div className={styles.item__content}>
      <div className={styles.item_bold}>{title}</div>
      {content}
    </div>
  </div>
};

export default Item;
