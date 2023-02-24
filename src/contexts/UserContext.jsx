import { createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [favorites, setFavorites] = useState([])
  return (
    <UserContext.Provider value={{ user, setUser, favorites, setFavorites }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
