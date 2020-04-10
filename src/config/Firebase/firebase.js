// import * as firebase from "firebase";
// import "firebase/auth";
// import "firebase/firestore";
// import firebaseConfig from "./firebaseConfig";
// import '@firebase/database';
// import fire from '../../../fire';


// const dbh = fire.database();

// const Firebase = {

//   loginWithEmail: (email, password) => {
//     return fire.auth().signInWithEmailAndPassword(email, password);
//   },
//   signupWithEmail: (email, password) => {
//     return fire.auth().createUserWithEmailAndPassword(email, password);
//   },
//   signOut: () => {
//     return fire.auth().signOut();
//   },
//   checkUserAuth: user => {
//     return fire.auth().onAuthStateChanged(user);
//   },
//   passwordReset: email => {
//     return fire.auth().sendPasswordResetEmail(email);
//   },

//   createNewUser: userData => {
//     console.log(userData.uid,"uid")
//     console.log(userData.name,"name")
//     console.log(userData.email,"email")
//     const name=userData.name
//     const email=userData.email
//     return fire
//       .database()
//       .ref("/googleUser/")
//       .child(userData.uid)
//       .set({
//         name,email
//       })
//   },

//   getUser: userData => {
//     return dbh
//       .ref("/googleUser/"+userData.uid)
//       .once("value",(snapshot)=>{
//         console.log(snapshot.val(),"snapshot")
//         return snapshot.val()
//       })
//   }
// };

// export default Firebase;
