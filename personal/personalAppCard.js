import React,{useState,useEffect} from 'react'
import { View,Image,AsyncStorage,BackHandler,Dimensions} from 'react-native'
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
            <Container style={{backgroundColor:'#000000', paddingTop:15,flex:1}}>
                <Content>
                    <View style={{paddingTop:20}} >
                        <Card style={{ borderRadius: 16,borderColor:"#000000"}} >
                            <CardItem cardBody style={{ backgroundColor:'#000000',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                        borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Image source={{uri: urlA1}} style={{height: 300, width: Dimensions.get('window').width, flex: 1,borderRadius:16}} 
                                resizeMode="stretch" />
                            </CardItem>
                            <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Body>
                               {cardA1?    
                                (<Text >
                                    {cardA1["app_info"]}
                                </Text>)
                                :
                                null}
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View  >
                        <Card style={{ borderRadius: 16,borderColor:"#000000"}} >
                            <CardItem cardBody style={{ backgroundColor:'#000000',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                        borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Image source={{uri: urlA2}} style={{height: 300, width: Dimensions.get('window').width, flex: 1,borderRadius:16}} 
                                resizeMode="stretch" />
                            </CardItem>
                            <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Body>
                                <Text >
                                    {cardA2["app_info"]}
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View >
                        <Card style={{ borderRadius: 16,borderColor:"#000000"}} >
                            <CardItem cardBody style={{ backgroundColor:'#000000',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                        borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Image source={{uri: urlA3}} style={{height: 300, width: Dimensions.get('window').width, flex: 1,borderRadius:16}} 
                                resizeMode="stretch" />
                            </CardItem>
                            <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                <Body>
                                <Text >
                                    {cardA3["app_info"]}
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </Container>
        )
}