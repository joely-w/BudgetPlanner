/* Router for login/registration requests */

const express = require('express');
const router = express.Router();

router.get('/login', function (req, res) {
    res.send('No login yet');
})

module.exports = router;
