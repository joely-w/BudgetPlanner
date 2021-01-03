/** Environmental variables exporter  */
require('dotenv').config({ path: `${__dirname}/.env` });

module.exports = {
  session: {
    secret: process.env.EXPRESS_SECRET,
  },
  database: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
};
