const signUp = (
  user = {
    username: 'santimb96',
    password: '1234',
    favorites: [],
    logged: false,
  },
) => {
  const userList = JSON.parse(createOrGetUserList())

  if (checkIfUserExist(userList, user)) {
    return false
  }
  userList.push(user)
  localStorage.setItem('users', JSON.stringify(userList))
  return true
}

const login = (user = { username: 'santimb96', password: '1234' }) => {
  const userList = JSON.parse(createOrGetUserList())
  const userExist = checkIfUserExist(userList, user)
  if (!userExist || !checkPassword(userExist, user)) {
    return null
  }

  if (!userExist?.logged) {
    userExist['logged'] = true
    localStorage.setItem('users', JSON.stringify(userList))
  }
  console.info(userExist)
  return userExist
}

const logOut = (user) => {
  const userList = JSON.parse(createOrGetUserList())
  const userExist = userList.find((u) => u?.username === user?.username)
  if (userExist) {
    userExist['logged'] = false
    localStorage.setItem('users', JSON.stringify(userList))
  }

  return { username: '', password: '', favorites: [], logged: false }
}

const checkIfUserExist = (userList, user) =>
  userList.find((u) => u.username === user.username)

const checkPassword = (userExist, user) => userExist.password === user.password

const createOrGetUserList = () => {
  if (localStorage.getItem('users') === null) {
    localStorage.setItem('users', JSON.stringify([]))
  }
  return localStorage.getItem('users')
}

const setFavorite = (user, film) => {
  console.info(user, film)
  const userList = JSON.parse(createOrGetUserList())
  const userExist = userList.find((u) => u?.username === user?.username)
  const favoriteExist = userExist?.favorites?.find(
    (favorite) => favorite?.id === film?.id,
  )
  if (userExist && !favoriteExist) {
    userExist.favorites.push(film)
    localStorage.setItem('users', JSON.stringify(userList))
  }
  if (favoriteExist) {
    userExist['favorites'] = userExist.favorites.filter(
      (favorite) => favorite?.id !== film?.id,
    )
    localStorage.setItem('users', JSON.stringify(userList))
  }

  return userExist
}

export { signUp, login, logOut, setFavorite }
