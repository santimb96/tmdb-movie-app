import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import InputAuth from '../../components/InputAuth/InputAuth'
import styles from './AuthPage.module.css'

const AuthPage = () => {
  const location = useLocation()
  const isLogin = location.pathname === '/login' ? true : false

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleLogin = () => {
    console.log('login')
  }
  const handleSignUp = () => {
    console.log('signup')
  }

  return (
    <div className={styles.authCard}>
      <h1 className={styles.title}>{isLogin ? 'LogIn' : 'SignUp'}</h1>
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
          labelName="Password"
          fieldType="password"
          fieldName="password"
          fieldValue={password}
          setField={setPassword}
          placeholder="passwordPassword123"
        />
        {!isLogin && (
          <InputAuth
            labelName="Confirm Password"
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
          {isLogin ? 'LogIn' : 'SignUp'}
        </button>
      </form>
    </div>
  )
}

export default AuthPage
