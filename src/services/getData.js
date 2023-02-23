const getFilms = (page = 1) => {
  return fetch(
    `${import.meta.env.VITE_API_URL}/discover/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&sort_by=popularity.desc&page=${page}`,
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
}

const getFilmByTitle = (title = 'harry potter', page = 1) => {
  return fetch(
    `${import.meta.env.VITE_API_URL}/search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&query=${title}&page=${page}&include_adult=false`,
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
}

export { getFilms, getFilmByTitle }
