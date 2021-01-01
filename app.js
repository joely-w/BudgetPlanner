const express = require('express');

const bodyParser = require('body-parser');
const userRouter = require('./api/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', userRouter);
app.use(express.static('./web'));

const server = app.listen(8081, '127.0.0.1', () => {
  console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
