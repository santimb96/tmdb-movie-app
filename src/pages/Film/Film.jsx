import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../services/getData'
import useMediaQuery from '@mui/material/useMediaQuery'
import { formatDate, roundNumber } from '../../utils/utilities'
import Loader from '../../components/Loader/Loader'
import FilmDataComponent from '../../components/FilmDataComponent/FilmDataComponent'
import NotificationModal from '../../components/NotificationModal/NotificationModal'
import { BiErrorCircle } from 'react-icons/bi'
import styles from './Film.module.css'
import { API_KEY } from '../../utils/constants'
const Film = () => {
  const match = useMediaQuery('(min-width:768px)')

  const { query } = useParams()
  const [film, setFilm] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [showNotification, setShowNotification] = useState(false)

  const customList = [
    {
      field: formatDate(new Date(film?.release_date || film?.first_air_date)),
      isAverage: false,
    },
    { field: roundNumber(+film?.vote_average), isAverage: true },
  ]

  useEffect(() => {
    const params = query.split('+')

    Promise.resolve(
      fetchData(
        `/${params[1] === 'tv' ? 'tv' : 'movie'}/${
          params[0]
        }?api_key=${API_KEY}&language=en-US&&append_to_response=videos,images`,
      ),
    )
      .then((data) => setFilm(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])
  return (
    <>
      {error && (
        <NotificationModal
          msg={'Do not load the data'}
          color={'var(--error-notification-color)'}
          Icon={BiErrorCircle}
          title={'Error'}
          show={showNotification}
          setShowNotification={setShowNotification}
        />
      )}
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.card}>
          <div className={styles.minimalInfo}>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
              alt={film?.title}
            />
            <div className={styles.info}>
              <FilmDataComponent
                subtitle={'Release date and score'}
                list={customList}
                outputField={'field'}
                length={customList?.length}
              />
              <FilmDataComponent
                subtitle={'Genres'}
                list={film?.genres}
                outputField={'name'}
                length={film?.genres?.length}
                backgroundColor={true}
              />
              <FilmDataComponent
                subtitle={'Production country'}
                list={film?.production_countries}
                outputField={'name'}
                length={film?.production_countries?.length}
              />
              <FilmDataComponent
                subtitle={'Languages'}
                list={film?.spoken_languages}
                outputField={'iso_639_1'}
                length={film?.spoken_languages?.length}
                backgroundColor={true}
              />
              <h3 className={styles.subtitle}>Company</h3>
              <div className={styles.company}>
                {film?.production_companies?.map((company, idx) => {
                  if (idx === 0 && company?.logo_path) {
                    return (
                      <img
                        key={company?.name}
                        className={styles.logo}
                        src={`https://image.tmdb.org/t/p/w500${company?.logo_path}`}
                        alt={company?.name}
                      />
                    )
                  }
                })}
              </div>
              {match && (
                <div className={styles.overview}>
                  <h1 className={styles.title}>
                    {film?.title || film?.original_name}
                  </h1>
                  {film?.tagline && (
                    <h2 className={styles.tagline}>"{film?.tagline}"</h2>
                  )}
                  <p className={styles.description}>{film?.overview}</p>
                </div>
              )}
            </div>
          </div>
          {!match && (
            <div className={styles.overview}>
              <h1 className={styles.title}>
                {film?.title || film?.original_name}
              </h1>
              {film?.tagline && (
                <h2 className={styles.tagline}>"{film?.tagline}"</h2>
              )}
              <p className={styles.description}>{film?.overview}</p>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Film
