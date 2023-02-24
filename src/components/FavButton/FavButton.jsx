import React from 'react'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import styles from './FavButton.module.css'

const FavButton = ({ film, handleFavorite, isFav }) => {
  return (
    <button onClick={() => handleFavorite(film)} className={styles.fav}>
      {isFav() ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
    </button>
  )
}

export default FavButton
