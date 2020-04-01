import React,{useState,useEffect} from 'react'
import { View,Image} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,footer,Left} from 'native-base';
import fire from '../fire'
import firebase from 'firebase'
export default function genRecomAppCard (){
    let [card1,setCard1]=useState({"category":"","sr":"","topic_info":"","topic_name":"","topic_pic":""})
    let [card2,setCard2]=useState({"category":"","sr":"","topic_info":"","topic_name":"","topic_pic":""})
    let [card3,setCard3]=useState({"category":"","sr":"","topic_info":"","topic_name":"","topic_pic":""})
    const [url1,setUrl1]=useState('../assets/loading.png')
    const [url2,setUrl2]=useState('../assets/loading.png')
    const [url3,setUrl3]=useState('../assets/loading.png')
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
                                {card1.topic_info}
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
                                {card2.topic_info}
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
                                {card3.topic_info}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </Content>
        </Container>

    )
    
}