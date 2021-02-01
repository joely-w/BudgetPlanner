/** Service for registering user * */

const crypto = require('crypto');
const validator = require('email-validator');
const RegisterDB = require('../models/register');

class Register extends RegisterDB {
  validateEmail() {
    return validator.validate(this.email);
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

  async userUnique() {
    const user = (await this.checkUser())[0];
    if (user.length > 0) {
      this.error = 'Email already registered!';
      return false;
    }
    return true;
  }

  async registerUser() {
    if (this.validateEmail() && this.validateName()
      && this.hashPassword() && await this.userUnique()) {
      await this.register();
      return true;
    }
    return false;
  }
}

module.exports = Register;
