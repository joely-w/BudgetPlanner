const Database = require('./database');

class PaymentDB extends Database {
  /**
   * Class constructor
   * @param {string} email - User email
   */
  constructor(email) {
    super();
    this.user = email;
  }

  /**
   * Inserts payment to database
   * @param payment - Data about payment
   * @param {float} payment.amount - Amount being paid (+ or -)
   * @param {string} payment.currency - Currency code (GBP, USD etc)
   * @param {number} payment.recurrence - Payment recurrence in days (0 if single payment)
   * @param {string} payment.start_date - Start date of payment (datetime format)
   * @param {string} payment.name - Name of payment
   * @param {string} payment.description - Description of payment
   */
  async insertPayment(payment) {
    const query = 'INSERT INTO payments(user, amount, currency, recurrence, start_date, name, description) VALUES(?,?,?,?,?,?,?)';
    return this.connection.query(query,
      [this.user, payment.amount, payment.currency, payment.recurrence,
        payment.start_date, payment.name, payment.description]);
  }

  /**
   * Get all payment records from user
   */
  async getAllPayments() {
    return this.connection.query('SELECT * from payments WHERE user = ?', [this.user]);
  }
}

module.exports = PaymentDB;
