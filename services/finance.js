/** Service for managing payment system * */

const PaymentDB = require('../models/finance');

class Finance extends PaymentDB {
  /**
   * Processes payment and adds to DB
   * @param {object} payment - Data about payment
   * @param {float} payment.amount - Amount being paid (+ or -)
   * @param {string} payment.currency - Currency code (GBP, USD etc)
   * @param {number} payment.recurrence - Payment recurrence in days (0 if single payment)
   * @param {string} payment.start_date - Start date of payment (datetime format)
   * @param {string} payment.name - Name of payment
   * @param {string} payment.description - Description of payment
   */

  async addPayment(payment) {
    try {
      const result = await this.insertPayment(payment);
      if (result[0].insertId) {
        return true;
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  }
}

module.exports = Finance;
