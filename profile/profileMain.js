import React, { useState,useEffect } from 'react';
import { StyleSheet,View,TouchableOpacity,Image,AsyncStorage} from 'react-native';
import {Container, Header, Content, Icon, Accordion, Text, } from 'native-base';
import fire from '../fire';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default function profileMain({navigation}) {
  const dataArray = [
    [
        {title: "preference", content: "Food Preference" },
        {title: "preferenceApp", content: "App Preference" },
        {title: "preferenceTopic", content: "Topic Preference" }
    ] 
  ];
 const [image,setImage]=useState('../assets/loading.png')
 const[user,setUser]=useState('');
 const[email,setEmail]=useState('');
 useEffect(() => {
  async function Does(){
        let authUser=fire.auth().currentUser
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
       console.log(JSON.stringify(result.uri),"setUri")
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
       alignItems: "stretch" ,
       backgroundColor: "black" }}>
     <Text style={{ fontWeight: "600" ,color:'lightblue'}}>
         Set preference
       </Text>
       {expanded
         ? <Icon style={{ fontSize: 18,color:"white" }} name="remove" />
         : <Icon style={{ fontSize: 18,color:"white" }} name="add" />}
     </View>
   );
 }
 const  _renderContent=(item)=> {
   return (
   <View style={{justifyContent:"center",alignContent:"center"}}>  
     <Text onPress={()=>navigation.navigate('preference')}
       style={{
         backgroundColor: "#e3f1f1",
         padding: 10,
         fontStyle: "italic"
       }}
     >
       {item[0].content}
     </Text>
       <Text onPress={()=>navigation.navigate('preferenceApp')}
       style={{
         backgroundColor: "#e3f1f1",
         padding: 10,
         fontStyle: "italic",
       }}
     >
       {item[1].content}
     </Text>
       <Text onPress={()=>navigation.navigate('preferenceTopic')}
       style={{
         backgroundColor: "#e3f1f1",
         padding: 10,
         fontStyle: "italic",
       }}
     >
       {item[2].content}
     </Text>
     
    </View> 
   );
 }
  
    return (
      <Container>
         <View style={{alignItems:'center'}}>
          {image && <Image source={{ uri: image }} 
              style={{ width: 150, height: 150,borderRadius: 300,justifyContent:'center'}} />}
        
           <Icon style={{ fontSize: 18,color:"lightblue",justifyContent:'flex-start'}} name="create" type="MaterialIcons"
          onPress={()=>{_pickImage()}}/>
          </View>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                
                <Text style={styles.name}>{user}</Text>
                <Text style={styles.userInfo}>{email} </Text>
                
            </View>
          </View>
        <Content style={{backgroundColor:'black'}}>
        <Accordion
              dataArray={dataArray}
              animation={true}
              expanded={true}
              renderHeader={_renderHeader}
              renderContent={_renderContent}
            />
          <View style={styles.body}>
            <View style={styles.item}>
            <View style={styles.infoContent}>
                 <TouchableOpacity style={styles.buttonContainerTransparent}  onPress={()=>navigation.navigate('privacyPolicy')} >
                <Text style={{color:'#00BFFF',padding:20,fontSize:24}}>Privacy Policy</Text> 
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.item}>
            <View style={styles.infoContent}>
                 <TouchableOpacity style={styles.buttonContainerTransparent} 
                 onPress={async()=>{
                                await fire.auth().signOut();
                                await GoogleSignIn.signOutAsync();
                                navigation.navigate('NavigationStack')}}  >
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
    height:15,
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
    height:250,
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

    
