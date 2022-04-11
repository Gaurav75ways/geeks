const express = require('express')
const passport = require('passport')
const router = express.Router()

//auth google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get( '/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/me',
    failureRedirect: '/'
  })
);

module.exports = router;