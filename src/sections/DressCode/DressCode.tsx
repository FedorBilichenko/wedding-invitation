import * as React from 'react';

import Item, {ItemProps} from './Item';

import styles from './DressCode.module.scss';
import {useInView} from "react-intersection-observer";

const items: ItemProps[] = [
  {
    background: '#fdf4e3',
  },
  {
    background: '#debcb2',
  },
  {
    background: '#e8e1db',
  },
  {
    background: '#bbc6c8',
  },
  {
    background: '#b3cfbe',
  }
]

const DressCode: React.FC = () => {
  const [ref, inView] = useInView();

  return <div className={styles.dress}>
    <div className={styles.dress__title}>Дресс-код</div>
    <div className={styles.dress__text}>Нам будет очень приятно, если вы&nbsp;поддержите цветовую гамму торжества и&nbsp;выберете наряды в пастельных тонах.<br />Например:</div>
    <div className={styles.dress__content} ref={ref}>
      {items.map((item, index) => <Item className={styles.dress__item} delay={index/2} inView={inView} key={item.background} {...item} />)}
    </div>
  </div>
};

export default DressCode;
