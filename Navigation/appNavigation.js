import React from 'react'
import tabNav from './tabNav';
import main from '../screen/main';
import getstarted from '../screen/getstarted'
//import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
// import NavigationStack from '../src/navigation/NavigationStack';


function AppNavigation(){

    const rootStack = createStackNavigator();
    return (
         
            <rootStack.Navigator  mode="modal" headerMode="none" >
                <rootStack.Screen name="tabNav" component={tabNav}/>
                <rootStack.Screen name="main" component={main}/>
                <rootStack.Screen name="getstarted" component={getstarted}/>
            </rootStack.Navigator>
        
    )
}

export default AppNavigation
