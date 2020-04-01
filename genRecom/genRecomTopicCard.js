import React,{useState,useEffect} from 'react'
import {  StyleSheet,TouchableOpacity,Image} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,footer,Left} from 'native-base';
import fire from '../fire'
import firebase from 'firebase'
export default function genRecomAppCard (){
    let [card1,setCard1]=useState({})
    let [card2,setCard2]=useState({})
    let [card3,setCard3]=useState({})
    const [url1,setUrl1]=useState('https://goo.gl/2W4iW6')
    const [url2,setUrl2]=useState('https://goo.gl/2W4iW6')
    const [url3,setUrl3]=useState('https://goo.gl/2W4iW6')
    const[pass,setPass]=useState(false)
    useEffect(() => {
         async function GetResult() { 
            await fire.database().ref('/0/general/topic/0').once("value",snapshot=>{
               let item=snapshot.val() 
               console.log(item,"card1")
               firebase.storage().ref('/topics/'+item["topic_pic"]).getDownloadURL().then(data=>setUrl1(data))
               
            })
           await fire.database().ref('/0/general/topic/1').once("value",snapshot=>{
               let item=snapshot.val() 
               setCard2(item)
               firebase.storage().ref('/topics/'+item["topic_pic"]).getDownloadURL().then(data=>setUrl2(data))
               
            })
           await fire.database().ref('/0/general/topic/2').once("value",snapshot=>{
                let item=snapshot.val() 
                setCard3(item)
                console.log(item["topic_pic"],item,"card3")
                firebase.storage().ref('/topics/'+item["topic_pic"]).getDownloadURL().then(data=>setUrl3(data))
                
             }) ; 
           }
           GetResult();
    },[])
    
    
        return(
            <Container>
                <Content>
                     <Card style={{ borderRadius: 8 }}> 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                <Image source={{uri: url1
                                 }} resizeMode="contain" style={{width:400,height:400}}/> 
                                 <Text>{card1.topic_name}</Text>
                                    <Text>{card1.topic_info}</Text>
                                    
                                </Body> 
                            </CardItem>
                    </Card>
                    <Card style={{ borderRadius: 8 }}> 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                <Image source={{uri: url2
                                 }} resizeMode="contain" style={{width:400,height:400}}/> 
                                    <Text>{card2.topic_name}</Text>
                                    <Text>{card2.topic_info}</Text>
                                     
                                </Body>
                            </CardItem>
                    </Card>
                    <Card style={{ borderRadius: 8 }}>
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                <Image source={{uri: url3
                                 }} resizeMode="contain" style={{width:400,height:400}}/> 
                                    <Text>{card3.topic_name}</Text>
                                    <Text>{card3.topic_info}</Text>
                                   
                                </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
           
        )
    
}