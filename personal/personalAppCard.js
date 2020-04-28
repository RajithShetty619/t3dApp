import React,{useState,useEffect} from 'react'
import { View,Image,AsyncStorage,BackHandler,Dimensions,StyleSheet,TouchableWithoutFeedback,ImageBackground} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body} from 'native-base';
import firebase from 'firebase'
import {useFocusEffect} from "@react-navigation/native";

export default function personalAppCard ({route,navigation}){
    
   
    const _retrieveData = async (path) => {
        try {
          const value = await AsyncStorage.getItem(path);
          console.log(value,"value data")
          if (value !== null) {
            return JSON.parse(value)
          }
        } catch (error) {
          console.log(error)
        }
      };
    let {cardA1}=route.params
    let [cardA2,setCardA2]=useState({"app_info":"",
                                     "app_name":"","app_pic":"","category":"","sr":""})
    let [cardA3,setCardA3]=useState({"app_info":"",
                                     "app_name":"","app_pic":"","category":"","sr":""})
    let {urlA1}=route.params
    let [urlA2,setUrlA2]=useState('../assets/loading.png')
    let [urlA3,setUrlA3]=useState('../assets/loading.png')
    const [isPressed1,setPress1]=useState(false)
    const [isPressed2,setPress2]=useState(false)
    const [isPressed3,setPress3]=useState(false)
    useEffect(()=>{  
        async function Do() { 
        let  val2= await _retrieveData("appData1")
        await firebase.storage().ref('/App/'+val2["app_pic"]).getDownloadURL().then(data=>setUrlA2(data))
        setCardA2(val2)
        let  val3= await _retrieveData("appData2")
        await firebase.storage().ref('/App/'+val3["app_pic"]).getDownloadURL().then(data=>setUrlA3(data))
        setCardA3(val3)
        }
        Do();
        },[])

    useFocusEffect(
            React.useCallback(()=>{
                BackHandler.addEventListener("hardwareBackPress",()=>{
                    navigation.navigate("personalMain")
                    return true
                    })
                return()=>{
                    BackHandler.removeEventListener("hardwareBackPress",()=>{
                        navigation.navigate("personalMain")
                        return true
                    })
                }    
            },[])
      );


          return(
            <Container style={{backgroundColor:'#2b2c35', paddingTop:15,flex:1}}>
            <Content>
                    <Card style={{ borderRadius: 16,borderColor:"#2b2c35"}} >
                        <CardItem cardBody style={{ backgroundColor:'#2b2c35',borderRadius:16 }}>
                            <TouchableWithoutFeedback onPress={()=>{setPress1(!isPressed1)}}>
                               <View style={{ backgroundColor:'#2b2c35',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                    <ImageBackground
                                source={{uri: urlA1}}
                                style={styles.image}
                                imageStyle={{borderRadius:16}}
                                resizeMode="cover" 
                                >
                                    {isPressed1&&cardA1?
                                    <View style={styles.opacity}>
                                        <Text style={styles.info} >
                                            {cardA1["app_info"]}
                                        </Text>
                                    </View>
                                    :
                                    <View style={styles.imageDetail}>
                                        <Text style={styles.textHeading}>
                                            {cardA1["app_name"]}
                                        </Text>
                                        <Text style={styles.details} >
                                            {cardA1["category"]} app
                                        </Text>
                                    </View>
                                    }
                                    
                                </ImageBackground> 
                               </View>
                              
                            </TouchableWithoutFeedback>
                            
                        </CardItem>
                    </Card>
                    <Card style={{ borderRadius: 16,borderColor:"#2b2c35"}} >
                        <CardItem cardBody style={{ backgroundColor:'#2b2c35',borderRadius:16 }}>
                            <TouchableWithoutFeedback onPress={()=>{setPress2(!isPressed2)}}>
                               <View style={{ backgroundColor:'#2b2c35',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                    <ImageBackground
                                source={{uri: urlA2}}
                                style={styles.image}
                                imageStyle={{borderRadius:16}}
                                resizeMode="cover" 
                                >
                                    {isPressed2?
                                    <View style={styles.opacity}>
                                        <Text style={styles.info} >
                                            {cardA2["app_info"]}
                                        </Text>
                                    </View>
                                    :
                                    <View style={styles.imageDetail}>
                                        <Text style={styles.textHeading}>
                                            {cardA2["app_name"]}
                                        </Text>
                                        <Text style={styles.details} >
                                            {cardA2["category"]} app
                                        </Text>
                                    </View>
                                    }
                                    
                                </ImageBackground> 
                               </View>
                              
                            </TouchableWithoutFeedback>
                            
                        </CardItem>
                    </Card>
                    <Card style={{ borderRadius: 16,borderColor:"#2b2c35"}} >
                        <CardItem cardBody style={{ backgroundColor:'#2b2c35',borderRadius:16 }}>
                            <TouchableWithoutFeedback onPress={()=>{setPress3(!isPressed3)}}>
                               <View style={{ backgroundColor:'#2b2c35',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                    <ImageBackground
                                source={{uri: urlA3}}
                                style={styles.image}
                                imageStyle={{borderRadius:16}}
                                resizeMode="cover" 
                                >
                                    {isPressed3?
                                    <View style={styles.opacity}>
                                        <Text style={styles.info} >
                                            {cardA3["app_info"]}
                                        </Text>
                                    </View>
                                    :
                                    <View style={styles.imageDetail}>
                                        <Text style={styles.textHeading}>
                                            {cardA3["app_name"]}
                                        </Text>
                                        <Text style={styles.details} >
                                            {cardA3["category"]} app
                                        </Text>
                                    </View>
                                    }
                                </ImageBackground> 
                               </View>
                            </TouchableWithoutFeedback>
                        </CardItem>
                    </Card>
            </Content>
        </Container>
    
        )
}

const styles=StyleSheet.create({
    image:{
        flex:1,
        height: Dimensions.get('window').height/2,
        width: Dimensions.get('window').width/1.01,
        borderRadius:16 ,
        justifyContent:'flex-end'
    },
    opacity: {
        borderRadius:16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
    },
    info:{
        color:'#f9efef',
        padding: 3,
        textAlign:"center",
        paddingBottom:5
    },
    imageDetail:{
        color:'#f9efef',
        flex: .2,
        backgroundColor: 'rgba( 0, 0, 0, 0.4 )',
        marginHorizontal:60,
        borderRadius:16,
    },
    textHeading:{
        fontWeight:"700",
        fontSize:20,
        textAlign:'center',
        color:'#f9efef',
        borderRadius:5,
        flexDirection:'column',
    },
    details:{
        fontWeight:"300",
        fontSize:13,
        textAlign:'center',
        textAlignVertical:'center',
        alignSelf:'center',
        color:'#2b2c35',
        paddingHorizontal:5,
        backgroundColor: '#f9efef',
        borderRadius:30,
        flexDirection:'column'
    },
})