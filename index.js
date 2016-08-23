const express = require('express');
const app = express();

const helmet = require('helmet');
const morgan = require('morgan');

const config = require('./server/config')

app.use(helmet());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send(`Hello world!`);
});

app.listen(config.port, appUpHandler);

function appUpHandler () {
  console.log(`Server is listening on ${config.port}!`);
}
