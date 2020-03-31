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
    let [card1,setCard1]=useState({})
    let [card2,setCard2]=useState({})
    let [card3,setCard3]=useState({})
    let [url1,setUrl1]=useState('https://goo.gl/2W4iW6')
    let [url2,setUrl2]=useState('https://goo.gl/2W4iW6')
    let [url3,setUrl3]=useState('https://goo.gl/2W4iW6')
        useEffect(()=>{  
         async function Do() { 
           let  val1= await _retrieveData("appData0")
           setCard1(val1)
           let  val2= await _retrieveData("appData1")
           setCard2(val2)
           let  val3= await _retrieveData("appData2")
           setCard3(val3)
           setPass(true) 
           }
           Do();
          },[])
      
        useEffect(()=>{
            if(pass===true)
           { 
            firebase.storage().ref('/App/'+card1["app_pic"]).getDownloadURL().then(data=>setUrl1(data))
            firebase.storage().ref('/App/'+card2["app_pic"]).getDownloadURL().then(data=>setUrl2(data))
            firebase.storage().ref('/App/'+card3["app_pic"]).getDownloadURL().then(data=>setUrl3(data))
        }},[pass])
      
        return(
            <Container>
            <Content>
                 <Card style={{ borderRadius: 8 }}> 
                        <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                            <Body>
                               
                                <Image source={{uri: url1
                            }} resizeMode="cover" style={{ width:250,height:550}}/> 
                            
                                <Text>{card1["app_name"]}  </Text>
                                <Text>{card1["app_info"]}</Text>
                            </Body>                           
                        </CardItem>
                </Card>
                <Card style={{ borderRadius: 8 }}> 
                        <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                            <Body>
                            <Image source={{uri: url2
                        }} resizeMode="contain" style={{width:400,height:400}}/>  
                               <Text> {card2["app_name"]}  </Text>
                                <Text>{card2["app_info"]}</Text>
                            </Body>                           
                        </CardItem>
                </Card>
                <Card style={{ borderRadius: 8 }}> 
                        <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                            <Body>
                            <Image source={{uri: url3
                        }} resizeMode="contain" style={{width:400,height:400}}/>  
                                <Text> {card3["app_name"]}  </Text>
                                <Text>{card3["app_info"]}</Text>
                            </Body>                           
                        </CardItem>  
                </Card>
            </Content>
        </Container>
        )
    
}