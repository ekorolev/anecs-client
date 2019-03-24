import express from 'express'
import Loadable from 'react-loadable'
import fs from 'fs'
import http from 'http'
import https from 'https'

let PRIVATE_KEY = null
let CERTIFICATE = null
let CREDENTIALS = {}
if (process.env.HTTPS) {
  PRIVATE_KEY = fs.readFileSync(process.env.PK_PATH, 'utf8')
  CERTIFICATE = fs.readFileSync(process.env.CERT_PATH, 'utf8')
  CREDENTIALS.key = PRIVATE_KEY
  CREDENTIALS.cert = CERTIFICATE
}

import indexController from './controller'

const PORT = process.env.PORT || 3000

// initialize the application and create the routes
const app = express()

app.use(indexController)

// start the app
Loadable.preloadAll().then(() => {
  let httpServer = http.createServer(app)
  let httpsServer = null
  if (process.env.HTTPS) {
    httpsServer = https.createServer(CREDENTIALS, app)
  }
  if (process.env.HTTPS) {
    httpsServer.listen(443, () => console.log(`HTTPS server has started on ${443} port`))
  }
  httpServer.listen(PORT, () => console.log(`HTTP server has started at port ${PORT}`))
})