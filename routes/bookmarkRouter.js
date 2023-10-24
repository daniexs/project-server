const express = require('express')
const router = express.Router()
const BookmarkController = require('../controllers/bookmarkController')

router.get('/get', BookmarkController.getBookmar)
router.post('/add', BookmarkController.addBookmark)



module.exports = router