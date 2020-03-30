import React from 'react'
import {createStackNavigator,CardStyleInterpolators,TransitionPresets,TransitionSpecs} from '@react-navigation/stack'
import profileMain from './profileMain'
import preference from './preference';
function AppNavigation(){

    const profileNav = createStackNavigator();
    return (
        
        <profileNav.Navigator   headerMode="none" screenOptions={
            {
              gestureEnabled:false,
             
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              transitionSpec:{
                  open:TransitionSpecs.FadeInFromBottomAndroidSpec ,
                  close:TransitionSpecs.TransitionIOSSpec,
              }
            }} >
            <profileNav.Screen name="profileMain" component={profileMain}/>
            <profileNav.Screen name="preference" component={preference}/>
            {/* <profileNav.Screen name="personalAppCard" component={personalAppCard}/>
            <profileNav.Screen name="personalTopicCard" component={personalTopicCard}/> */}
        </profileNav.Navigator>
        
    )
}

export default AppNavigation
