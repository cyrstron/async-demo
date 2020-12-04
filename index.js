const express = require('express');
const bodyParser = require('body-parser');

const errorer = require('./errorer');
const objectsRouter = require('./objects');
const responser = require('./responser');

const app = express();

const PORT = process.env.PORT || 3000;

app.use((_req, res, next) => {
  res.setHeader('access-control-allow-origin', '*');

  next();
});

app.use('/public', express.static('public'));

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.sendFile(__dirname+'/index.html');
});

app.get('/stable', (req, res) => {
  const maxRandom = +req.query.maxRandom;

  const result = responser(maxRandom);
  res.status(200);
  res.send(result);
});

app.get('/unstable', (req, res) => {
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

app.get('/fail', (req, res) => {
  const status = +req.query.status;

  const {
    stat,
    message
  } = errorer(status);

  res.status(stat);
  res.send(message);
});

app.use('/objects', (req, res, next) => {
  const prob = +req.query.prob || 100;

  const chance = 100 / prob;

  if (Math.random() * chance < 1) {
    next();

    return;
  }

  const {
    stat,
    message
  } = errorer();

  res.status(stat);
  res.send(message);
});

app.use('/objects', objectsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});