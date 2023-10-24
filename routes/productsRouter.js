const express = require('express')
const ProductsController = require('../controllers/productsController')
const router = express.Router()

router.get('/league', ProductsController.getLeague)

module.exports = router
