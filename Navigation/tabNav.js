import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import personalNav from '../personal/personalNav'
import genRecomNav  from '../genRecom/genRecomNav'
import profileNav from '../profile/profileNav'
import { Icon } from 'react-native-elements'
function tabNav() {
    const tab=createBottomTabNavigator()
    return (
        <tab.Navigator  
            initialRouteName="personalNav"
            tabBarOptions={{
            activeTintColor: '#0000A0',
            inactiveTintColor: 'gray',
            keyboardHidesTabBar:true
           
          }}>
             <tab.Screen  name="Personal" component={personalNav}
            options={{
                tabBarIcon:({color,size})=>{ return <Icon name='person-outline' size={size} color={color} />;}
            }}/> 
            <tab.Screen  name="General" component={genRecomNav}
            options={{
                tabBarIcon:({color,size})=>{ return <Icon name='explore' size={size} color={color} />;}
            }}/>
            
            <tab.Screen  name="Profile" component={profileNav}
            options={{
                tabBarIcon:({color,size})=>{ return <Icon name='fingerprint' size={size} color={color} />;}
            }}/>
        </tab.Navigator>
    )
}

export default tabNav
