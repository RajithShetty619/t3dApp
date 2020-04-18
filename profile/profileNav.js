import React from 'react'
import {createStackNavigator,CardStyleInterpolators,TransitionSpecs} from '@react-navigation/stack'
import profileMain from './profileMain'
import preference from '../preferences/preference';
import preferenceTopic from '../preferences/preferenceTopic';
import preferenceApp from '../preferences/preferenceApp';
import privacyPolicy from './privacyPolicy';
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
            <profileNav.Screen name="privacyPolicy" component={privacyPolicy} />
        </profileNav.Navigator>
        
    )
}

export default AppNavigation
