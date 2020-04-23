import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import AuthNavigation from "./AuthNavigation";
import appNavigation from '../../Navigation/appNavigation'
import index from "./index"
const Stack = createStackNavigator();

function NavigationStack(){
    return(
    < NavigationContainer> 
        <Stack.Navigator
           
            headerMode="none"
            initialRouteName="index"
            screenOptions={{

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
                        name="Auth"
                        component={AuthNavigation}
                        options={{
                            title: "Auth",
                        }}
                    />
                     <Stack.Screen
                        name="appNavigation"
                        component={appNavigation}
                        options={{
                            title: "appNavigation",
                        }}
                    /> 
                    <Stack.Screen
                        name="index"
                        component={index}
                    />
        </Stack.Navigator>
    </ NavigationContainer>
    )
}

export default NavigationStack;
