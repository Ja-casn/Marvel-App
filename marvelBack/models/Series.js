// const sequelize = new Sequelize('sqlite::memory:')
// Luego le injectamos la conexion a sequelize.
const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('series', {
    idserie: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      // eslint-disable-next-line no-undef
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.STRING
    },
    thumbnail: {
      type: DataTypes.STRING
    },
    startYear: {
      type: DataTypes.INTEGER
    },
    endYear: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false
  })
}
