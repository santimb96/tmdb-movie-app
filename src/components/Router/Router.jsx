import { useEffect, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { autoLogin } from '../../services/localStorage'
import Home from '../../pages/Home/Home'
import Favorites from '../../pages/Favorites/Favorites'
import AuthPage from '../../pages/AuthPage/AuthPage'

const Router = () => {
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    const userCookie = document.cookie.split('username=').pop().split(';')[0]

    if (!userCookie) {
      return
    }
    const isLogged = autoLogin(JSON.parse(userCookie))
    if (isLogged) {
      setUser(isLogged)
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* <Route path="/search/:id" element={<Film />} /> */}
      </Routes>
    </>
  )
}

export default Router
