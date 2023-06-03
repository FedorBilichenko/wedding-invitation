import * as React from 'react';
import cn from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import styles from './Wishes.module.scss';

const img1Variants = {
  visible: { rotate: -28, transition: { duration: 1 } },
  hidden: { rotate: -40 }
}

const img2Variants = {
  visible: { rotate: 11, transition: { duration: 1 } },
  hidden: { rotate: 0 }
}

const img3Variants = {
  visible: { rotate: -11, transition: { duration: 1 } },
  hidden: { rotate: 0 }
}

const Wishes: React.FC = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls1.start("visible");
      controls2.start("visible");
      controls3.start("visible");
    } else {
      controls1.start("hidden");
      controls2.start("hidden");
      controls3.start("hidden");
    }
  }, [inView]);

  return <div className={styles.wishes}>
    <div className={styles.wishes__title}>Пожелания</div>
    <div className={styles.wishes__content}>
      К сожалению, мы не успеем насладиться красотой подаренных цветов.<br />
      Главное для нас&nbsp;&mdash; ваше внимание, а&nbsp;радость доставит любой подарок в&nbsp;конверте!</div>
    <div className={styles.wishes__imgs}>
      <motion.img variants={img1Variants} animate={controls1} className={cn(styles.wishes__img, styles.wishes__img_1)} src={img1} />
      <motion.img variants={img2Variants} animate={controls2} className={cn(styles.wishes__img, styles.wishes__img_2)} src={img2} />
      <motion.img ref={ref} variants={img3Variants} animate={controls3} className={cn(styles.wishes__img, styles.wishes__img_3)} src={img3} />
    </div>
  </div>
};

export default Wishes;
