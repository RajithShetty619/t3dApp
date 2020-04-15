import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator
    initialRouteName="Login"
    headerMode="none"
    screenOptions={{
      title: "Demo",
      headerTitleStyle: {
        fontSize: 16,
        flex: 1,
      },
      cardStyle: {
        backgroundColor: "white"
      },
      headerStyle: {
        backgroundColor: '#4A94FB',
        borderBottomColor: 'transparent',
      },
      headerTintColor: 'white'
    }}
  >
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: "Login",
      }}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{
        title: "Sign Up",
      }}
    />
  </Stack.Navigator>
)

export default AuthNavigation;
