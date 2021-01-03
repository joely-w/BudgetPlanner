const Database = require('./database');

class UserDB extends Database {
  /**
     * Class constructor
     * @param {string} email - User email
     * @param {string} password - User plaintext password
     */
  constructor(email, password) {
    super();
    this.email = email;
    this.password = password;
  }

  async login() {
    return this.connection.query('SELECT * FROM users WHERE email = ? and password = ?', [this.email, this.password]);
  }
}

module.exports = UserDB;
