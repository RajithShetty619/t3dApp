import React from 'react'
import {createStackNavigator,CardStyleInterpolators,TransitionSpecs} from '@react-navigation/stack' 
import preference from './preference';
import preferenceTopic from './preferenceTopic';
import preferenceApp from './preferenceApp'; 
function AppNavigation(){

    const preferenceNav = createStackNavigator();
    return (
        
        <preferenceNav.Navigator   
             
            initialParams={{ itemId: 42 }}
            headerMode="none" 
            screenOptions={
            { 
              gestureEnabled:false, 
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              transitionSpec:{
                  open:TransitionSpecs.FadeInFromBottomAndroidSpec ,
                  close:TransitionSpecs.TransitionIOSSpec,
              },
            }} >
            <preferenceNav.Screen name="preference" component={preference}/>
            <preferenceNav.Screen name="preferenceApp" component={preferenceApp}/>
            <preferenceNav.Screen name="preferenceTopic" component={preferenceTopic}/> 
        </preferenceNav.Navigator>
        
    )
}

export default AppNavigation
