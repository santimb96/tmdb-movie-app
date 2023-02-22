import { MONTHS } from './constants'

const formatDate = (date) => {
  console.log(date)
  const month = date?.getMonth()
  return `${MONTHS[month]?.slice(0, 3)}. - ${date?.getFullYear()}`
}

export { formatDate }
