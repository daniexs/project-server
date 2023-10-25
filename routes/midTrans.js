const express = require('express')
const handleMainRequest = require('../controllers/midTransController')
const router = express.Router()

router.post('/', handleMainRequest)

module.exports = router