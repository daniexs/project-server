const express = require('express')
const  router = express.Router()
const userRouter = require('./userRouter')
const ProductsRouter = require('./productsRouter')

router.use('/user', userRouter)
router.use('/products', ProductsRouter)



module.exports = router