import React,{useState,useEffect} from 'react'
import { View, StyleSheet,TouchableOpacity,Image,AsyncStorage} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,footer,Left} from 'native-base';
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
    let [card1,setCard1]=useState({"category":"","sr":"","topic_info":"","topic_name":"","topic_pic":""})
    let [card2,setCard2]=useState({"category":"","sr":"","topic_info":"","topic_name":"","topic_pic":""})
    let [card3,setCard3]=useState({"category":"","sr":"","topic_info":"","topic_name":"","topic_pic":""})
    let [url1,setUrl1]=useState('https://goo.gl/2W4iW6')
    let [url2,setUrl2]=useState('https://goo.gl/2W4iW6')
    let [url3,setUrl3]=useState('https://goo.gl/2W4iW6')
        useEffect(()=>{  
         async function Do() { 
           let  val1= await _retrieveData("topicData0")
           setCard1(val1)
           await firebase.storage().ref('/topics/'+val1["topic_pic"]).getDownloadURL().then(data=>setUrl1(data))
           let  val2= await _retrieveData("topicData1")
           setCard2(val2)
           await firebase.storage().ref('/topics/'+val2["topic_pic"]).getDownloadURL().then(data=>setUrl2(data))
           let  val3= await _retrieveData("topicData2")
           setCard3(val3)
           await firebase.storage().ref('/topics/'+val3["topic_pic"]).getDownloadURL().then(data=>setUrl3(data))
           setPass(true) 
           }
           Do();
          },[])
      
        useEffect(()=>{
            if(pass===true)
           { 
            // firebase.storage().ref('/topics/'+card1["topic_pic"]).getDownloadURL().then(data=>setUrl1(data))
            // firebase.storage().ref('/topics/'+card2["topic_pic"]).getDownloadURL().then(data=>setUrl2(data))
            // firebase.storage().ref('/topics/'+card3["topic_pic"]).getDownloadURL().then(data=>setUrl3(data))
        }},[pass])
      
        return(
            <Container>
            <Content>
                 <Card style={{ borderRadius: 8 }}> 
                        <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                            <Body>
                               
                                <Image source={{uri: url1
                            }} resizeMode="contain" style={{width:400,height:400}}/> 
                            
                                <Text>{card1["topic_name"]}  </Text>
                                <Text>{card1["topic_info"]}</Text>
                            </Body>                           
                        </CardItem>
                </Card>
                <Card style={{ borderRadius: 8 }}> 
                        <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                            <Body>
                            <Image source={{uri: url2
                        }} resizeMode="contain" style={{width:400,height:400}}/>  
                               <Text> {card2["topic_name"]}  </Text>
                                <Text>{card2["topic_info"]}</Text>
                            </Body>                           
                        </CardItem>
                </Card>
                <Card style={{ borderRadius: 8 }}> 
                        <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                            <Body>
                            <Image source={{uri: url3
                        }} resizeMode="contain" style={{width:400,height:400}}/>  
                                <Text> {card3["topic_name"]}  </Text>
                                <Text>{card3["topic_info"]}</Text>
                            </Body>                           
                        </CardItem>  
                </Card>
            </Content>
        </Container>
        )
    
}