import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './SearchBar.module.css'

const SearchBar = ({ field = 'title' }) => {
  const [search, setSearch] = useState('')

  const onSearch = () => {
    console.warn(search)
    setSearch('')
  }

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
        <button className={styles.searchButton} onClick={() => onSearch()}>
          <AiOutlineSearch />
        </button>
      </div>
    </>
  )
}

export default SearchBar
