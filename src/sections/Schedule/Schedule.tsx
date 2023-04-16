import * as React from 'react';

import Item, {ItemProps} from './Item';

import styles from './Schedule.module.scss';

const items: ItemProps[] = [
  {
    time: '14:00',
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
    time: '23:30',
    title: <>Окончание вечера</>,
    content: <>К&nbsp;сожалению, даже такой прекрасный вечер может закончиться</>
  }
]

const Schedule: React.FC = () => {
  return <div className={styles.schedule}>
    <div className={styles.schedule__title}>Программа дня</div>
    <div className={styles.schedule__content}>
      {items.map((item, index) => <Item key={index} {...item} className={styles.schedule__item} />)}
    </div>
  </div>
};

export default Schedule;
