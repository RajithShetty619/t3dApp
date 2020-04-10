import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";

const Stack = createStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      title: 'Demo',  //Defailt title,
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
      name="Home"
      component={Home}
    />
  </Stack.Navigator>

)

export default AppNavigation;
