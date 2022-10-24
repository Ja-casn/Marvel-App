const Router = require('express')

const getCharacters = require('./characters')
const getComics = require('./comics')
const getSeries = require('./series')

const router = Router()

router.use('/characters', getCharacters)
router.use('/comics', getComics)
router.use('/series', getSeries)

module.exports = router
