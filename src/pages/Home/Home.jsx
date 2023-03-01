import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import List from '../../components/List/List'
import Pager from '../../components/Pager/Pager'
import Loader from '../../components/Loader/Loader'
import { BiErrorCircle } from 'react-icons/bi'
import { fetchData } from '../../services/getData'
import { API_KEY } from '../../utils/constants'

const Home = () => {
  const { search } = useContext(SearchContext)
  const [films, setFilms] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getData = (url) => {
    Promise.resolve(fetchData(url))
      .then((data) => {
        setFilms(data?.results)
        setTotalPages(data?.total_pages)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    document.title = 'TMDb'
    setLoading(true)
    if (search !== '') {
      const fixPageOnSearch = () => {
        if (search.length === 1) {
          setPage(1)
        }

        return page
      }
      getData(
        `search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${fixPageOnSearch()}&include_adult=false`,
      )
    } else {
      getData(
        `/trending/all/day?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}`,
      )
    }
  }, [page, search])

  return (
    <>
      {error === true && (
        <NotificationModal
          msg={'Can not load the data'}
          color={'var(--error-notification-color)'}
          Icon={BiErrorCircle}
          title={'Error'}
          show={error}
          setShowNotification={setError}
        />
      )}
      {loading ? (
        <Loader />
      ) : (
        <>
          <List list={films} title={'Trending'} />
          <Pager pages={totalPages} setPage={setPage} />
        </>
      )}
    </>
  )
}

export default Home
