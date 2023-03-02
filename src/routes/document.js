// -----------Back-end---------//
const express = require('express')
const router = express.Router()
const passport = require('passport')

// -----------Controller---------//
const DocumentController = require('../controllers/documentController')

// -----------Middleware---------//
const { ensureAuth } = require('../middlewares/auth')


// -----------Router---------//

router.get(
    '/vehicle-papers', 
    ensureAuth,
    DocumentController.create_vehicle_papers,
)

router.post(
    '/vehicle-papers', 
    ensureAuth,
    DocumentController.store_vehicle_papers,
)

router.get(
    '/vehicle-papers/:id', 
    ensureAuth,
    DocumentController.show_vehicle_papers,
)


module.exports = router