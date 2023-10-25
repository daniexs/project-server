const express = require('express')
const  router = express.Router()
const userRouter = require('./userRouter')
const ProductsRouter = require('./productsRouter')
const uploadRouter = require('./uploadRouter')
const cartRouter = require('./bookmarkRouter')
const checkoutRouter = require('./midTrans')

router.use('/user', userRouter)
router.use('/products', ProductsRouter)
router.use('/upload',uploadRouter)
router.use('/cart',cartRouter)
router.use('/midtrans', checkoutRouter)


module.exports = router