import React, { useState,useEffect } from 'react';
import { StyleSheet,View,TouchableOpacity,Image,AsyncStorage,Alert,Text} from 'react-native';
import {Container, Button, Content, Icon, Accordion,Item,Input, Body } from 'native-base';
import fire from '../fire';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase';
 
export default function profileMain({navigation}) {
  const dataArray = [
    [
        {title: "preference", content: "Food Preference" },
        {title: "preferenceApp", content: "App Preference" },
        {title: "preferenceTopic", content: "Topic Preference" }
    ] 
  ];
 const [image,setImage]=useState('https://bootdey.com/img/Content/avatar/avatar6.png')
 const[user,setUser]=useState('');
 const[email,setEmail]=useState('');
 const[input,setInput]=useState(false);
 const[password,setPass]=useState('');
 let authUser=fire.auth().currentUser
 useEffect(() => {
  async function Does(){
        
        fire.database().ref().child('/users/'+authUser.uid+'/name')
        .once("value",(snapshot)=>{
          let item=snapshot.val()
          setUser(item)
          })
          fire.database().ref().child('/users/'+authUser.uid+'/email')
          .once("value",(snapshot)=>{
            let item=snapshot.val()
            setEmail(item)
            })
            
            let uri=await AsyncStorage.getItem("image")
             
            setImage(JSON.parse(uri))
            await getPermissionAsync();
          }
            Does();          
  },[])
  
 
  const ClearLocalStorage=async()=>{
    let keys=["prefFood","prefApp","prefTopic","date","foodData0"]
    await AsyncStorage.multiRemove(keys)
  }
 
    
 const  getPermissionAsync = async () => {
  if (Constants.platform.ios) {
     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
     if (status !== 'granted') {
       alert('Sorry, we need camera roll permissions to make this work!');
     }
   }
 };

 const _pickImage = async () => {
    try {
     let result = await ImagePicker.launchImageLibraryAsync({
       mediaTypes: ImagePicker.MediaTypeOptions.All,
       allowsEditing: true,
       aspect: [4, 3],
       quality: 1,
     });
     if (!result.cancelled) {
       setImage(result.uri)
      
       await AsyncStorage.setItem("image",JSON.stringify(result.uri))
     }
   } catch (E) {
     console.log(E);
   }
 };
 const _renderHeader=(item, expanded)=> {
   return (
     <View style={{
       flexDirection: "row",
       padding: 10,
       justifyContent: "center",
       alignItems: "center" ,
       backgroundColor: "#0C0C0C" }}>
     <Text style={{ fontWeight: "700",fontSize:24 ,color:'#F0F8FF',justifyContent:'center'}}>
         Set preference
       </Text>
       {expanded
         ? <Icon style={{ fontSize: 20,color:"#FFFFFF",paddingLeft:10, }} name="remove" />
         : <Icon style={{ fontSize: 20,color:"#FFFFFF",paddingLeft:10, }} name="add" />}
     </View>
   );
 }

 const profileHeader=(item,expanded)=>{
   return(
    <View style={{
      flexDirection: "row",
      padding: 10,
      justifyContent: "center",
      alignItems: "center" ,
      backgroundColor: "#0C0C0C" }}>
    <Text style={{ fontWeight: "600",fontSize:22,color:'#F0F8FF',justifyContent:'center'}}>
        Help and support 
    </Text>
      {expanded
        ? <Icon style={{ fontSize: 20,color:"#FFFFFF",paddingLeft:10, }} name="remove" />
        : <Icon style={{ fontSize: 20,color:"#FFFFFF",paddingLeft:10, }} name="add" />}
    </View>
   );
 }

 const  _renderContent=(item)=> {
   return (
   <View style={{justifyContent:"center",alignItems:"center",backgroundColor: "#e3f1f1",}}> 
   <View >
     <Text onPress={()=>navigation.navigate('preference',{id:'profileMain'})}
       style={{
        //  backgroundColor: "#e3f1f1",
         padding: 10,
         fontStyle: "italic",
         fontSize:20,
         
       }}
     >
       {item[0].content}
     </Text>
     </View> 
       <Text onPress={()=>navigation.navigate('preferenceApp',{id:'profileMain'})}
       style={{
        //  backgroundColor: "#e3f1f1",
         padding: 10,
         fontStyle: "italic",
         fontSize:20
       }}
     >
       {item[1].content}
     </Text>
       <Text onPress={()=>navigation.navigate('preferenceTopic',{id:'profileMain'})}
       style={{
        //  backgroundColor: "#e3f1f1",
         padding: 10,
         fontStyle: "italic",
         fontSize:20
       }}
     >
       {item[2].content}
     </Text>
     
    </View> 
   );
 }

 const profilContent=(item)=>{
   return(
      <View style={{justifyContent:"center",alignItems:"center",backgroundColor: "#e3f1f1",}}> 
      <View >
        <Text  onPress={()=>navigation.navigate('privacyPolicy')}
          style={{
          //  backgroundColor: "#e3f1f1",
            padding: 10,
            fontStyle: "bold",
            fontSize:20,
            
          }}
        >
          Privacy Policy
        </Text>
        </View> 
        <View>
        <Text style={{fontStyle:"bold",fontSize:20,alignSelf:"center"}}
          onPress={()=>{Linking.openURL('https://snapinsight.net/faq.php')}}>
          FAQ
          </Text>
        </View>
          <View>
          <Text style={{fontStyle:"bold",fontSize:20,alignSelf:"center"}}
          onPress={()=>{Linking.openURL('https://snapinsight.net/contacts.php')}}>
          Contact Us
          </Text>
          </View>
          
          <View style={styles.item}>
                
                    {input?( <View style={{height:150,width:300,justifyContent:'space-evenly',alignItems:'center',flex:1}}>
                            <Body style={{height:100}}>
                          <View style={{width:300,height:100,alignItems:"center",justifyContent:'space-around'}}>
                            <View style={{padding:10}}>
                          <Item rounded style={{width:300,height:50,justifyContent:'space-around',padding:10}}>
                            <Text style={{color:'#ffffff'}}>{email}</Text>
                          </Item>
                          </View> 
                          
                          <Item rounded >
                            <Input secureTextEntry
                            placeholder='Password' style={{color:'#ffffff'}} 
                            onChangeText={(password) => setPass( password )}
                            value={password}/>
                          </Item>
                          
                          </View>
                          <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',padding:10}}>
                            <View style={{paddingRight:10}}>
                          <Button rounded style={{backgroundColor:'#00BFFF',justifyContent:'space-between'}} onPress={()=>{setInput(false)}}>
                            <Text style={{paddingHorizontal:10}}>cancel</Text>
                          </Button>
                          </View>
                          <View style={{paddingleft:10}}>
                          <Button rounded style={{backgroundColor:'#32cd32',}} 
                          onPress={async()=>{
                            try {
                              const response = await fire.auth().signInWithEmailAndPassword(email, password);
                          
                              if (response.user) {
                                await ClearLocalStorage();
                                await fire.database().ref('/users/'+authUser.uid).remove();
                                await authUser.delete().then(function () {
                                  console.log('delete successful?')
                                }).catch(function (error) {
                                  console.error({error})
                                })
                                await GoogleSignIn.signOutAsync(); 
                                navigation.navigate('index');
                              }
                            } catch (error) {
                              // let googleUserC=GoogleSignIn.isConnectedAsync();
                            try { 
                              let googleUser=await GoogleSignIn.isSignedInAsync().catch(error=>alert(error))
                              
                              if(googleUser!==true)//googleuserc
                              {
                              let errorCode = error.code;
                              let errorMessage = error.message;
                              if (errorCode === 'auth/wrong-password') {
                                Alert.alert('Wrong password.');
                              }
                            
                            }
                              else{
                                await fire.auth().signOut();
                                await GoogleSignIn.signOutAsync();
                                navigation.navigate('index');
                                const user = await GoogleSignIn.signInSilentlyAsync();
                                const credential= firebase.auth.GoogleAuthProvider.credential(user.auth.idToken, user.auth.accessToken).catch(error=>Alert.alert(error))
                                //login with credential
                                await firebase.auth().signInWithCredential(credential);
                                await fire.database().ref('/users/'+authUser.uid).remove();
                                await authUser.delete().then(function () {
                                  console.log('delete successful?')
                                }).catch(function (error) {
                                  console.error({error})
                                })
                                await GoogleSignIn.signOutAsync(); 
                              }}
                              catch{
                                console.log("error")
                              }
                            }
                            }}>
                            <Text style={{paddingHorizontal:10}}>submit</Text>
                          </Button>
                          </View>
                          </View>
                          </Body>
                          </View>
                      ):(
                        <Text style={{fontSize:20}}
                        onPress={()=>{setInput(true)}}
                        >
                          Delete account
                        </Text>
                      )
                    }
                </View>
        </View>
     
      
   )
 }
  
    return (
      <Container>
         <View style={{alignItems:'center'}}>
         
          </View>
          <View style={styles.header}>
            <View style={styles.headerContent}>
            
                 {image && <Image source={{ uri: image }} 
              style={{ width: 150, height: 150,borderRadius: 300,justifyContent:'center'}} />}
        
           <Icon style={{ fontSize: 18,color:'#00BFFF',justifyContent:'flex-start'}} name="create" type="MaterialIcons"
          onPress={()=>{_pickImage()}}/>
                <Text style={styles.name}>{user}</Text>
                <Text style={styles.userInfo}>{email} </Text>
                
            </View>
          </View>
        <Content style={{backgroundColor:'#000000'}}>
          <View>
        <Accordion
              dataArray={dataArray}
              animation={true}
              expanded={true}
              renderHeader={_renderHeader}
              renderContent={_renderContent}
            />
            </View>
            <View >
            <Accordion
                dataArray={dataArray}
                animation={true}
                expanded={true}
                renderHeader={profileHeader}
                renderContent={profilContent}
             />
            </View>
            <View style={styles.item}>
              <View style={styles.infoContent}>
                    <TouchableOpacity  
                    onPress={async()=>{
                                  await ClearLocalStorage();
                                  await fire.auth().signOut();
                                  await GoogleSignIn.signOutAsync()
                                  navigation.navigate('index')
                                  }}  >
                  <Text style={{color:"#F0F8FF",textAlign:'center',fontSize:20}}>Sign Out</Text> 
                  </TouchableOpacity>
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
    height:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:150,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom:10,
  },
  infoContent:{
    justifyContent:'center'
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
    backgroundColor: "#2b2c35",
    height:350,
    alignItems:'center',
  },
  item:{
    padding:10,
    justifyContent:'center'
    
  },
 
  info:{
    fontSize:18,
    marginTop:20,
    
    color: "#FFFFFF",
  }
});

    
