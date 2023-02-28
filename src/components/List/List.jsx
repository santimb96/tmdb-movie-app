import React from 'react'
import FilmCard from '../FilmCard/FilmCard'
import styles from './List.module.css'
const List = ({ list = [], title = 'Trending' }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.list}>
        {list?.map((film) => (
          <FilmCard key={film?.id} film={film} />
        ))}
      </div>
    </>
  )
}

export default List
