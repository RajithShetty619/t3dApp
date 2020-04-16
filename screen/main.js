import React,{Component} from 'react'
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase';
import fire from '../fire';
import { View,ActivityIndicator,AsyncStorage} from 'react-native';

 export default class main extends Component
{ state = {
  notification: {},
};
  componentDidMount()
  {
    this.Does();
    this.pushnotif();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
   
  }
  Does=async()=>{ 
    await this._storeData({"app_details":{"booksandreference":true,"dating":true,"education":true,"entertainment":true,
    "finance":true,"fitness":true,"game":true,"lifestyle":true,
    "music":true,"news":true,"productivity":true,"socialmedia":true,"travel":true}}
      ,"prefApp")
    await this._storeData({"topic_details":{"architecture":true,"automobile":true,"aviation":true,"famouspersonality":true,
      "food":true,"general":true,"health":true,"psychology":true,"space":true}}
      ,"prefTopic")
    await  this._storeData({"food":{"indian":true,"british":true,"american":true,
      "spanish":true,"chinese":true,"mexican":true,
      "japanese":true,"italian":true,"french":true},
      "food_deter":{"veg":true,"nonveg":true},
      "food_type":{"snacks":true ,"maincourse":true,"dessert":true,"drinks":true}}
        ,"prefFood")
    
    }
  _storeData = async (obj,path) => {
    try {
      await AsyncStorage.setItem(path,JSON.stringify(obj) );
    } catch (error) {
      console.log(error)
    }
  }
   PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

  pushnotif=async()=>  {
    console.log("1111")
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    // only asks if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    // On Android, permissions are granted on app installation, so
    // askAsync will never prompt the user
    console.log(status,"status")
    
    // Stop here if the user did not grant permissions
    if (status !== 'granted') {
      alert('No notification permissions!');
      return this.props.navigation.navigate('tabNav') ;
    }
    
  let uid =firebase.auth().currentUser.uid
  
    // Get the token that identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  console.log(token,"token")
  
  
 
  fire.database().ref('/users/').child(uid).update({
    expoPushToken: token
  });

  console.log("4444")
  this.props.navigation.navigate('tabNav');
  

  }

  _handleNotification = notification => {
    // do whatever you want to do with the notification
    this.setState({ notification: notification });
  };
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="black"/>
      </View>
    );
  }
}