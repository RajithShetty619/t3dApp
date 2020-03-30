import React,{useState,useEffect} from 'react'
import {  StyleSheet,TouchableOpacity } from 'react-native'
import {Card,CardItem,Text,Container,Content,Image,Body,footer,Left} from 'native-base';
import fire from '../fire'
export default function genRecomFoodCard (){
    let [card1,setCard1]=useState({})
    let [card2,setCard2]=useState({})
    let [card3,setCard3]=useState({})
    const [url1,setUrl1]=useState({})
    const [url2,setUrl2]=useState({})
    const [url3,setUrl3]=useState({})
    useEffect(() => {
            fire.database().ref('/0/general/food/0').on("value",snapshot=>{
               const item=snapshot.val() 
               setCard1(item)
            })
            fire.database().ref('/0/general/food/1').on("value",snapshot=>{
               const item=snapshot.val() 
               setCard2(item)
            })
            fire.database().ref('/0/general/food/2').on("value",snapshot=>{
                const item=snapshot.val() 
                setCard3(item)
            useEffect(()=>{firebase.storage().ref('/food/'+card1[5]).getDownloadURL().then(data=>setUrl1(data))},[card1])
            useEffect(()=>{firebase.storage().ref('/food/'+card2[5]).getDownloadURL().then(data=>setUrl2(data))},[card2])
            useEffect(()=>{firebase.storage().ref('/food/'+card3[5]).getDownloadURL().then(data=>setUrl3(data))},[card3])
             },[])
            
    },[])
    
        return(
            <Container>
                <Content>
                     <Card style={{ borderRadius: 8 }}> 
                        <TouchableOpacity > 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                
                                <Body>
                                    <Image source={{uri:url1}}/>
                                    <Text>gmain</Text>
                                </Body> 
                            </CardItem>
                            <CardItem footer>
                                    <Left> 
                                     <Text>food</Text>
                                    </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ borderRadius: 8 }}> 
                        <TouchableOpacity>
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                    <Text>app</Text>
                                </Body>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ borderRadius: 8 }}>
                        <TouchableOpacity>
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                    <Text>topic</Text>
                                </Body>
                        </CardItem>
                        </TouchableOpacity>
                    </Card>
                </Content>
            </Container>
        )
    
}