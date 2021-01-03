const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./api/users');

const app = express();

// Use body-parser to parse post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use router for account system
app.use('/api', userRouter);
// Set web directory as static
app.use(express.static('./web'));

const server = app.listen(8081, '127.0.0.1', () => {
  console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
