import React from 'react'
import { useLocation } from 'react-router-dom'
import { NO_AUTH_PATHS } from '../../utils/constants'
import SearchBar from '../SearchBar/SearchBar'
import AuthBar from '../AuthBar/AuthBar'
import styles from './Header.module.css'
const Header = () => {
  const location = useLocation()
  const showSearchBar = NO_AUTH_PATHS?.find(
    (pathname) => pathname === location.pathname,
  )
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <AuthBar />
          <img src="/img/tmdbLogo.svg" alt="tmdbLogo" />
          {showSearchBar && <SearchBar />}
        </div>
      </div>
    </>
  )
}

export default Header
