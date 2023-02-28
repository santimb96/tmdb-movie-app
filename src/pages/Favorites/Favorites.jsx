import { useState, useContext, useEffect } from 'react'
import List from '../../components/List/List'
import { UserContext } from '../../contexts/UserContext'

const Favorites = () => {
  const { user } = useContext(UserContext)
  const [films, setFilms] = useState([])

  useEffect(() => {
    return setFilms(user?.favorites)
  }, [user])
  return (
    <>
      <List list={films} title={'Favorites'} />
    </>
  )
}

export default Favorites
