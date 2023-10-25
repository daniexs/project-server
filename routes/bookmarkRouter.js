const express = require('express')
const router = express.Router()
const BookmarkController = require('../controllers/bookmarkController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/get', BookmarkController.getBookmar)
router.post('/add', BookmarkController.addBookmark)



module.exports = router