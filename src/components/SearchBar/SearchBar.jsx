import { useState, useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './SearchBar.module.css'

const SearchBar = ({ field = 'title' }) => {
  const { setSearch } = useContext(SearchContext)
  const [searchInput, setSearchInput] = useState('')

  const onSearch = () => {
    setSearch({ state: true, value: searchInput })
    setSearchInput('')
  }

  return (
    <>
      <div className={styles.searchComponent}>
        <input
          placeholder={`Search by ${field}`}
          className={styles.searchBar}
          type="text"
          value={searchInput}
          id={field}
          name={field}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className={styles.searchButton} onClick={() => onSearch()}>
          <AiOutlineSearch />
        </button>
      </div>
    </>
  )
}

export default SearchBar
