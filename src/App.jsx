import React from 'react'
import Header from './components/Header/Header'
import styles from './styles/App.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>Hola mundo!</div>
    </div>
  )
}

export default App
