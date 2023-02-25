import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Router from './components/Router/Router'
import styles from './styles/App.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Router />
      </div>
      <Footer />
    </div>
  )
}

export default App
