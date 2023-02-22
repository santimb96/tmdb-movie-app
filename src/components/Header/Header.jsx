import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Header.module.css'
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <img src="img/tmdbLogo.svg" alt="tmdbLogo" />
          <SearchBar />
        </div>
      </div>
    </>
  )
}

export default Header
