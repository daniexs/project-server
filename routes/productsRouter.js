const express = require('express')
const ProductsController = require('../controllers/productsController')
const router = express.Router()

router.get('/', ProductsController.getProducts)
router.post('/', ProductsController.addProducts)
router.get('/:id', ProductsController.getProductsDetail)
router.put('/:id', ProductsController.editProducts)


module.exports = router
