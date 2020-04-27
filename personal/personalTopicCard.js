import React,{useState,useEffect} from 'react'
import { View,Image,AsyncStorage,BackHandler,Dimensions} from 'react-native'
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
        useEffect(()=>{  
         async function Do() { 
           let  val2= await _retrieveData("topicData1")
           setCardT2(val2) //+val2["topic_pic"]
           await firebase.storage().ref('/topics/IMG_6301.jpeg').getDownloadURL().then(data=>setUrlT2(data))
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
            <Container style={{backgroundColor:'black', paddingTop:15,flex:1}}>
                <Content>
                    <View style={{paddingTop:20}}>
                        <Card style={{ borderRadius: 16,borderColor:"black"}} >
                            <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                        borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Image source={{uri: urlT1}} style={{height: 350, width: Dimensions.get('window').width, flex: 1,borderRadius:16}} 
                                resizeMode="stretch" />
                            </CardItem>
                            <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Body>
                               {cardT1?
                               ( <Text >
                                    {cardT1["topic_info"]}
                                </Text>)
                                :
                                null}
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View >
                        <Card style={{ borderRadius: 16,borderColor:"black"}} >
                            <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                        borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Image source={{uri: urlT2}} style={{height: 350, width: Dimensions.get('window').width, flex: 1,borderRadius:16}} 
                                resizeMode="stretch" />
                            </CardItem>
                            <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Body>
                                <Text >
                                   70 {/* {cardT2["topic_info"]} */}
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View >
                        <Card style={{ borderRadius: 16,borderColor:"black"}} >
                            <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                        borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Image source={{uri: urlT3}} style={{height: 350, width: Dimensions.get('window').width, flex: 1,borderRadius:16}} 
                                resizeMode="stretch" />
                            </CardItem>
                            <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Body>
                                <Text >
                                    {cardT3["topic_info"]}
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </Container>
    
        )
    
    
}