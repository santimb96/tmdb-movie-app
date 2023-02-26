import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFilmById } from '../../services/getData'
import {
  formatDate,
  getColorFromAverage,
  roundNumber,
} from '../../utils/utilities'
import styles from './Film.module.css'
const Film = () => {
  const { id } = useParams()
  const [film, setFilm] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    Promise.resolve(getFilmById(id))
      .then((data) => setFilm(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])
  return (
    <div className={styles.card}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
        alt={film?.title}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{film?.title || film?.original_name}</h1>
        <div className={styles.info}>
          <p className={styles.releaseDate}>
            {formatDate(new Date(film?.release_date || film?.first_air_date))}
          </p>
          <p
            className={styles.voteAverage}
            style={{
              backgroundColor: getColorFromAverage(+film?.vote_average),
            }}
          >
            {roundNumber(+film?.vote_average)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Film
