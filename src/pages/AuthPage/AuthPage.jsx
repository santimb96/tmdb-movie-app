import { useState, useContext, Component } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { signUp, login } from '../../services/localStorage'
import { UserContext } from '../../contexts/UserContext'
import { checkPasswordPattern } from '../../utils/utilities'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'
import InputAuth from '../../components/InputAuth/InputAuth'
import NotificationModal from '../../components/NotificationModal/NotificationModal'
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

  const [msg, setMsg] = useState('')
  const [color, setColor] = useState('')
  // const [Icon, setIcon] = useState(null)
  const [title, setTitle] = useState('')
  const [showNotification, setShowNotification] = useState(false)

  const handleNotification = (
    message,
    backgroundColor,
    // iconMessage,
    titleMessage,
  ) => {
    setMsg(message)
    setColor(backgroundColor)
    // setIcon(iconMessage)
    setTitle(titleMessage)
    setShowNotification(true)
    return
  }

  const handleLogin = () => {
    setLoading(true)
    if (!checkPasswordPattern(password)) {
      setLoading(false)
      return handleNotification(
        'Password must have at least 1 mayus, 1 minus and 1 number',
        'var(--error-notification-color)',
        'Error',
      )
    }
    const isLogged = login({ username, password })
    setLoading(false)
    if (!isLogged) {
      return handleNotification(
        'Wrong username or password',
        'var(--error-notification-color)',
        'Error',
      )
    }
    setUser(isLogged)
    return navigate('/')
  }
  const handleSignUp = async () => {
    setLoading(true)
    if (!checkPasswordPattern(password)) {
      setLoading(false)
      return handleNotification(
        'Password must have at least 1 mayus, 1 minus and 1 number',
        'var(--error-notification-color)',
        'Error',
      )
    }
    if (password === confirmPassword) {
      setLoading(false)
      if (!signUp({ username, password, favorites: [], logged: false })) {
        return handleNotification(
          'User already exists',
          'var(--error-notification-color)',
          'Error',
        )
      }
      handleNotification(
        'User created successfully',
        'var(--success-notification-color)',
        'Success',
      )
      return setTimeout(() => navigate('/login'), 3000)
    }
    setLoading(false)
    return handleNotification(
      'Passwords do not match',
      'var(--error-notification-color)',
      'Error',
    )
  }

  return (
    <>
      <NotificationModal
        msg={msg}
        color={color}
        Icon={title === 'Success' ? AiOutlineCheckCircle : BiErrorCircle}
        title={title}
        show={showNotification}
        setShowNotification={setShowNotification}
      />
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
            outlineColor={
              checkPasswordPattern(password) ? 'yellowgreen' : 'red'
            }
          />
          {!isLogin && (
            <InputAuth
              labelName="Confirm password (at least 6 chars. and max. 12)"
              fieldType="password"
              fieldName="confirmPassword"
              fieldValue={confirmPassword}
              setField={setConfirmPassword}
              placeholder="passwordPassword123"
              outlineColor={
                checkPasswordPattern(confirmPassword) ? 'yellowgreen' : 'red'
              }
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
    </>
  )
}

export default AuthPage
