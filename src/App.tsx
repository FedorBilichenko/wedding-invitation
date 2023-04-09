import styles from './App.module.scss'
import { Main } from './sections';
import './styles/index.scss';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <div className={styles.App}>
      <AnimatePresence>
        <Main />
      </AnimatePresence>
    </div>
  )
}

export default App
