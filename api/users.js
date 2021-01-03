/* Router for login/registration requests */
const express = require('express');
const session = require('express-session');
const config = require('../config');
const Register = require('../services/register');
const User = require('../services/users');

const router = express.Router();
// Use express session middleware
router.use(session({
  secret: config.session.secret,
  resave: false,
  saveUninitialized: false,
}));

router.post('/register', (req, res) => {
  const registration = new Register(req.body.user);
  if (registration.registerUser()) {
    res.send({ success: true });
  } else {
    res.send({ success: false, error: registration.error });
  }
});

router.post('/login', async (req, res) => {
  const user = new User(req.body.email, req.body.password);
  res.send(await user.attemptLogin());
});

module.exports = router;
