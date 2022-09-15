const express = require('express')
const router = express.Router()
const controller = require('../controllers/boardController')

router.post('/', async (req, res) => {
  const board = await controller(req.body)
  console.log('q onda ===>', board);
  res.status(202)
  res.send({
    ok: true
  })
})

router.put('/:id', (req, res) => {
  console.log('a ver ===>', req.params.id)
  res.send({
    updated: true
  })
})


module.exports = router