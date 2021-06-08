var admin = require('firebase-admin');

var serviceAccount = require('../server/project-9fbe4-firebase-adminsdk-72fqr-5b7791a67f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://project-9fbe4-default-rtdb.firebaseio.com',
});

var registrationToken = [
  'dUtEAE_QTrudN1n52yHU1l:APA91bGBXbWptkgZWS8JGV_UGhLMsJgEBnTgQRlI9qDLXr-S_LAJFol34SgJ8rSiF5Iutom782sA9J62tI64__RaeHbKztL-0r16GRpcH3k4Z6lkBPqrghcAgvMaKo6Cc6vRGDIcEbwC',
];
var payLoad = {
  notification: {
    title: 'user name',
    body: 'user message',
  },
  data: {
    message: 'Help',
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
