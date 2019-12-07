import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAK_Mq74aHzv6QFI6jAjg17vdHVvddo5K4",
    authDomain: "seedfunding-2b299.firebaseapp.com",
    databaseURL: "https://seedfunding-2b299.firebaseio.com",
    projectId: "seedfunding-2b299",
    storageBucket: "seedfunding-2b299.appspot.com",
    messagingSenderId: "292157044871",
    appId: "1:292157044871:web:6982153937fbdd64c8e022"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
  