const crypto = require('crypto');
const UserDB = require('../models/user');

class User extends UserDB {
  constructor(email, password) {
    super(email, password);
    this.hashPassword();
  }

  hashPassword() {
    this.password = crypto.createHash('sha256').update(this.password).digest('hex');
    return true;
  }
}

module.exports = User;
