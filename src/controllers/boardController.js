const model = require('../models/boardModel')

module.exports =  (data) => {
  return model.create(data)
}