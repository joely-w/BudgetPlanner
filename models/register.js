const Database = require('./database');

class RegisterDB extends Database {
  /**
   * Class constructor
   * @param {object} data
   * @param {string} data.first_name
   * @param {string} data.last_name
   * @param {string} data.email
   * @param {string} data.password
   */
  constructor(data) {
    super();
    this.email = data.email;
    this.password = data.password;
    this.name = { first: data.first_name, last: data.last_name };
  }

  /**
   * Register user in database
   */
  register() {
    this.connection.query('INSERT INTO users(email, password, first_name, last_name) VALUES(?,?,?,?)',
      [this.email, this.password, this.name.first, this.name.last]);
  }
}
module.exports = RegisterDB;
