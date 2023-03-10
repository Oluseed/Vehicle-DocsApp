// -----------Back-end---------//
const express = require('express')
const router = express.Router()
const passport = require('passport')

// -----------Controller---------//
const DocumentController = require('../controllers/documentController')

// -----------Middleware---------//
const { ensureAuth } = require('../middlewares/auth')


// -----------Router---------//


// Vehicle papers
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

router.delete(
    '/vehicle-papers/:id', 
    ensureAuth,
    DocumentController.destroy_vehicle_papers,
)


// Driver Licence
router.get(
    '/driver-license', 
    ensureAuth,
    DocumentController.create_driver_license,
)

router.post(
    '/driver-license', 
    ensureAuth,
    DocumentController.store_driver_license,
)

router.get(
    '/driver-license/:id', 
    ensureAuth,
    DocumentController.show_driver_license,
)

router.delete(
    '/driver-license/:id', 
    ensureAuth,
    DocumentController.destroy_driver_license,
)


// change-of-ownership
router.get(
    '/change-of-ownership', 
    ensureAuth,
    DocumentController.create_ownership_change,
)

router.post(
    '/change-of-ownership', 
    ensureAuth,
    DocumentController.store_ownership_change,
)

router.get(
    '/change-of-ownership/:id', 
    ensureAuth,
    DocumentController.show_ownership_change,
)

router.delete(
    '/change-of-ownership/:id', 
    ensureAuth,
    DocumentController.destroy_ownership_change,
)


module.exports = router