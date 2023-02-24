import { useState, useContext, useEffect } from 'react'
import List from '../../components/List/List'
import { UserContext } from '../../contexts/UserContext'
import styles from './Favorites.module.css'
const Favorites = () => {
  const { user } = useContext(UserContext)
  const [films, setFilms] = useState([])

  useEffect(() => {
    return setFilms(user?.favorites)
  }, [user])
  return (
    <>
      <List list={films} />
    </>
  )
}

export default Favorites
