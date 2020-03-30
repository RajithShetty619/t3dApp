import React from 'react'
import {createStackNavigator,CardStyleInterpolators,TransitionPresets,TransitionSpecs} from '@react-navigation/stack'
import personalFoodCard from './personalFoodCard'
import personalMain from './personalMain'
import personalAppCard from './personalAppCard'
import personalTopicCard from './personalTopicCard'
function AppNavigation(){

    const personalStack = createStackNavigator();
    return (
        
        <personalStack.Navigator   headerMode="none" screenOptions={
            {
              gestureEnabled:true,
              gestureDirection:'horizontal-inverted',
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              transitionSpec:{
                  open:TransitionSpecs.RevealFromBottomAndroidSpec  ,
                  close:TransitionSpecs.FadeOutToBottomAndroidSpec ,
              }
            }} >
            <personalStack.Screen name="personalMain" component={personalMain}/>
            <personalStack.Screen name="personalFoodCard" component={personalFoodCard}/>
            <personalStack.Screen name="personalAppCard" component={personalAppCard}/>
            <personalStack.Screen name="personalTopicCard" component={personalTopicCard}/>
        </personalStack.Navigator>
        
    )
}

export default AppNavigation
