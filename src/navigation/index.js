import React, { useState } from "react";
import {ActivityIndicator} from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import fire from '../../fire'
import { useFocusEffect } from "@react-navigation/native";

function index({ navigation, firebase }) {

  const [user, setUser] = useState(null);

   useFocusEffect(
        React.useCallback(()=>{
          try {
            fire.auth().onAuthStateChanged(user => {
              if(user) {
                setUser(user);
                navigation.navigate("appNavigation")
              } else {
                const user = GoogleSignIn.getCurrentUser();
                if (user) {
                navigation.navigate("appNavigation")
                setUser(user);
                } else {
                  setUser(null);
                navigation.navigate("Auth")
                }
              }
            });
          } catch (error) {
            console.log(error);
          }    
        },[])
  );

  

  return (
    
      <ActivityIndicator size="large" style={{flex:1}} color="black"/>
    
  );
}

export default index;