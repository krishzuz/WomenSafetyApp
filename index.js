import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Map from './screens/Map';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN', token);
  },

  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },

  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);
  },

  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,

  requestPermissions: true,
});

PushNotification.channelExists('SOS', function (exists) {
  console.log(exists); // true/false
});
AppRegistry.registerComponent(appName, () => App);
