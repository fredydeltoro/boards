const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

class Board extends Model {}

Board.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stage: {
    type: DataTypes.STRING,
    defaultValue: 'develop',
    validate: {
      isIn: [['develop', 'test', 'production']], 
    }
  }
}, {
  sequelize,
  modelName: 'Board'
})

Board.sync() 
  

module.exports = Board