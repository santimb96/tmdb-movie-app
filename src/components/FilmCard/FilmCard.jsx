import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import {
  formatDate,
  getColorFromAverage,
  roundNumber,
} from '../../utils/utilities'
import { setFavorite } from '../../services/localStorage'
import FavButton from '../FavButton/FavButton'
import styles from './FilmCard.module.css'

const FilmCard = ({ film }) => {
  const { user, setUser } = useContext(UserContext)
  const isFav = user?.favorites?.find((favorite) => favorite?.id === film?.id)

  const handleFavorite = (favFilm) => setUser(setFavorite(user, favFilm))

  return (
    <div className={styles.card}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
        alt={film?.title}
      />
      {/* <div className={styles.favContainer}>
        <FavButton film={film} handleFavorite={handleFavorite} isFav={isFav} />
      </div> */}
      <h1 className={styles.title}>{film?.title || film?.original_name}</h1>
      <div className={styles.info}>
        <p className={styles.releaseDate}>
          {formatDate(new Date(film?.release_date || film?.first_air_date))}
        </p>
        <p
          className={styles.voteAverage}
          style={{ backgroundColor: getColorFromAverage(+film?.vote_average) }}
        >
          {roundNumber(+film?.vote_average)}
        </p>
        <FavButton film={film} handleFavorite={handleFavorite} isFav={isFav} />
      </div>
    </div>
  )
}

export default FilmCard
