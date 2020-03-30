import React from 'react'
import login from '../screen/login';
import loading from '../screen/loading';
import signup from '../screen/signup';
import tabNav from './tabNav';
import main from '../screen/main';
import getstarted from '../screen/getstarted'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

function AppNavigation(){

    const rootStack = createStackNavigator();
    return (
        <NavigationContainer>
            <rootStack.Navigator  mode="modal" headerMode="none" >
                <rootStack.Screen name="loading" component={loading}/>
                <rootStack.Screen name="login"  component={login}/>
                <rootStack.Screen name="signup" component={signup}/>
                <rootStack.Screen name="main" component={main}/>
                <rootStack.Screen name="tabNav" component={tabNav}/>
                <rootStack.Screen name="getstarted" component={getstarted}/>
            </rootStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
