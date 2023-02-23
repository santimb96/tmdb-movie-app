import React from 'react'
import { formatDate, getColorFromAverage } from '../../utils/utilities'
import styles from './FilmCard.module.css'
import FavButton from '../FavButton/FavButton'

const FilmCard = ({ film }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500${film?.poster_path}`}
        alt={film?.title}
      />
      <FavButton />
      <h1 className={styles.title}>{film?.title}</h1>
      <div className={styles.info}>
        <p className={styles.releaseDate}>
          {formatDate(new Date(film?.release_date))}
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
