import React,{Component} from 'react'
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase';
import fire from '../fire';
import { ActivityIndicator,AsyncStorage,View} from 'react-native';
import { Text } from 'native-base';


 export default class main extends Component
{ state = {
  notification: {},
};
 async componentDidMount()
  { 
    await this.pushnotif();
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }
 
  PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

  pushnotif=async()=>  {
    
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    // only asks if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    // On Android, permissions are granted on app installation, so
    // askAsync will never prompt the user
    
    
    // Stop here if the user did not grant permissions
    if (status !== 'granted') {
      alert('No notification permissions!');
      return this.props.navigation.navigate("index") ;
    }
    
  let uid =firebase.auth().currentUser.uid
  
    // Get the token that identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  console.log(token,"token")
  
  
 
  fire.database().ref('/users/').child(uid).update({
    expoPushToken: token
  });

  this.props.navigation.navigate("index")

  }

  _handleNotification = notification => {
    // do whatever you want to do with the notification
    this.setState({ notification: notification });
  };
  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="black"/>
        <Text>Please Wait</Text>
      </View>
    );
  }
}