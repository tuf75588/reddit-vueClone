import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAKPi_Lij-a7VGyuPHVs1EV6j3j5-L4DCc',
  authDomain: 'reddit-clone-ba45e.firebaseapp.com',
  databaseURL: 'https://reddit-clone-ba45e.firebaseio.com',
  projectId: 'reddit-clone-ba45e',
  storageBucket: 'reddit-clone-ba45e.appspot.com',
  messagingSenderId: '250958012943',
};
firebase.initializeApp(config);

export default firebase;
