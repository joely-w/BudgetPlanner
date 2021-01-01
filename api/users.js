/* Router for login/registration requests */

const express = require('express');
const Register = require('../services/register.js');

const router = express.Router();

router.get('/login', (req, res) => {
  const registration = new Register(req.body.user);
  if (registration.registerUser()) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

module.exports = router;
