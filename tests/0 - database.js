/* test/0 - database.js */

const { expect } = require('chai');
const Database = require('../models/database');

const database = new Database();
describe('Database', () => {
  context('Connection', () => {
    it('Connects to database', async () => {
      database.status().then((result) => {
        expect(result).to.equal(true);
      });
    });
  });
});
