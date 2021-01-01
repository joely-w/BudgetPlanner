/** Environmental variables exporter  */
const environment = require('dotenv').config();

module.exports = {
  database: {
    host: environment.DB_HOST,
    username: environment.DB_USERNAME,
    password: environment.DB_PASSWORD,
    name: environment.DB_NAME,
  },
};
