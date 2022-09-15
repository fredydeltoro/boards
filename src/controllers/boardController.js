const model = require('../models/boardModel')

const handleResult = (result) => {
  return {
    id: result.id,
    title: result.title,
    stage: result.stage
  }
}

const handleError = (err) => {
  return {
    errors: err.errors.map((error) =>  `${error.path} cannot be ${error.value}`)
  }
}

module.exports = () => {
  return {
    all: () => model.findAll(),
    create: (data) => {
      return model.create(data).then(handleResult).catch(handleError)
    },
    update: async (id, data) => {
      const board = await model.findByPk(id)
      if (board === null) {
        return {
          errors: ['Not found']
        }
      } else {
        return board.update(data).then(handleResult).catch(handleError)
      }
    }
  }
}