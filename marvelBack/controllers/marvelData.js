const axios = require('axios')
const { Characters, Comics, Series } = require('../db.js')

const getCharactersInfo = async (req, res) => {
  try {
    const infoCharacters = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH_KEY}&limit=100`)

    const dataCharacters = infoCharacters.data.data.results

    // eslint-disable-next-line array-callback-return
    const newData = dataCharacters.map((info) => {
      Characters.findOrCreate({
        where: {
          idcharacter: info.id,
          name: info.name,
          description: info.description !== '' ? info.description : 'does not have description',
          thumbnail: info.thumbnail.path + '.' + info.thumbnail.extension
        }
      })
    })
    return newData
  } catch (error) {
    console.log(error)
  }
}

const getComicsInfo = async (req, res) => {
  try {
    const infoComics = await axios.get(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH_KEY}&limit=100`)

    const dataComics = infoComics.data.data.results

    // eslint-disable-next-line array-callback-return
    const newDataComics = dataComics.map((info) => {
      Comics.findOrCreate({
        where: {
          idcomic: info.id,
          title: info.title,
          description: info.description !== '' && info.description !== null && info.description !== '#N/A' ? info.description : 'does not have description',
          pageCount: info.pageCount !== 0 ? info.description : 'does not have pages',
          thumbnail: info.thumbnail.path + '.' + info.thumbnail.extension,
          price: info.prices[0].price
        },
        include: Characters
      })
    })
    return newDataComics
  } catch (error) {
    console.log(error)
  }
}

const getSeriesInfo = async (req, res) => {
  try {
    const infoSeries = await axios.get(`http://gateway.marvel.com/v1/public/series?ts=1&apikey=${process.env.API_KEY}&hash=${process.env.HASH_KEY}&limit=100`)

    const dataSeries = infoSeries.data.data.results

    // eslint-disable-next-line array-callback-return
    const newDataSeries = dataSeries.map((info) => {
      Series.findOrCreate({
        where: {
          idserie: info.id,
          title: info.title,
          description: info.description !== '' && info.description !== null ? info.description : 'does not have description',
          type: info.type,
          thumbnail: info.thumbnail.path + '.' + info.thumbnail.extension,
          startYear: info.startYear,
          endYear: info.endYear
        }
      })
    })
    return newDataSeries
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getCharactersInfo, getComicsInfo, getSeriesInfo }
