import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import {ActivityIndicator} from 'react-native';
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as Icon from "@expo/vector-icons";
import * as GoogleSignIn from 'expo-google-sign-in';
import { withFirebaseHOC } from "../config/Firebase";
import fire from '../../fire'

function index({ navigation, firebase }) {
  const [isAssetsLoadingComplete, setIsAssetsLoadingComplete] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      loadLocalAsync();

      fire.auth().onAuthStateChanged(user => {
        if(user) {
          setUser(user);
          navigation.navigate("main")
        } else {
          const user = GoogleSignIn.getCurrentUser();
          if (user) {
          navigation.navigate("main")
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
  }, []);

  async function loadLocalAsync() {
    return await Promise.all([
      Asset.loadAsync([
        require("../assets/flame.png"),
        require("../assets/icon.png")
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font
      })
    ]);
  }

  function handleLoadingError(error) {
    console.warn(error);
  }

  function handleFinishLoading() {
    setIsAssetsLoadingComplete(true);
  }

  return (
    isAssetsLoadingComplete
      ?
      <ActivityIndicator size="large" />
      :
      <AppLoading
        startAsync={loadLocalAsync}
        onFinish={handleFinishLoading}
        onError={handleLoadingError}
      />
  );
}

export default index;