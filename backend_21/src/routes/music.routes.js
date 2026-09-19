const express = require('express')
const musicRoutes = require('../controllers/music.controller')
const multer = require('multer')

const upload = multer({ storage: multer.memoryStorage() })
 
const router = express()

router.post('/upload',  upload.single('music'), musicRoutes.createMusic)

module.exports = router