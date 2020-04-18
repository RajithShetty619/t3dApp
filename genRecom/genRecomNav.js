import React from 'react'
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack'

import genRecomMain from './genRecomMain'

function genRecomNav(){

    const generalStack = createStackNavigator();
    return (
        
        <generalStack.Navigator   headerMode="none" screenOptions={
            {
              gestureEnabled:true,
              gestureDirection:'horizontal-inverted',
              cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
           
            }} >
            <generalStack.Screen name="genRecomMain" component={genRecomMain}/>
        </generalStack.Navigator>
        
    )
}

export default genRecomNav
