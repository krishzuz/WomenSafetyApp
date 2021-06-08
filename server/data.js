const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyparser = require('body-parser');
const cors = require('cors');
var admin = require('firebase-admin');

var serviceAccount = require('../server/project-9fbe4-firebase-adminsdk-72fqr-5b7791a67f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://project-9fbe4-default-rtdb.firebaseio.com',
});

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crudproducts',
});

app.use(cors());
app.use(bodyparser.json({type: 'application/json'}));
app.use(bodyparser.urlencoded({extended: true}));

app.listen(3001, (res) => {
  console.log('crud is Running v1.0');
});

app.get('/', (req, res) => {
  res.send('working');
});

app.get('/add', (req, res) => {
  const sqlSelect = 'SELECT * FROM native_data';
  db.query(sqlSelect, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
      console.log('SUCCESS');
    }
  });
});

app.post('/add', (req, res) => {
  let users = {
    userName: req.body.userName,
    userMobile: req.body.userMobile,
    userMail: req.body.userMail,
  };

  const sqlAdd =
    'INSERT INTO native_data (userName,userMobile,userMail) VALUES (?,?,?)';
  db.query(
    sqlAdd,
    [users.userName, users.userMobile, users.userMail],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    },
  );
});
const notification_options = {
  priority: 'high',
  timeToLive: 60 * 60 * 24,
};
app.post('/firebase/notification', (req, res) => {
  console.log('test-message');

  const message = req.body.message;

  console.log(req.body.message);

  var registrationToken = [
    'dUtEAE_QTrudN1n52yHU1l:APA91bGBXbWptkgZWS8JGV_UGhLMsJgEBnTgQRlI9qDLXr-S_LAJFol34SgJ8rSiF5Iutom782sA9J62tI64__RaeHbKztL-0r16GRpcH3k4Z6lkBPqrghcAgvMaKo6Cc6vRGDIcEbwC',
  ];

  var payLoad = {
    notification: {
      title: 'user name',
      body: `${message}`,
    },
    data: {
      message: `${message}`,
    },
  };

  var options = {
    priority: 'high',
    timeToLive: 66 * 60 * 24,
    playSound: true,
  };

  admin
    .messaging()
    .sendToDevice(registrationToken, payLoad, options)
    .then(function (response) {
      console.log('success', response, payLoad);
    })
    .catch(function (error) {
      console.log(error);
    });
});
