import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { logOut } from '../../services/localStorage'
import { Link } from 'react-router-dom'
import { GiPadlock } from 'react-icons/gi'
import { FaUserAlt } from 'react-icons/fa'
import { GoTriangleDown } from 'react-icons/go'
import { MdOutlineFavorite } from 'react-icons/md'
import { AiOutlineLogout } from 'react-icons/ai'
import styles from './AuthBar.module.css'

const AuthBar = () => {
  const { user, setUser } = useContext(UserContext)

  const [menu, setMenu] = useState(false)

  const handleLogOut = () => {
    setMenu(false)
    return setUser(logOut(user))
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
            <div className={styles.menu}>
              <Link to={location.pathname === '/' ? '/favorites' : '/'}>
                <MdOutlineFavorite />
                {location.pathname === '/' ? 'Favorites' : 'Home'}
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
