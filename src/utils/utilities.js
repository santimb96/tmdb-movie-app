import { MONTHS, COLORS } from './constants'

const formatDate = (date) => {
  const month = date?.getMonth()
  return `${MONTHS[month]?.slice(0, 3)}. - ${date?.getFullYear()}`
}

const getColorFromAverage = (average) => {
  const color = COLORS?.find((color) => color?.average(average) && color?.color)
  return color?.color
}

const roundNumber = (average) => average?.toFixed(1)

const checkIfPasswordsAreEqual = (password, confirmPassword) =>
  password === confirmPassword

const checkPasswordPattern = (password) =>
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,12}$/.text(password)

export {
  formatDate,
  getColorFromAverage,
  checkIfPasswordsAreEqual,
  checkPasswordPattern,
  roundNumber,
}
