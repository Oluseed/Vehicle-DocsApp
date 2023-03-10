// -----------Back-end---------//
const express = require('express')
const router = express.Router()
const passport = require('passport')

// -----------Controller---------//
const IndexController = require('../controllers/indexController')

// -----------Middleware---------//
const { ensureAuth, ensureGuest } = require('../middlewares/auth')


// -----------Router---------//

router.get('/', ensureGuest, IndexController.index)

router.get('/:pathMatch(.*)*', ensureGuest, IndexController.error)


module.exports = router
