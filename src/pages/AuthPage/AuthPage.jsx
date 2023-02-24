import { useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { signUp, login } from '../../services/localStorage'
import { UserContext } from '../../contexts/UserContext'
import InputAuth from '../../components/InputAuth/InputAuth'
import styles from './AuthPage.module.css'

const AuthPage = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const location = useLocation()
  const isLogin = location.pathname === '/login' ? true : false

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleLogin = () => {
    const isLogged = login({ username, password })
    if (!isLogged) {
      return alert('Wrong username or password')
    }
    setUser(isLogged)
    return navigate('/')
  }
  const handleSignUp = () => {
    if (password === confirmPassword) {
      signUp({ username, password, favorites: [], logged: false })
      return navigate('/login')
    }
    return alert('Passwords do not match')
  }

  return (
    <div className={styles.authCard}>
      <form className={styles.form} method="POST">
        <InputAuth
          labelName="Username (max. characters: 9)"
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
