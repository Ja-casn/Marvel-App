const { Router } = require('express')
const { Op } = require('sequelize')
const { Characters, Comics } = require('../db.js')

const routeComics = Router()

routeComics.get('/', async (req, res) => {
  const { name } = req.query
  try {
    if (!name) {
      const allComics = await Comics.findAll({
        include: Characters
      })
      res.send(allComics)
    } else {
      const comicsQuery = await Comics.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        },
        include: {
          Characters
        }
      })

      if (comicsQuery.length === 0) {
        return res.status(404).send('there is no character with that name')
      }

      return res.status(200).send(comicsQuery)
    }
  } catch (error) {
    console.log(error)
  }
})

routeComics.get('/:idComic', async (req, res) => {
  const { idComic } = req.params

  const comicById = await Characters.findByPk(idComic, {
    include: Comics
  })

  if (!comicById) {
    return res.status(404).send(`this ${idComic} does not belong to a character`)
  }

  return res.status(200).send(comicById)
})

module.exports = routeComics
