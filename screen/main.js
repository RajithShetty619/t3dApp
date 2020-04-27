import React,{Component} from 'react'
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase';
import fire from '../fire';
import { View,ActivityIndicator,ImageBackground,Dimensions,Text} from 'react-native';


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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
        <ImageBackground 
                    source={require('../assets/logoV2.png')} 
                    resizeMode="contain"
                    style={{ 
                      alignContent:"center",
                      justifyContent: "center",
                      width:Dimensions.get('window').width,
                      height:Dimensions.get('window').height
                    }}
        > 
          <ActivityIndicator size="large" color="#44626e" style/>
          <Text onPress={()=>this.props.navigation.navigate("index")}
                style={{textAlign:'center',textAlignVertical:'bottom'}}
          >
            Please Wait</Text>
        </ImageBackground>
      </View>
    );
  }
}