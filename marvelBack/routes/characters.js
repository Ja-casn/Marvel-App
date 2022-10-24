const { Router } = require('express')
const { Op } = require('sequelize')
const { Characters, Comics } = require('../db.js')

const routeCharacter = Router()

routeCharacter.get('/', async (req, res) => {
  const { name } = req.query
  try {
    if (!name) {
      const allCharacters = await Characters.findAll({
        include: Comics
      })
      res.send(allCharacters)
    } else {
      const characterQuery = await Characters.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        },
        include: {
          Comics
        }
      })

      if (characterQuery.length === 0) {
        return res.status(404).send('there is no character with that name')
      }

      return res.status(200).send(characterQuery)
    }
  } catch (error) {
    console.log(error)
  }
})

routeCharacter.get('/:idCharacter', async (req, res) => {
  const { idCharacter } = req.params

  const characterById = await Characters.findByPk((idCharacter))
  // const characterById = await Characters.findByPk(idCharacter, {
  //   include: Comics
  // })

  // console.log(idCharacter)
  // console.log(characterById)

  if (!characterById) {
    return res.status(404).send(`this ${idCharacter} does not belong to a character`)
  }

  return res.status(200).send(characterById)
})

module.exports = routeCharacter
