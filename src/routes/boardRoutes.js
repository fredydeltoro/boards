const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  console.log('a ver que traes ===>', req.body)
  res.status(202)
  res.send({ok: true})
})

router.put('/:id', (req, res) => {
  console.log('a ver ===>', req.params.id)
  res.send({updated: true})
})


module.exports = router