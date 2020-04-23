import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity, AsyncStorage,BackHandler,Alert } from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { HideWithKeyboard } from "react-native-hide-with-keyboard";
import * as GoogleSignIn from 'expo-google-sign-in';
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import ErrorMessage from "../components/ErrorMessage";
import GoogleSignInButton from '../components/GoogleSignInButton';
import fire from '../../fire'
import { CLIENT_ID } from '../config/GoogleSignIn'
import firebase from 'firebase'
import {useFocusEffect} from '@react-navigation/native'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(6, "Password must have at least 6 characters ")
});

function Login({ navigation }) {
  const [user, setUser] = useState(null);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("ios-eye");

  useFocusEffect(
    React.useCallback(()=>{
            console.log("called")
            handleAndroidBackButton(exitAlert);    
        return()=>{
            BackHandler.removeEventListener('hardwareBackPress', true);
        }    
    },[])
);
const handleAndroidBackButton = callback => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      callback();
      return true;
    });
  };
const  exitAlert = () => {
    Alert.alert(
      'Confirm exit',
      'Do you want to quit the app?',
      [
        {text: 'CANCEL', style: 'cancel'},
        {text: 'OK', onPress: () => BackHandler.exitApp()}
      ]
    );
  };
  async function _syncUserWithStateAsync() {
    const user = await GoogleSignIn.signInSilentlyAsync();
    if (user) {
      
      setUser(user);
      try {
        // create a new firebase credential with the token
        const credential= firebase.auth.GoogleAuthProvider.credential(user.auth.idToken, user.auth.accessToken)
        // login with credential
        await firebase.auth().signInWithCredential(credential);
        const name=user.firstName+user.lastName
        const email=user.email
        let authUser= firebase.auth().currentUser
        await fire.database().ref().child('/users/').child(authUser.uid)
        .set({
         name,
          email,
        });
      
        navigation.navigate(
          'preference',
          {
           id:"preferenceTopic"
         }
       )
      } catch (error) {
        alert(error)
      }
      
    }
  };

  async function _loadPreference(){
    let authUser= firebase.auth().currentUser
    await fire.database().ref().child('/users/').child(authUser.uid+'/preference/preferenceFood')
    .once("value").then(async(snapshot)=>{
      const pref=JSON.parse(snapshot.val());console.log(pref,"pref")
      if(pref)
      {
        await AsyncStorage.setItem("prefFood",JSON.stringify(pref))
      }
    })
    await fire.database().ref().child('/users/').child(authUser.uid+'/preference/preferenceApp')
    .once("value").then(async(snapshot)=>{
      const pref=JSON.parse(snapshot.val());console.log(pref,"pref")
      if(pref)
      {
        await AsyncStorage.setItem("prefApp",JSON.stringify(pref))
      }
    })
    await fire.database().ref().child('/users/').child(authUser.uid+'/preference/preferenceTopic')
    .once("value").then(async(snapshot)=>{
      const pref=JSON.parse(snapshot.val());console.log(pref,"pref")
      if(pref)
      {
        await AsyncStorage.setItem("prefTopic",JSON.stringify(pref))
      }
    })

  };
  async function initAsync() {
    await GoogleSignIn.initAsync({ clientId: CLIENT_ID });
    _syncUserWithStateAsync();
  };

  async function _signInAsync() {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        _syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  async function _signOutAsync() {
    try {
      await GoogleSignIn.signOutAsync();
    } catch ({ message }) {
      console.error('Error: logout: ' + message);
    } finally {
      setUser(null);
    }
  };

  function _toggleAuth() {
    if (user) {
      //Todo: JIC if old user is available in cache
      _signOutAsync();
    } else {
      _signInAsync();
    }
  }

  function goToSignup() {
    return navigation.navigate("Signup");
  }

  function handlePasswordVisibility() {
    if (rightIcon === "ios-eye") {
      setRightIcon("ios-eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "ios-eye-off") {
      setRightIcon("ios-eye");
      setPasswordVisibility(!passwordVisibility);
    }
  }

  async function handleOnLogin(values, actions) {
    const { email, password } = values;

    try {
      const response = await fire.auth().signInWithEmailAndPassword(email, password);

      if (response.user) {
        await _loadPreference()
        navigation.navigate("appNavigation",{screen:'main'})
         
      }
    } catch (error) {
      actions.setFieldError("general", error.message);
    } finally {
      actions.setSubmitting(false);
    }
  }

  function buttonTitle() {
    return user ? 'Sign-Out of Google' : 'Sign-In with Google';
  }

  useEffect(() => {
    initAsync();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HideWithKeyboard style={styles.logoContainer}>
       
      </HideWithKeyboard>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          handleOnLogin(values, actions);
        }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          isValid,
          touched,
          handleBlur,
          isSubmitting
        }) => (
            <>
              <FormInput
                name="email"
                value={values.email}
                onChangeText={handleChange("email")}
                placeholder="Enter email"
                autoCapitalize="none"
                iconName="ios-mail"
                iconColor="#2C384A"
                onBlur={handleBlur("email")}
              />
              <ErrorMessage errorValue={touched.email && errors.email} />
              <FormInput
                name="password"
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder="Enter password"
                secureTextEntry={passwordVisibility}
                iconName="ios-lock"
                iconColor="#2C384A"
                onBlur={handleBlur("password")}
                rightIcon={
                  <TouchableOpacity onPress={handlePasswordVisibility}>
                    <Ionicons name={rightIcon} size={28} color="grey" />
                  </TouchableOpacity>
                }
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={handleSubmit}
                  title="LOGIN"
                  buttonColor="#039BE5"
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                />
              </View>
              <ErrorMessage errorValue={errors.general} />
            </>
          )}
      </Formik>
      <GoogleSignInButton onPress={_toggleAuth}>{" "}{buttonTitle()}{" "}</GoogleSignInButton>

      <Button
        title="Don't have an account? Sign Up"
        onPress={goToSignup}
        titleStyle={{
          color: "#F57C00"
        }}
        type="clear"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  logoContainer: {
    marginBottom: 15,
    alignItems: "center"
  },
  buttonContainer: {
    margin: 25
  }
});

export default Login;
