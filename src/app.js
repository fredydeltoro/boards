const express = require('express')
const app = express()
const morgan = require('morgan')
const boardRoutes = require('./routes/boardRoutes');


app.use(morgan(':method :url :response-time'))
app.use(express.json())

app.use('/boards', boardRoutes)

app.listen(process.env.PORT || 3000);
