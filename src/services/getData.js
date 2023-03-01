import { API_URL } from '../utils/constants'

const fetchData = (url) => {
  return fetch(API_URL + url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
}

export { fetchData }
