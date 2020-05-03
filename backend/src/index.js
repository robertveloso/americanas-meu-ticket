const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var cors = require('cors');
var bcrypt = require('bcryptjs');
var mqtt = require('mqtt');

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(cors());

const key = 'troublemakers';
const hash = bcrypt.hashSync(key, 8);

app.post('/api/scan', (req, res) => {
  const code = req.body.code;
  const result = bcrypt.compareSync(key, code); // true
  res.setHeader('Content-Type', 'application/json');
  if (result) {
    res.send(JSON.stringify({ result: true }));
  } else {
    res.send(JSON.stringify({ result: false }));
  }
});

app.get('/api/generate', (req, res) => {
  // tickets, qrcode
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ result: hash }));
});

app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body,
    })
    .then(() => {
      req.log.info(JSON.stringify(req.body));
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.post('/api/2fa', (req, res) => {
  res.header('Content-Type', 'application/json');

  if (req.body.code === '1835') {
    // abrindo locker
    var client = mqtt.connect('mqtt://mqtt.eclipse.org/mqtt', {
      port: 1883,
      clientId: 'lockers_test',
    });

    const locker = client.on('connect', function () {
      client.subscribe('topico_locker_americanas_1', function (err) {
        if (!err) {
          client.publish('topico_locker_americanas_1', '1');
          console.log('Locker aberto');
          res.send(JSON.stringify({ result: true }));
          client.end();
        }
      });
    });

    console.log('MQTT RESPONSE: ', locker);
  } else res.send(JSON.stringify({ result: false }));
});

app.listen(3333, () =>
  console.log('🚀 Express server is running on http://localhost:3333')
);
