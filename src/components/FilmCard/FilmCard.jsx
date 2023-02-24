import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { formatDate, getColorFromAverage } from '../../utils/utilities'
import { setFavorite } from '../../services/localStorage'
import styles from './FilmCard.module.css'
import FavButton from '../FavButton/FavButton'

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
      <FavButton film={film} handleFavorite={handleFavorite} isFav={isFav} />
      <h1 className={styles.title}>{film?.title || film?.original_name}</h1>
      <div className={styles.info}>
        <p className={styles.releaseDate}>
          {formatDate(new Date(film?.release_date || film?.first_air_date))}
        </p>
        <p
          className={styles.voteAverage}
          style={{ backgroundColor: getColorFromAverage(+film?.vote_average) }}
        >
          {film?.vote_average}
        </p>
      </div>
    </div>
  )
}

export default FilmCard
