import React from 'react'
import Header from './components/Header/Header'
import Router from './Router/Router'
import styles from './styles/App.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Router />
      </div>
    </div>
  )
}

export default App
