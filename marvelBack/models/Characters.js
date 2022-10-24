// const sequelize = new Sequelize('sqlite::memory:')
// Luego le injectamos la conexion a sequelize.
const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('characters', {
    idcharacter: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      // eslint-disable-next-line no-undef
      type: DataTypes.TEXT
    },
    thumbnail: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  })
}
