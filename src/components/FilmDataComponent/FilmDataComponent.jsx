import React from 'react'
import styles from './FilmDataComponent.module.css'
const FilmDataComponent = ({ subtitle, list, outputField, length }) => {
  return (
    <>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <div
        className={styles.dataList}
        style={{
          fontSize: `${length > 2 ? 'var(--tag)' : 'var(--text)'}`,
        }}
      >
        {list?.map((element) => (
          <p
            key={element[outputField]}
            className={styles.tag}
            style={{
              backgroundColor: `${
                (length > 2 ||
                  element?.isAverage ||
                  outputField === 'iso_639_1') &&
                'var(--secondary-color)'
              }`,
              color: `${
                (length > 2 ||
                  element?.isAverage ||
                  outputField === 'iso_639_1') &&
                'var(--primary-color)'
              }`,
            }}
          >
            {element[outputField]}
          </p>
        ))}
      </div>
    </>
  )
}

export default FilmDataComponent
