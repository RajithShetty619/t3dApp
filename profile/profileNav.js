import React from 'react'
import {createStackNavigator,CardStyleInterpolators,TransitionSpecs} from '@react-navigation/stack'
import profileMain from './profileMain'
import preference from './preference';
import preferenceTopic from './preferenceTopic';
import preferenceApp from './preferenceApp'
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
             <profileNav.Screen name="preferenceApp" component={preferenceApp}/>
            <profileNav.Screen name="preferenceTopic" component={preferenceTopic}/> 
        </profileNav.Navigator>
        
    )
}

export default AppNavigation
