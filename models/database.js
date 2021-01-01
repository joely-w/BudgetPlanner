/** Database connector class * */

const mysql = require('mysql2');
const config = require('../config');

class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: config.database.host,
      user: config.database.username,
      database: config.database.name,
      password: config.database.password,
    });
  }
}
module.exports = Database;
