import React from 'react'
import { Link } from 'react-router-dom'
import { GiPadlock } from 'react-icons/gi'
import styles from './AuthBar.module.css'
const AuthBar = () => {
  return (
    <div className={styles.authBar}>
      <div className={styles.login}>
        <GiPadlock />
        <Link to="/login">Login</Link>
      </div>
      <div className={styles.signUp}>
        <GiPadlock />
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  )
}

export default AuthBar
