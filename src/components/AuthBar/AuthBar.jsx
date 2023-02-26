import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { logOut } from '../../services/localStorage'
import { Link, useNavigate } from 'react-router-dom'
import { GiPadlock } from 'react-icons/gi'
import { FaUserAlt } from 'react-icons/fa'
import { GoTriangleDown } from 'react-icons/go'
import { MdOutlineFavorite } from 'react-icons/md'
import { AiOutlineLogout, AiFillHome } from 'react-icons/ai'
import styles from './AuthBar.module.css'

const AuthBar = () => {
  const { user, setUser } = useContext(UserContext)
  const path = location.pathname
  const navigate = useNavigate()

  const [menu, setMenu] = useState(false)

  const handleLogOut = () => {
    setMenu(false)
    setUser(logOut(user))
    return navigate('/')
  }

  return (
    <div className={styles.authBar}>
      {user?.logged ? (
        <>
          <div className={styles.user} onClick={() => setMenu(!menu)}>
            <FaUserAlt />
            <p>{user?.username}</p>
            <GoTriangleDown />
          </div>
          {menu && (
            <div className={styles.menu} onClick={() => setMenu(false)}>
              <Link to={path === '/' ? '/favorites' : '/'}>
                {path === '/' ? (
                  <>
                    <MdOutlineFavorite />
                    Favorites
                  </>
                ) : (
                  <>
                    <AiFillHome />
                    Home
                  </>
                )}
              </Link>
              <p onClick={() => handleLogOut()}>
                <AiOutlineLogout />
                Logout
              </p>
            </div>
          )}
        </>
      ) : (
        <>
          <div className={styles.login}>
            <Link to="/login">
              <GiPadlock /> Login
            </Link>
          </div>
          <div className={styles.signUp}>
            <Link to="/signup">
              <GiPadlock /> SignUp
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default AuthBar
