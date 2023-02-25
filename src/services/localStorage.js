const signUp = (
  user = {
    username: 'santimb96',
    password: '1234',
    favorites: [],
    logged: false,
    accessToken: '',
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
    userExist['accessToken'] = createRandomNumber()
    document.cookie = `username=${JSON.stringify({
      username: userExist?.username,
      access_token: userExist?.accessToken,
    })}; path=/`
    localStorage.setItem('users', JSON.stringify(userList))
  }
  console.info(userExist)
  return userExist
}

const autoLogin = (user) => {
  const { username, access_token } = user
  const userList = JSON.parse(createOrGetUserList())
  const userExist = userList.find((u) => u?.username === username)

  if (userExist?.accessToken !== access_token) {
    return null
  }
  userExist['logged'] = true
  localStorage.setItem('users', JSON.stringify(userList))
  return userExist
}

const logOut = (user) => {
  const userList = JSON.parse(createOrGetUserList())
  const userExist = userList.find((u) => u?.username === user?.username)
  if (userExist) {
    userExist['logged'] = false
    userExist['accessToken'] = ''
    localStorage.setItem('users', JSON.stringify(userList))
  }

  return {
    username: '',
    password: '',
    favorites: [],
    logged: false,
    accessToken: '',
  }
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

const createRandomNumber = (RANGE = 9999) =>
  Math.floor(Math.random() * RANGE) + 1

export { signUp, login, logOut, setFavorite, autoLogin }
