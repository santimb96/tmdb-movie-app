import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import {
  formatDate,
  getColorFromAverage,
  roundNumber,
} from '../../utils/utilities'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'
import { setFavorite } from '../../services/localStorage'
import FavButton from '../FavButton/FavButton'
import NotificationModal from '../NotificationModal/NotificationModal'
import styles from './FilmCard.module.css'

const FilmCard = ({ film }) => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)
  const [showNotification, setShowNotification] = useState(false)
  const [error, setError] = useState(false)
  const isFav = user?.favorites?.find((favorite) => favorite?.id === film?.id)

  const handleFavorite = (favFilm) => {
    const favorite = setFavorite(user, favFilm)
    if (!favorite) {
      setError(true)
      return setShowNotification(true)
    }
    setUser(favorite)
    return setShowNotification(true)
  }
  const handleFilmInformation = (filmId) => {
    return navigate(`/search/${filmId}`)
  }
  return (
    <>
      <NotificationModal
        msg={
          !error
            ? `Film ${isFav ? 'added' : 'removed'} successfully`
            : 'Error adding/removing film'
        }
        color={
          !error
            ? 'var(--success-notification-color)'
            : 'var(--error-notification-color)'
        }
        Icon={!error ? AiOutlineCheckCircle : BiErrorCircle}
        title={!error ? 'Success' : 'Error'}
        show={showNotification}
        setShowNotification={setShowNotification}
      />
      <div className={styles.card}>
        <img
          className={styles.poster}
          onClick={() => handleFilmInformation(film?.id)}
          src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
          alt={film?.title}
        />
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
          <FavButton
            film={film}
            handleFavorite={handleFavorite}
            isFav={isFav}
          />
        </div>
      </div>
    </>
  )
}

export default FilmCard
