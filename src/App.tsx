import { Main, Area, Wishes, Schedule, Manager, Form } from './sections';
import { AnimatePresence } from 'framer-motion';
import './styles/index.scss';
import styles from './App.module.scss'

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
      <Form />
    </div>
  )
}

export default App
