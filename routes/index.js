var express = require('express');
var authentication = require('./authentication');
const passport = require('passport');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', {
  session: false
});
var router = express.Router();

/* GET home page. */
router.get('/', requireAuth, (req, res) => res.redirect('/albums'));
//router.use('/albums', albums);
router.use('/', authentication);


module.exports = router;