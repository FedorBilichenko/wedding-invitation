import * as React from 'react';

import Item, {ItemProps} from './Item';

import styles from './DressCode.module.scss';
import {useInView} from "react-intersection-observer";

const items: ItemProps[] = [
  {
    name: 'Platinum',
    background: '#EDEAEB',
    color: '#2D2D34'
  },
  {
    name: 'Grey',
    background: '#E8E7EC',
    color: '#2D2D34'
  },
  {
    name: 'White Smoke',
    background: '#C0C0C0',
    color: '#2D2D34'
  },
  {
    name: 'Green Leaf',
    background: '#4E6E51',
    color: '#FFFFFF'
  },
  {
    name: 'Green',
    background: '#1D4E29',
    color: '#FFFFFF'
  }
]

const DressCode: React.FC = () => {
  const [ref, inView] = useInView();

  return <div className={styles.dress}>
    <div className={styles.dress__title}>Дресс-код</div>
    <div className={styles.dress__text}>Нам будет очень приятно, если вы&nbsp;поддержите цветовую гамму торжества и&nbsp;выберете наряды в&nbsp;соответствии  с&nbsp;цветовой палитрой нашей свадьбы</div>
    <div className={styles.dress__content} ref={ref}>
      {items.map((item, index) => <Item className={styles.dress__item} delay={index/2} inView={inView} key={item.name} {...item} />)}
    </div>
  </div>
};

export default DressCode;
