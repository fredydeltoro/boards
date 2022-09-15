const express = require('express')
const router = express.Router()
const controller = require('../controllers/boardController')
const boardCtrl = controller()

router.get('/', async (req, res) => {
  const boards = await boardCtrl.all()
  res.status(200)
  res.send(boards)
})

router.post('/', async (req, res) => {
  const board = await boardCtrl.create(req.body)

  if (board.errors) {
    res.status(400)
  } else {
    res.status(201)
  }

  res.send(board)
})

router.put('/:id', async(req, res) => {
  const id = req.params.id
  const data = req.body
  const board = await boardCtrl.update(id, data)

  if (board.errors) {
    res.status(400)
  } else {
    res.status(202)
  }

  res.send(board)
})


module.exports = router