import { Main, Area, Wishes, Schedule, Manager, Form, DressCode } from './sections';
import { AnimatePresence } from 'framer-motion';
import './styles/index.scss';
import styles from './App.module.scss'
import {useRef} from "react";

const App = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    if (!ref.current) {
      return;
    }

    ref.current.scrollTop = 0;
  }

  return (
    <div ref={ref} className={styles.App}>
      <AnimatePresence>
        <Main />
      </AnimatePresence>
      <Area />
      <Wishes />
      <Schedule />
      <DressCode />
      <Manager />
      <Form scrollToTop={scrollToTop} />
    </div>
  )
}

export default App
