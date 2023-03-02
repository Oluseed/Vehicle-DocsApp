// -----------Back-end---------//
const express = require('express')
const router = express.Router()

// -----------Controller---------//
const VehicleController = require('../controllers/vehicleController')

// -----------Middleware---------//
const { ensureAuth } = require('../middlewares/auth')


// -----------Router---------//

router.get(
    '/', 
    ensureAuth, 
    VehicleController.create
)

router.post(
    '/', 
    ensureAuth, 
    VehicleController.store
)

router.get(
    '/:id', 
    ensureAuth,
    VehicleController.show
)

router.get(
    '/:id/edit', 
    ensureAuth,
    VehicleController.edit
)

router.put(
    '/:id', 
    ensureAuth,
    VehicleController.update
)

router.delete(
    '/:id', 
    ensureAuth,
    VehicleController.destroy
)


module.exports = router