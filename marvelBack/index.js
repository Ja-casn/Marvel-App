// require('dotenv').config()
const router = require('./routes/route.js')
const { conn } = require('./db.js')
const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')
const { getCharactersInfo, getComicsInfo, getSeriesInfo } = require('./controllers/marvelData.js')

const app = express()
const PORT = process.env.PORT
app.use(cors())

// const whiteList = 'http://127.0.0.1:5173'

app.use('/marv1', router)

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json({ limit: '50mb' }))
app.use(cookieParser())
app.use(morgan('dev'))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')// update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
})

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    getCharactersInfo()
    getComicsInfo()
    getSeriesInfo()
    console.log(`🚀 http://localhost:${PORT}`) // eslint-disable-line no-console
  })
})
