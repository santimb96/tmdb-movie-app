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
      <div className={styles.minimalInfo}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
          alt={film?.title}
        />
        <div className={styles.info}>
          <div className={styles.data}>
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
          <div className={styles.genres}>
            {film?.genres?.map((genre) => (
              <p key={genre?.name} className={styles.genre}>
                {genre?.name}
              </p>
            ))}
          </div>
          <div className={styles.productionCountry}>
            <p>{film?.production_countries[0]?.name}</p>
          </div>
        </div>
      </div>
      <div className={styles.overview}>
        <h1 className={styles.title}>{film?.title || film?.original_name}</h1>
      </div>
    </div>
  )
}

export default Film
