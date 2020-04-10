import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { withFirebaseHOC } from "../config/Firebase";
import * as GoogleSignIn from 'expo-google-sign-in';

function Home({ navigation, firebase }) {
  const [user, setUser] = useState(null);
  const [isGoogleUser, setGoogleUser] = useState(false);

  async function _signOutGoogleAsync() {
    try {
      await GoogleSignIn.signOutAsync();
    } catch ({ message }) {
      console.error('Error: logout: ' + message);
    } finally {
      setUser(null);
    }
  };

  async function handleSignout() {
    try {
      if (isGoogleUser) {
        _signOutGoogleAsync();
      } else {
        await firebase.signOut();
      }
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  }

  async function firebaseAuth() {
    try {
      firebase.checkUserAuth(user => {
        if (user) {
          setGoogleUser(false);
          // getUser(user)
        } else {
          googleAuth();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  function googleAuth() {
    try {
      const user = GoogleSignIn.getCurrentUser();
      if (user&&!isGoogleUser) {
        setUser({ name: user.displayName, email: user.email, uid: user.uid });
        setGoogleUser(true);
      } else {
        navigation.navigate("Login"); //If user authentication fails
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    firebaseAuth();
  }, []);

  return (
    <View style={styles.container}>
      {user &&
        <>
          <Text> {`${user.email}`} </Text>
          <Text> {`${user.name}`} </Text>
        </>
      }
      <Button
        title="SignOut"
        onPress={handleSignout}
        titleStyle={{
          color: "#F57C00"
        }}
        type="clear"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withFirebaseHOC(Home);
