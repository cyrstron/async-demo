const express = require('express');
const errorer = require('./errorer');
const responser = require('./responser');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});

app.get('/stable', (req, res, next) => {
  const maxRandom = +req.query.maxRandom;

  const result = responser(maxRandom);
  res.status(200);
  res.send(result);
});

app.get('/unstable', (req, res, next) => {
  const prob = +req.query.prob || 50;
  const maxRandom = +req.query.maxRandom;
  const status = +req.query.status;

  const chance = 100 / prob;

  if (Math.random() * chance > 1) {
    const {
      stat,
      message
    } = errorer(status);

    res.status(stat);
    res.send(message);
  } else {
    const result = responser(maxRandom);
    res.status(200);
    res.send(result);
  }
});

app.get('/fail', (req, res, next) => {
  const status = +req.query.status;

  const {
    stat,
    message
  } = errorer(status);

  res.status(stat);
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});