const express = require('express');
const app = express();

const helmet = require('helmet');

const config = require('./config')

app.use(helmet);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(config.port, appUpHandler);

function appUpHandler () {
  console.log(`Server is listening on ${config.port}!`);
}
