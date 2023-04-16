import * as React from 'react';
import { motion } from 'framer-motion';

import styles from './Banner.module.scss';

const Banner: React.FC = () => {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.banner}>
    <div className={styles.banner__title}>ВАШИ ОТВЕТЫ УСПЕШНО ОТПРАВЛЕНЫ</div>
  </motion.div>
};

export default Banner;
