const express = require('express');
const router = express.Router();

const upload = require('../helpers/upload.helper');
const uploadController = require('../controllers/uploadController');
 
router.post('/upload-multiple', upload.array('files', 5), uploadController.uploadMultiple)

module.exports = router;
