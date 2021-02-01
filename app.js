const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const userRouter = require('./api/users');
const financeRouter = require('./api/finance');
const config = require('./config');

const app = express();

// Use express session middleware
app.use(session({
  secret: config.session.secret,
  resave: false,
  saveUninitialized: false,
}));

// Use body-parser to parse post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use router for account system
app.use('/api/user', userRouter);
app.use('/api/finance', financeRouter);

// Set web directory as static
app.use(express.static('./web'));

const server = app.listen(8081, '127.0.0.1', () => {
  console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
