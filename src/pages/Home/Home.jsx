import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import List from '../../components/List/List'
import Pager from '../../components/Pager/Pager'
import { getFilms, getFilmByTitle } from '../../services/getData'
import styles from './Home.module.css'

const Home = () => {
  const { search } = useContext(SearchContext)
  const [films, setFilms] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search !== '') {
      const fixPageOnSearch = () => {
        console.log(search.length, page)
        if (search.length === 1) {
          setPage(1)
        }

        return page
      }
      Promise.resolve(getFilmByTitle(search, fixPageOnSearch()))
        .then((data) => {
          setFilms(data?.results)
          setTotalPages(data?.total_pages)
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    } else {
      Promise.resolve(getFilms(page))
        .then((data) => {
          setFilms(data?.results)
          setTotalPages(data?.total_pages)
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }
  }, [page, search])

  return (
    <>
      <List list={films} />
      <Pager pages={totalPages} setPage={setPage} />
    </>
  )
}

export default Home
