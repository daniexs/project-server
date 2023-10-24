const express = require('express')
const UserController = require('../controllers/userController')
const BookmarkController = require('../controllers/bookmarkController')
const router = express.Router()

router.get('/get', BookmarkController.getBookmar)
router.post('/add', BookmarkController.addBookmark)



module.exports = router