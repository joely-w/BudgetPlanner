/* test/1 - account.js */

const { expect } = require('chai');
const Register = require('../services/register');
const User = require('../services/users');
// Test data
const dataset = {
  valid: {
    email: 'email@example.com',
    first_name: 'Joe',
    last_name: 'Doe',
    password: 'ExamplePassword123',
  },
  // Duplicate test will use same data as valid test
  long: {
    email: 'exampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexampleexample@emailemailemailemailemailemailemailemailemailemail.com',
    first_name: 'JoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoe',
    last_name: 'JoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoeJoe',
    password: 'ExamplePassword123',
  },
  invalid: {
    email: 'email@example',
    first_name: 'Joe',
    last_name: 'Doe',
    password: 'AnotherExamplePassword123',
  },
};
async function register(data) {
  const registration = new Register(data);
  return registration.registerUser();
}
async function login(email, password) {
  const user = new User(email, password);
  const loginDetails = await user.attemptLogin();
  return loginDetails.logged_in;
}
describe('Registration', () => {
  context('Valid registration', () => {
    it('should register user', async () => {
      expect(await register(dataset.valid)).to.equal(true);
    });
  });
  context('Invalid registration', () => {
    it('should not register existing user', async () => {
      expect(await register(dataset.valid)).to.equal(false);
    });
    it('should not register fields outside of length limits', async () => {
      expect(await register(dataset.long)).to.equal(false);
    });
    it('should not register invalid email', async () => {
      expect(await register(dataset.invalid)).to.equal(false);
    });
  });
});
describe('Login', () => {
  context('Valid login', () => {
    it('should login valid user', async () => {
      expect(await login(dataset.valid.email, dataset.valid.password)).to.equal(true);
    });
  });
  context('Invalid login', () => {
    it('should not login invalid user', async () => {
      expect(await login(dataset.valid.email, dataset.invalid.password)).to.equal(false);
    });
    it('should not login blank user', async () => {
      expect(await login('', '')).to.equal(false);
    });
  });
});
describe('Account management', () => {
  context('Deletion', () => {
    const user = new User(dataset.valid.email, dataset.valid.password);
    it('should delete existing user', async () => {
      expect(await user.deleteUser()).to.equal(true);
    });
  });
});
