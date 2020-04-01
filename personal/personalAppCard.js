import React,{useState,useEffect} from 'react'
import { View, StyleSheet,TouchableOpacity,Image,AsyncStorage} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,footer,Left} from 'native-base';
import fire from '../fire'
import firebase from 'firebase'


export default function personalAppCard ({navigation}){
    
    const [pass,setPass]=useState(false)
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
    let [card1,setCard1]=useState({"app_info":"",
                                     "app_name":"","app_pic":"","category":"","sr":""})
    let [card2,setCard2]=useState({"app_info":"",
                                     "app_name":"","app_pic":"","category":"","sr":""})
    let [card3,setCard3]=useState({"app_info":"",
                                     "app_name":"","app_pic":"","category":"","sr":""})
    let [url1,setUrl1]=useState(require('../assets/loading.png'))
    let [url2,setUrl2]=useState(require('../assets/loading.png'))
    let [url3,setUrl3]=useState(require('../assets/loading.png'))
        useEffect(()=>{  
         async function Do() { 
           let  val1= await _retrieveData("appData0")
           setCard1(val1)
           await firebase.storage().ref('/App/'+val1["app_pic"]).getDownloadURL().then(data=>setUrl1(data))
           let  val2= await _retrieveData("appData1")
           await firebase.storage().ref('/App/'+val2["app_pic"]).getDownloadURL().then(data=>setUrl2(data))
           setCard2(val2)
           let  val3= await _retrieveData("appData2")
           await firebase.storage().ref('/App/'+val3["app_pic"]).getDownloadURL().then(data=>setUrl3(data))
           setCard3(val3)
           setPass(true) 
           }
           Do();
          },[])
      
        
      
          return(
            <Container style={{backgroundColor:'black', paddingTop:15,flex:1}}>
                <Content>
                    <View >
                        <Card style={{ borderRadius: 16,borderColor:"black"}} >
                            <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                        borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Image source={{uri: url1}} style={{height: 300, width: null, flex: 1,borderRadius:16}} 
                                resizeMode="cover" />
                            </CardItem>
                            <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Body>
                                <Text >
                                    {card1["app_info"]}
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View >
                        <Card style={{ borderRadius: 16,borderColor:"black"}} >
                            <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                        borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Image source={{uri: url2}} style={{height: 300, width: null, flex: 1,borderRadius:16}} 
                                resizeMode="cover" />
                            </CardItem>
                            <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Body>
                                <Text >
                                    {card2["app_info"]}
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View >
                        <Card style={{ borderRadius: 16,borderColor:"black"}} >
                            <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                        borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Image source={{uri: url3}} style={{height: 300, width: null, flex: 1,borderRadius:16}} 
                                resizeMode="cover" />
                            </CardItem>
                            <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Body>
                                <Text >
                                    {card3["app_info"]}
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </Container>
    
        )
    
    
}