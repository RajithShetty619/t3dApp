import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from "./AuthNavigation";
import index from "./index"
const Stack = createStackNavigator();

function NavigationStack(){
    return(
        
        <Stack.Navigator
           
            headerMode="none"
            initialRouteName="index"
            screenOptions={{
                 //Defailt title,
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
                        name="index"
                        component={index}
                    />
                    <Stack.Screen
                        name="Auth"
                        component={AuthNavigation}
                        options={{
                            title: "Auth",
                        }}
                    />
        </Stack.Navigator>
 
    )
}

export default NavigationStack;
