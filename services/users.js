/** Service for logging in and managing user * */
const crypto = require('crypto');
const UserDB = require('../models/user');

class User extends UserDB {
  constructor(email, password) {
    super(email, password);
    this.hashPassword();
  }

  async attemptLogin() {
    const response = await this.login();
    if (response && response[0].length > 0) {
      return {
        email: this.email,
        first_name: response[0][0].first_name,
        last_name: response[0][0].last_name,
        logged_in: true,
      };
    }
    return { logged_in: false };
  }

  hashPassword() {
    this.password = crypto.createHash('sha256')
      .update(this.password)
      .digest('hex');
    return true;
  }

  async deleteUser() {
    const deletion = await this.delete();
    return deletion[0].affectedRows === 1;
  }
}

module.exports = User;
