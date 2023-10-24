const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const mainRouter = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/',mainRouter)

app.use(errorHandler)
app.listen(port, ()=>{console.log(port)})