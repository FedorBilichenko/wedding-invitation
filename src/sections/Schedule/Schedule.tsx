import * as React from 'react';

import Item, {ItemProps} from './Item';

import styles from './Schedule.module.scss';
import {useInView} from "react-intersection-observer";

const items: ItemProps[] = [
  {
    time: '14:30',
    title: <>Сбор гостей, фуршет</>,
    content: <>Собираясь на&nbsp;мероприятие, просим взять с&nbsp;собой ваши прекрасные улыбки и&nbsp;хорошее настроение</>
  },
  {
    time: '15:00',
    title: <>Церемония бракосочетания</>,
    content: <>На&nbsp;всякий случай приготовьте платочки для трогательного момента</>
  },
  {
    time: '16:00',
    title: <>Начало банкета</>,
    content: <>Время вкусной еды, танцев и&nbsp;развлечений</>
  },
  {
    time: '20:00',
    title: <>Свадебный торт</>,
    content: <>Сладкая традиция, которую мы&nbsp;не&nbsp;можем обойти стороной</>
  },
  {
    time: '22:00',
    title: <>Окончание вечера</>,
    content: <>К&nbsp;сожалению, даже такой прекрасный вечер может закончиться</>
  }
]

const Schedule: React.FC = () => {
  const [ref, inView] = useInView();

  return <div className={styles.schedule}>
    <div className={styles.schedule__title}>Программа дня</div>
    <div className={styles.schedule__content} ref={ref}>
      {items.map((item, index) => <Item key={index} {...item} delay={index / 2} inView={inView} className={styles.schedule__item} />)}
    </div>
  </div>
};

export default Schedule;
