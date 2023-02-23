import { MONTHS, COLORS } from './constants'

const formatDate = (date) => {
  const month = date?.getMonth()
  return `${MONTHS[month]?.slice(0, 3)}. - ${date?.getFullYear()}`
}

const getColorFromAverage = (average) => {
  const color = COLORS?.find((color) => color?.average(average) && color?.color)
  return color?.color
}

export { formatDate, getColorFromAverage }
