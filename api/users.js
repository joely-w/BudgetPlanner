/* Router for login/registration requests */

const express = require('express');
const Register = require('../services/register');
const User = require('../services/users');

const router = express.Router();

router.post('/register', (req, res) => {
  const registration = new Register(req.body.user);
  if (registration.registerUser()) {
    res.send({ success: true });
  } else {
    res.send({ success: false, error: registration.error });
  }
});
router.post('/login', (req, res) => {
  const user = new User(req.body.email, req.body.password);
  user.login((result) => {
    if (result) {
      res.send({ success: true, result });
    } else {
      res.send({ success: false });
    }
  });
});

module.exports = router;
