const crypto = require('crypto');
const RegisterDB = require('../models/register');

class Register extends RegisterDB {
  constructor(data) {
    super(data);
  }

  validateEmail() {
    const emailFormat = RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    if (!emailFormat.test(this.email)) {
      this.error = 'Email is invalid';
      return false;
    }
    return true;
  }

  validateName() {
    if (this.name.first.length > 128 || this.name.last.length > 128) {
      this.error = 'First or last name is too long';
      return false;
    }
    return true;
  }

  hashPassword() {
    this.password = crypto.createHash('sha256').update(this.password).digest('hex');
    return true;
  }

  registerUser() {
    if (this.validateEmail() && this.validateName() && this.hashPassword()) {
      this.register();
      return true;
    }
    return false;
  }
}

module.exports = Register;
