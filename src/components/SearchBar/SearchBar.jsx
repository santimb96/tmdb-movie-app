import { useState, useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './SearchBar.module.css'

const SearchBar = ({ field = 'title' }) => {
  const { search, setSearch } = useContext(SearchContext)

  return (
    <>
      <div className={styles.searchComponent}>
        <input
          placeholder={`Search by ${field}`}
          className={styles.searchBar}
          type="text"
          value={search}
          id={field}
          name={field}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={styles.searchButton}>
          <AiOutlineSearch />
        </button>
      </div>
    </>
  )
}

export default SearchBar
