
import React from 'react'
import firebase from 'firebase';
import fire from '../fire';
import { StyleSheet, Text, Alert, View, Button,AsyncStorage} from 'react-native'
import { CheckBox } from 'native-base';
import * as Google from 'expo-google-app-auth';
export default class SignUp extends React.Component {

  state = { user: null ,check:false};
   isUserEqual=(googleUser, firebaseUser)=> {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      console.log(providerData,"providerData")
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }
   onSignIn=(googleUser)=> {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser)=> {
      unsubscribe();
      console.log(googleUser.accessToken)
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
          );
          firebase.auth().signInWithCredential(credential)
       
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    }
    );
  }
    signInWithGoogleAsync=async()=>{
    try {
      const result = await Google.logInAsync({
        behavior:'web',
        androidClientId: "1005079802175-3ap6veiumd6tqtc78im8bip9emq8o2ia.apps.googleusercontent.com",
        
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  // onPress = () => {
  //   if(this.state.check){
  //       if (this.state.user) {
  //       this.signOutAsync();
  //     } else {
  //       this.signInAsync();
  //   }
  // }
  //   else{
  //     Alert.alert("Agree terms and condition to continue")
  //   }
  // };



      render(){
        return(
      <View style={styles.container}>
        <Button title="sign in with google" onPress={()=>this.signInWithGoogleAsync()}/>
        {/* <CheckBox onPress={this.setState({check: !this.state.check})} 
              title="Agree terms and condition to continue"
                  checked={this.state.check}/> */}
                  
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})