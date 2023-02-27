import { useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { signUp, login } from '../../services/localStorage'
import { UserContext } from '../../contexts/UserContext'
import { checkPasswordPattern } from '../../utils/utilities'
import InputAuth from '../../components/InputAuth/InputAuth'
import styles from './AuthPage.module.css'
import Loader from '../../components/Loader/Loader'

const AuthPage = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const location = useLocation()
  const isLogin = location.pathname === '/login' ? true : false

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    if (!checkPasswordPattern(password)) {
      setLoading(false)
      return alert('Password must have at least 1 mayus, 1 minus and 1 number.')
    }
    const isLogged = login({ username, password })
    if (!isLogged) {
      setLoading(false)
      return alert('Wrong username or password')
    }
    setLoading(false)
    setUser(isLogged)
    return navigate('/')
  }
  const handleSignUp = () => {
    setLoading(true)
    if (!checkPasswordPattern(password)) {
      setLoading(false)
      return alert('Password must have at least 1 mayus, 1 minus and 1 number.')
    }
    if (password === confirmPassword) {
      signUp({ username, password, favorites: [], logged: false })
      setLoading(false)
      return navigate('/login')
    }
    setLoading(false)
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
          disabled={loading}
          className={styles.formButton}
          type="button"
          onClick={() => {
            isLogin ? handleLogin() : handleSignUp()
          }}
        >
          {loading ? <Loader /> : isLogin ? 'Sign in' : 'Sign up'}
        </button>
      </form>
    </div>
  )
}

export default AuthPage
