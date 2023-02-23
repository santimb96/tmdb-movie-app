import { useEffect, useState } from 'react'
import List from '../../components/List/List'
import Pager from '../../components/Pager/Pager'
import { getFilms } from '../../services/getData'
import styles from './Home.module.css'

const Home = () => {
  const [films, setFilms] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    Promise.resolve(getFilms())
      .then((data) => {
        setFilms(data?.results)
        setTotalPages(data?.total_pages)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])
  return (
    <>
      <List list={films} />
      <Pager pages={totalPages} setPage={setPage} />
    </>
  )
}

export default Home
