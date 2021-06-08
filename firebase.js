import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDqO6ssd1bhelU3-sg7hzDdjaX63e79vP0',
  authDomain: 'project-9fbe4.firebaseapp.com',
  projectId: 'project-9fbe4',
  storageBucket: 'project-9fbe4.appspot.com',
  messagingSenderId: '82837179890',
  appId: '1:82837179890:web:c7a900929e11fd5baeaf6b',
  measurementId: 'G-3WZSVKTESD',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default firebase;
