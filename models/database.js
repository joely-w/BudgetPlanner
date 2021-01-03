/** Database connector class */

const mysql = require('mysql2/promise');
const config = require('../config');

class Database {
  constructor() {
    this.connection = mysql.createPool({
      host: config.database.host,
      user: config.database.username,
      database: config.database.name,
      password: config.database.password,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
}
module.exports = Database;
