// prod
const constants = {
  googleAPIKey: 'AIzaSyCPghe4Rnh2hPXSqvWe_pdNxl-JDOxrG3Q',
  api: 'http://localhost:3001'
}

// dev
if (process.env.NODE_ENV === 'development') {
  constants.api = 'https://7f54a381.ngrok.io/api'
}

export { constants }
