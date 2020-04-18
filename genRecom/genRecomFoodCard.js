import React,{useState,useEffect} from 'react'
import {  View, Image} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body} from 'native-base';
import fire from '../fire'
import firebase from 'firebase'

export default function genRecomFoodCard (){
    let [card1,setCard1]=useState({})
    let [card2,setCard2]=useState({})
    let [card3,setCard3]=useState({})
    const [url1,setUrl1]=useState('../assets/loading.png')
    const [url2,setUrl2]=useState('../assets/loading.png')
    const [url3,setUrl3]=useState('../assets/loading.png')
   
    useEffect(() => {
         async function GetResult() { 
            await fire.database().ref('/0/general/food/0').once("value",snapshot=>{
               let item=snapshot.val() 
               console.log(item,"card1")
               setCard1(item)
               firebase.storage().ref('/food/'+item.food_pic).getDownloadURL().then(data=>setUrl1(data))
               console.log((item.food_pic))
            })
           await fire.database().ref('/0/general/food/1').once("value",snapshot=>{
               let item=snapshot.val() 
               setCard2(item)
               firebase.storage().ref('/food/'+item.food_pic).getDownloadURL().then(data=>setUrl2(data))
               console.log((item.food_pic))
            })
           await fire.database().ref('/0/general/food/2').once("value",snapshot=>{
                let item=snapshot.val() 
                setCard3(item)
                firebase.storage().ref('/food/'+item.food_pic).getDownloadURL().then(data=>setUrl3(data))
                console.log((item.food_pic))
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
                                    <Image source={{uri: url1}} style={{height: 500, width: null, flex: 1,borderRadius:16}} 
                                    resizeMode="cover" />
                                </CardItem>
                                <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                    <Body>
                                    <Text >
                                        {card1.food_info}
                                    </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                        <View >
                            <Card style={{ borderRadius: 16,borderColor:"black"}} >
                                <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                            borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                    <Image source={{uri: url2}} style={{height: 500, width: null, flex: 1,borderRadius:16}} 
                                    resizeMode="cover" />
                                </CardItem>
                                <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                    <Body>
                                    <Text >
                                        {card2.food_info}
                                    </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                        <View >
                            <Card style={{ borderRadius: 16,borderColor:"black"}} >
                                <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                            borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                    <Image source={{uri: url3}} style={{height: 500, width: null, flex: 1,borderRadius:16}} 
                                    resizeMode="cover" />
                                </CardItem>
                                <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                    <Body>
                                    <Text >
                                        {card3.food_info}
                                    </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    </Content>
                </Container>
    
            )
    
    }
        
    

 
    
