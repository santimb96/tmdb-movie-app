import React from 'react'
import { PAGES_LIMIT } from '../../utils/constants'
import styles from './Pager.module.css'

const Pager = ({ pages = 0, setPage }) => {
  const pagesLimit = pages > PAGES_LIMIT ? PAGES_LIMIT : pages

  const handlePage = (page) => setPage(page)

  return (
    <>
      <div className={styles.pager}>
        {[...Array(pagesLimit)].map((_, page) => (
          <button
            key={`page number ${page}`}
            className={styles.page}
            onClick={() => handlePage(page + 1)}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </>
  )
}

export default Pager
