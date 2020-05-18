import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDDGC3mGgwNNzg2pKjpTwY46Oe25sCdEus",
    authDomain: "eternal-flux-273706.firebaseapp.com",
    databaseURL: "https://eternal-flux-273706.firebaseio.com",
    projectId: "eternal-flux-273706",
    storageBucket: "eternal-flux-273706.appspot.com",
    messagingSenderId: "271871034630",
    appId: "1:271871034630:web:cf7874378cb2f41bc90a87",
    measurementId: "G-N4YVS2L354"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;