import React,{useState,useEffect} from 'react'
import {  StyleSheet,TouchableOpacity,Image} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,footer,Left} from 'native-base';
import fire from '../fire'
import firebase from 'firebase'
import { set } from 'react-native-reanimated';
export default function genRecomFoodCard (){
    let [card1,setCard1]=useState({})
    let [card2,setCard2]=useState({})
    let [card3,setCard3]=useState({})
    const [url1,setUrl1]=useState('https://goo.gl/2W4iW6')
    const [url2,setUrl2]=useState('https://goo.gl/2W4iW6')
    const [url3,setUrl3]=useState('https://goo.gl/2W4iW6')
    const[pass,setPass]=useState(false)
    useEffect(() => {
            fire.database().ref('/0/general/food/0').once("value",snapshot=>{
               let item=snapshot.val() 
               console.log(item,"card1")
               setCard1(item)
               console.log((item.food_pic))
            })
            fire.database().ref('/0/general/Food/1').once("value",snapshot=>{
               let item=snapshot.val() 
               setCard2(item)
            })
            fire.database().ref('/0/general/Food/2').once("value",snapshot=>{
                let item=snapshot.val() 
                setCard3(item)
                if(card2!==null)
                {
               setPass(true)
               console.log("got thru")
               }
             })  ; 
            
    },[])
    useEffect(()=>{
                firebase.storage().ref('/food/'+card1.food_pic).getDownloadURL().then(data=>setUrl1(data))
                firebase.storage().ref('/food/'+card2.food_pic).getDownloadURL().then(data=>setUrl2(data))
                firebase.storage().ref('/food/'+card3.food_pic).getDownloadURL().then(data=>setUrl3(data))},[card3])
    
        return(
            <Container>
                <Content>
                     <Card style={{ borderRadius: 8 }}> 
                        <TouchableOpacity > 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                <Image source={{uri: url2
                                 }} resizeMode="contain" style={{flexDirection:'row',width:400,height:400}}/> 
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