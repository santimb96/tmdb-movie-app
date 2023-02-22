import React from 'react'
import FilmCard from '../FilmCard/FilmCard'
import styles from './List.module.css'
const List = ({ list = [] }) => {
  return (
    <>
      <div className={styles.list}>
        {list?.map((film) => (
          <FilmCard key={film?.id} film={film} />
        ))}
      </div>
    </>
  )
}

export default List
