import React from 'react'
import {createStackNavigator,CardStyleInterpolators,TransitionPresets,TransitionSpecs} from '@react-navigation/stack'
import genRecomFoodCard from './genRecomFoodCard'
import genRecomMain from './genRecomMain'
import genRecomTopicCard  from './genRecomTopicCard'
import genRecomAppCard from './genRecomAppCard'

function AppNavigation(){

    const generalStack = createStackNavigator();
    return (
        
        <generalStack.Navigator   headerMode="none" screenOptions={
            {
              gestureEnabled:true,
              gestureDirection:'horizontal',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              transitionSpec:{
                  open:TransitionSpecs.FadeInFromBottomAndroidSpec ,
                  close:TransitionSpecs.TransitionIOSSpec,
              }
            }} >
            <generalStack.Screen name="genRecomMain" component={genRecomMain}/>
            <generalStack.Screen name="genRecomFoodCard" component={genRecomFoodCard}/>
            <generalStack.Screen name="genRecomTopicCard" component={genRecomTopicCard}/>
            <generalStack.Screen name="genRecomAppCard" component={genRecomAppCard}/>
        </generalStack.Navigator>
        
    )
}

export default AppNavigation
