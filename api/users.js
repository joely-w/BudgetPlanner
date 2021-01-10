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

router.post('/register', async (req, res) => {
  // Instantiate registration object with data
  const registration = new Register(req.body.user);
  // Attempt to register user
  const userRegistration = await registration.registerUser();
  // Report if successful
  if (userRegistration) {
    res.send({ success: true });
  } else {
    res.send({
      success: false,
      error: registration.error,
    });
  }
});

router.post('/login', async (req, res) => {
  // Instantiate user object with login details
  const user = new User(req.body.email, req.body.password);
  // Attempt login
  const loginDetails = await user.attemptLogin();
  // If login successful, set session data
  if (loginDetails.logged_in) {
    req.session.userData = loginDetails;
  }
  res.send(loginDetails);
});

router.post('/status', (req, res) => {
  // Check if session data exists
  if ('userData' in req.session) {
    res.send(req.session.userData);
  } else {
    res.send({ logged_in: false });
  }
});

router.post('/logout', (req, res) => {
  // Unset session data
  delete req.session.userData;
  res.send({ success: true });
});

module.exports = router;
