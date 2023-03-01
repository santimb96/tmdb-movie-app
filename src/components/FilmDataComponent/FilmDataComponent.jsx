import React from 'react'
import { getColorFromAverage } from '../../utils/utilities'
import styles from './FilmDataComponent.module.css'
const FilmDataComponent = ({
  subtitle,
  list,
  outputField,
  length,
  backgroundColor = false,
}) => {
  return (
    <>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <div className={styles.dataList}>
        {list?.map((element) => (
          <p
            key={element[outputField]}
            className={styles.tag}
            style={{
              backgroundColor: `${
                (backgroundColor || element?.isAverage) &&
                (element?.isAverage
                  ? getColorFromAverage(element[outputField])
                  : 'var(--secondary-color)')
              }`,
              color: `${
                (backgroundColor || element?.isAverage) &&
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
