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

  async status() {
    return new Promise((resolve) => {
      this.connection.getConnection((err, connection) => {
        if (connection) {
          resolve(true);
        } else {
          resolve(new Error('Database connection failed!'));
        }
      });
      resolve(true);
    });
  }
}
module.exports = Database;
