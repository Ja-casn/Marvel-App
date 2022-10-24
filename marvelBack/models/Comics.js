// const sequelize = new Sequelize('sqlite::memory:')
// Luego le injectamos la conexion a sequelize.
const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('comics', {
    idcomic: {
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
    pageCount: {
      type: DataTypes.TEXT
    },
    thumbnail: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false
  })
}
