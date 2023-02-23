const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const COLORS = [
  {
    average: (n) => n < 5,
    color: 'red',
  },
  {
    average: (n) => n >= 5 && n < 7,
    color: 'yellow',
  },
  {
    average: (n) => n >= 7,
    color: 'yellowgreen',
  },
]

export { MONTHS, COLORS }
