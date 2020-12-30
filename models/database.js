/** Database connector class * */

const mysql = require('mysql2');

class Database {
  constructor() {
    const connection = mysql.createConnection({
      host: environment,
      user: 'root',
      database: 'test',
    });
  }
}
