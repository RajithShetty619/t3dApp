import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import genRecomMain from './genRecomMain'

function genRecomNav(){

    const generalStack = createStackNavigator();
    return (
        <generalStack.Navigator   headerMode="none" >
            <generalStack.Screen name="genRecomMain" component={genRecomMain}/>
        </generalStack.Navigator>
    )
}

export default genRecomNav
