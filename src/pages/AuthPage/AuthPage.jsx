import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { signUp, login } from '../../services/localStorage'
import InputAuth from '../../components/InputAuth/InputAuth'
import styles from './AuthPage.module.css'

const AuthPage = () => {
  const location = useLocation()
  const isLogin = location.pathname === '/login' ? true : false

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleLogin = () => {
    login()
  }
  const handleSignUp = () => {
    signUp()
  }

  return (
    <div className={styles.authCard}>
      <form className={styles.form} method="POST">
        <InputAuth
          labelName="Username"
          fieldType="text"
          fieldName="username"
          fieldValue={username}
          setField={setUsername}
          placeholder="username"
        />
        <InputAuth
          labelName="Password (at least 6 chars. and max. 12)"
          fieldType="password"
          fieldName="password"
          fieldValue={password}
          setField={setPassword}
          placeholder="passwordPassword123"
        />
        {!isLogin && (
          <InputAuth
            labelName="Confirm password (at least 6 chars. and max. 12)"
            fieldType="password"
            fieldName="confirmPassword"
            fieldValue={confirmPassword}
            setField={setConfirmPassword}
            placeholder="passwordPassword123"
          />
        )}
        <button
          className={styles.formButton}
          type="button"
          onClick={() => {
            isLogin ? handleLogin() : handleSignUp()
          }}
        >
          {isLogin ? 'Login' : 'SignUp'}
        </button>
      </form>
    </div>
  )
}

export default AuthPage
