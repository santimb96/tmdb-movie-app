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
    color: 'var(--error-notification-color)',
  },
  {
    average: (n) => n >= 5 && n < 6,
    color: 'var(--warning-notification-color)',
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

const PAGES_LIMIT = 20

const NO_AUTH_PATHS = ['/', '/favorites']

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

export { MONTHS, COLORS, PAGES_LIMIT, NO_AUTH_PATHS, API_KEY, API_URL }
