import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBg2XFVoVbsAMUhYP6YuznMIJI13xiPxoo",
    authDomain: "top3daily-d7ddd.firebaseapp.com",
    databaseURL: "https://top3daily-d7ddd.firebaseio.com",
    projectId: "top3daily-d7ddd",
    storageBucket: "top3daily-d7ddd.appspot.com",
    messagingSenderId: "422452307527",
    appId: "1:422452307527:web:f0cefdaaa16ec352db3362",
    measurementId: "G-1MZ7JDJXKL"
  };
var fire = firebase.initializeApp(config);
export default fire;