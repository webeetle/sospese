// prod
const constants = {
  googleAPIKey: 'AIzaSyCPghe4Rnh2hPXSqvWe_pdNxl-JDOxrG3Q',
  api: 'https://api.sospese.io/api'
}

// dev
if (process.env.NODE_ENV === 'development') {
  constants.api = 'https://api.sospese.io/api'
}

export { constants }
