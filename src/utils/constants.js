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
    average: (n) => n === 0,
    color: 'gray',
  },
  {
    average: (n) => n < 5,
    color: 'red',
  },
  {
    average: (n) => n >= 5 && n < 6,
    color: 'yellow',
  },
  {
    average: (n) => n >= 6 && n < 7,
    color: 'yellowgreen',
  },
  {
    average: (n) => n >= 7,
    color: 'var(--secondary-color)',
  },
]

export { MONTHS, COLORS }
