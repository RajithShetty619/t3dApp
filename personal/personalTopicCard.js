import React,{useState,useEffect} from 'react'
import { View,AsyncStorage,BackHandler,Dimensions,TouchableWithoutFeedback,ImageBackground,StyleSheet} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body} from 'native-base';
import firebase from 'firebase'
import {useFocusEffect} from "@react-navigation/native";

export default function personalTopicCard ({route,navigation}){
    
    
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
    let {cardT1}=route.params
    let [cardT2,setCardT2]=useState({"category":"","sr":"","topic_info":"","topic_name":"","topic_pic":""})
    let [cardT3,setCardT3]=useState({"category":"","sr":"","topic_info":"","topic_name":"","topic_pic":""})
    let {urlT1}=route.params
    let [urlT2,setUrlT2]=useState('../assets/loading.png')
    let [urlT3,setUrlT3]=useState('../assets/loading.png')
    const [isPressed1,setPress1]=useState(false)
    const [isPressed2,setPress2]=useState(false)
    const [isPressed3,setPress3]=useState(false)
        useEffect(()=>{  
         async function Do() { 
           let  val2= await _retrieveData("topicData1")
           setCardT2(val2)
           await firebase.storage().ref('/topics/'+val2["topic_pic"]).getDownloadURL().then(data=>setUrlT2(data))
           let  val3= await _retrieveData("topicData2")
           setCardT3(val3)
           await firebase.storage().ref('/topics/'+val3["topic_pic"]).getDownloadURL().then(data=>setUrlT3(data))
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
                                source={{uri: urlT1}}
                                style={styles.image}
                                imageStyle={{borderRadius:16}}
                                resizeMode="cover" 
                                >
                                    {isPressed1&&cardT1?
                                    <View style={styles.opacity}>
                                        <Text style={styles.info} >
                                            {cardT1["topic_info"]}
                                        </Text>
                                    </View>
                                    :
                                    <View style={styles.imageDetail}>
                                        <Text style={styles.textHeading}>
                                            {cardT1["topic_name"]}
                                        </Text>
                                        <Text style={styles.details} >
                                            {cardT1["category"]}  
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
                                source={{uri: urlT2}}
                                style={styles.image}
                                imageStyle={{borderRadius:16}}
                                resizeMode="cover" 
                                >
                                    {isPressed2?
                                    <View style={styles.opacity}>
                                        <Text style={styles.info} >
                                            {cardT2["topic_info"]}
                                        </Text>
                                    </View>
                                    :
                                    <View style={styles.imageDetail}>
                                        <Text style={styles.textHeading}>
                                            {cardT2["topic_name"]}
                                        </Text>
                                        <Text style={styles.details} >
                                            {cardT2["category"]}  
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
                                source={{uri: urlT3}}
                                style={styles.image}
                                imageStyle={{borderRadius:16}}
                                resizeMode="cover" 
                                >
                                    {isPressed3?
                                    <View style={styles.opacity}>
                                        <Text style={styles.info} >
                                            {cardT3["topic_info"]}
                                        </Text>
                                    </View>
                                    :
                                    <View style={styles.imageDetail}>
                                        <Text style={styles.textHeading}>
                                            {cardT3["topic_name"]}
                                        </Text>
                                        <Text style={styles.details} >
                                            {cardT3["category"]} 
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
        flex: .26,
        backgroundColor: 'rgba( 0, 0, 0, 0.3 )',
        marginHorizontal:30,
        borderRadius:16,
    },
    textHeading:{
        fontWeight:"500",
        fontSize:18,
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