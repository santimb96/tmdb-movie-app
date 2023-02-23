import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Header.module.css'
const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <img src="img/tmdbLogo.svg" alt="tmdbLogo" />
          {isHome && <SearchBar />}
        </div>
      </div>
    </>
  )
}

export default Header
