import React, { useState } from "react";
import {ActivityIndicator} from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import fire from '../../fire'
import { useFocusEffect } from "@react-navigation/native";

function index({ navigation }) {

  const [user, setUser] = useState(null);

   useFocusEffect(
      React.useCallback(()=>{
        try {
          fire.auth().onAuthStateChanged(user => {
            if(user) {
              setUser(user);
              navigation.navigate('AppNavigation')
            } else {
              const user = GoogleSignIn.getCurrentUser();
              if (user) {
              navigation.navigate('AppNavigation')
              
              setUser(user);
              } else {
                setUser(null);
              navigation.navigate('Auth')
              }
            }
          });
        } catch (error) {
          console.log(error);
        }    
      },[])
  );

  

  return(
      <ActivityIndicator size="large" style={{flex:1}} color="black"/>
    );
}

export default index;