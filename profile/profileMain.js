import React, { useState,useEffect } from 'react';
import { StyleSheet,View,TouchableOpacity,BackHandler,Alert} from 'react-native';
import {Text,Container,Content} from 'native-base';
import fire from '../fire';


export default function profileMain({navigation}) {
 const[user,setUser]=useState('');
const[email,setEmail]=useState('');
 useEffect(() => {
  async function Does(){
        let authUser=fire.auth().currentUser
        fire.database().ref().child('/users/'+authUser.uid+'/userName')
        .once("value",(snapshot)=>{
          let item=snapshot.val()
          console.log(snapshot.val())
          setUser(item)
          })
          fire.database().ref().child('/users/'+authUser.uid+'/email')
          .once("value",(snapshot)=>{
            let item=snapshot.val()
            console.log(snapshot.val())
            setEmail(item)
            })
            console.log("handleAndroidBackButton")
            handleAndroidBackButton(exitAlert)
          }
            Does();          
  },[])
  

  
  const handleAndroidBackButton = callback => {
    BackHandler.addEventListener('hardwareBackPress', () => {
        callback();
        return true;
    });
    };
    const exitAlert = () => {
    Alert.alert(
        'Confirm exit',
        'Do you want to quit the app?',
        [
        {text: 'CANCEL', style: 'cancel'},
        {text: 'OK', onPress: () => BackHandler.exitApp()}
        ]
    );
    };
     
  
    return (
      <Container>
      
          <View style={styles.header}>
            <View style={styles.headerContent}>
                
                <Text style={styles.name}>{user}</Text>
                <Text style={styles.userInfo}>{email} </Text>
                
            </View>
          </View>
        <Content style={{backgroundColor:'black'}}>
          <View style={styles.body}>
            <View style={styles.item}>
              
              <View style={styles.infoContent}>
                 <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('preference')}>
                <Text>  Food Preferences</Text> 
                </TouchableOpacity>
              </View>
              </View>
              <View style={styles.item}>
            <View style={styles.infoContent}>
                 <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('preferenceApp')}>
                <Text> App Preferences </Text> 
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.item}>
            <View style={styles.infoContent}>
                 <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('preferenceTopic')} >
                <Text>  Topic Preferences</Text> 
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.item}>
            <View style={styles.infoContent}>
                 <TouchableOpacity style={styles.buttonContainerTransparent}  onPress={()=>navigation.navigate('privacyPolicy')} >
                <Text style={{color:'#00BFFF',padding:20,fontSize:24}}>Privacy Policy</Text> 
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.item}>
            <View style={styles.infoContent}>
                 <TouchableOpacity style={styles.buttonContainerTransparent} onPress={()=>{fire.auth().signOut();navigation.navigate('NavigationStack')}}  >
                <Text style={{color:'#00BFFF',padding:20,fontSize:20}}>Sign Out</Text> 
                </TouchableOpacity>
              </View>
            </View>


          </View>
     </Content>
      </Container>
    );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#F0FFFF",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:150,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#000000",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  
  },
 
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});

    
