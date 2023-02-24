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
              <Link to="/favorites">
                <MdOutlineFavorite />
                Favorites
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
            <GiPadlock />
            <Link to="/login">Login</Link>
          </div>
          <div className={styles.signUp}>
            <GiPadlock />
            <Link to="/signup">SignUp</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default AuthBar
