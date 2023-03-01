import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import {
  formatDate,
  getColorFromAverage,
  roundNumber,
} from '../../utils/utilities'
import { AiOutlineCheckCircle, AiOutlineInfoCircle } from 'react-icons/ai'
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
  const [errorMessage, setErrorMessage] = useState('')
  const [infoMessage, setInfoMessage] = useState('')
  const [info, setInfo] = useState(false)
  const isFav = user?.favorites?.find((favorite) => favorite?.id === film?.id)

  const handleFavorite = (favFilm) => {
    if (!user?.username) {
      setInfo(true)
      setInfoMessage('You must be logged if you want add favorites')
      return setShowNotification(true)
    }
    const favorite = setFavorite(user, favFilm)
    if (!favorite) {
      setError(true)
      setErrorMessage('Error adding/removing film')
      return setShowNotification(true)
    }
    setUser(favorite)
    return setShowNotification(true)
  }
  const handleFilmInformation = (filmId, mediaType) =>
    navigate(`/search/${filmId + '+' + mediaType}`)

  return (
    <>
      <NotificationModal
        msg={
          error
            ? errorMessage
            : info
            ? infoMessage
            : `Film ${isFav ? 'added' : 'removed'} successfully`
        }
        color={
          error
            ? 'var(--error-notification-color)'
            : info
            ? 'var(--info-notification-color)'
            : 'var(--success-notification-color)'
        }
        Icon={
          error
            ? BiErrorCircle
            : info
            ? AiOutlineInfoCircle
            : AiOutlineCheckCircle
        }
        title={error ? 'Error' : info ? 'Info' : 'Success'}
        show={showNotification}
        setShowNotification={setShowNotification}
      />
      <div className={styles.card}>
        <img
          className={styles.poster}
          onClick={() => handleFilmInformation(film?.id, film?.media_type)}
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
