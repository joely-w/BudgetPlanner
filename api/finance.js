/** Router for finance */

const express = require('express');
const authenticate = require('../services/accounts');

const router = express.Router();
const Finance = require('../services/finance');

router.post('/records/add', authenticate, async (req, res) => {
  const finance = new Finance(req.session.userData.email);
  const result = await finance.addPayment(req.body);
  res.send({ success: result });
});
router.post('/records/getAll', authenticate, async (req, res) => {
  const finance = new Finance(req.session.userData.email);
  res.send(await finance.getAllPayments());
});
module.exports = router;
