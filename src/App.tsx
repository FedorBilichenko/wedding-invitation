import styles from './App.module.scss'
import { Main, Area, Wishes, Schedule, Manager } from './sections';
import { AnimatePresence } from 'framer-motion';
import './styles/index.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <AnimatePresence>
        <Main />
      </AnimatePresence>
      <Area />
      <Wishes />
      <Schedule />
      <Manager />
    </div>
  )
}

export default App
