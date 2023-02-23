import { createContext, useState } from 'react'

const SearchContext = createContext()

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState({ state: false, value: '' })
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider }
