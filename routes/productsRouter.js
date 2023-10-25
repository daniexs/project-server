const express = require('express')
const ProductsController = require('../controllers/productsController')
const authentication = require('../middlewares/authentication')
const router = express.Router()

router.get('/', ProductsController.getProducts)
router.get('/:id', ProductsController.getProductsDetail)
router.use(authentication)
router.post('/add', ProductsController.addProducts)
router.put('/edit/:id', ProductsController.editProducts)


module.exports = router
