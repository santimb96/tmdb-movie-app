import React from 'react'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import styles from './FavButton.module.css'

const FavButton = () => {
  return (
    <button className={styles.fav}>
      <MdOutlineFavoriteBorder />
    </button>
  )
}

export default FavButton
