// var admin = require('firebase-admin');

// var serviceAccount = require('./mytestapp-1b079-firebase-adminsdk-bdfvp-fc9aa7202e.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://mytestapp-1b079-default-rtdb.firebaseio.com',
// });

// module.exports.admin = admin;

var admin = require('firebase-admin');

var serviceAccount = require('../server/project-9fbe4-firebase-adminsdk-72fqr-5b7791a67f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://project-9fbe4-default-rtdb.firebaseio.com',
});
module.exports.admin = admin;
