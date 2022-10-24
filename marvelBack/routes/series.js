const { Router } = require('express')
const { Op } = require('sequelize')
const { Series, Characters } = require('../db.js')

const routeSeries = Router()

routeSeries.get('/', async (req, res) => {
  const { name } = req.query
  try {
    if (!name) {
      const allSeries = await Series.findAll()
      res.send(allSeries)
    } else {
      const seriesQuery = await Series.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        }
      })

      if (seriesQuery.length === 0) {
        return res.status(404).send('there is no serie with that name')
      }

      return res.status(200).send(seriesQuery)
    }
  } catch (error) {
    console.log(error)
  }
})

routeSeries.get('/:idSerie', async (req, res) => {
  const { idSerie } = req.params

  const serieById = await Series.findByPk(idSerie, {
    include: Characters
  })

  if (!serieById) {
    return res.status(404).send(`this ${idSerie} does not belong to a character`)
  }

  return res.status(200).send(serieById)
})

module.exports = routeSeries
