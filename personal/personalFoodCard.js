import PreferVar from '../profile/preferVar';
import React,{useState,useEffect} from 'react'
import { View, StyleSheet,TouchableOpacity,Image,AsyncStorage} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,footer,Left} from 'native-base';
import fire from '../fire'
import firebase from 'firebase'

export default function personalFoodCard ({navigation}){
    const prefVar=PreferVar()
    const getpath=()=>{
        const getFood=()=>{
            const prefer =prefVar["food"]
            let arr = [];
                for (let key in prefer) {
                    if (prefer[key]) arr.push(key);
                        
                } 
             return arr[Math.floor(Math.random()*arr.length)]  
        } 
        const getDeter=()=>{
          const prefer =prefVar["food_deter"]
          let arr = [];
              for (let key in prefer) {
                  if (prefer[key]) arr.push(key);     
              }
           return arr[Math.floor(Math.random()*arr.length)]  
        }
        const getFoodType=()=>{
        const prefer =prefVar["food_type"]
      let arr = [];
          for (let key in prefer) {
              if (prefer[key]) arr.push(key);     
          }
          return arr[Math.floor(Math.random()*arr.length)]
        }   
        let ran =Math.floor(Math.random()*10)
        let path='/0/food/0/'+getDeter()+'/0/'+getFoodType()+'/0/'+getFood()+'/0/data/'+ran
      
        return path
    }
 
    let [card1,setCard1]=useState({})
    let [card2,setCard2]=useState({})
    let [card3,setCard3]=useState({})
    const [url1,setUrl1]=useState('https://goo.gl/2W4iW6')
    const [url2,setUrl2]=useState('https://goo.gl/2W4iW6')
    const [url3,setUrl3]=useState('https://goo.gl/2W4iW6')
        useEffect(()=>{
            
                    const interval = setInterval(() => {
                    fire.database().ref().child(getpath())
                        .once("value",
                    (snapshot)=>{
                        let item=snapshot.val()
                        
                        if(item!==null){
                        let array=[];
                        Object.
                        keys(item)
                        .forEach(i=>array.push(item[i]));
                        setCard1(array);
                }
                
                
                if(item!==null)
                {        
                         firebase.storage().ref('/food/'+item.food_pic).getDownloadURL().then(data=>setUrl1(data))
                        clearInterval(interval)
                        
                }
               
                })
                }, 100)
            
            return ()=> clearInterval(interval)
            },[prefVar]);
        useEffect(()=>{
            
            const interval = setInterval(() => {
                    fire.database().ref().child(getpath())
                        .once("value",
                    (snapshot)=>{
                        let item=snapshot.val()
                        if(item!==null){
                        let array=[];
                        Object.
                        keys(item)
                        .forEach(i=>array.push(item[i]));
                        setCard2(array);
                   }
                   
                   
                   if(item!==null)
                   {      
                        firebase.storage().ref('/food/'+item.food_pic).getDownloadURL().then(data=>setUrl2(data))
                        clearInterval(interval)
                       
                   }
                   
                  })
                }, 100)
              
             return ()=> clearInterval(interval)
             },[prefVar]);

        useEffect(()=>{
            
        
        const interval = setInterval(() => {
                fire.database().ref().child(getpath())
                    .once("value",
                (snapshot)=>{
                    let item=snapshot.val()
                    
                    if(item!==null){
                    let array=[];
                    Object.
                    keys(item)
                    .forEach(i=>array.push(item[i]));
                    setCard3(array);
                }
                
                
                if(item!==null)
                {  console.log(item,"item")
                    firebase.storage().ref('/food/'+item.food_pic).getDownloadURL().then(data=>setUrl3(data))
                    clearInterval(interval)
                }
                })
            }, 100)
        
            return ()=> clearInterval(interval)
            },[prefVar]);
        
       
        return(
            <Container>
                <Content>
                     <Card style={{ borderRadius: 8 }}> 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                    <View style={{flex:1,justifyContent:"space-evenly"}}> 
                                    <Image source={{uri: url1
                                }} resizeMode="cover" style={{ width:250,height:550}}/> 
                                     </View>
                                    <Text> {card1[2]}  </Text>
                                    <Text>{card1[3]}</Text>
                                </Body>                           
                            </CardItem>
                    </Card>
                    <Card style={{ borderRadius: 8 }}> 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                <Image source={{uri: url2
                            }} resizeMode="contain" style={{width:400,height:400}}/>  
                                    <Text> {card2[2]}  </Text>
                                    <Text>{card2[3]}</Text>
                                </Body>                           
                            </CardItem>
                    </Card>
                    <Card style={{ borderRadius: 8 }}> 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                <Image source={{uri: url3
                            }} resizeMode="contain" style={{width:400,height:400}}/>  
                                    <Text>{card3[2]}</Text>
                                    <Text>{card3[3]}</Text>
                                </Body>                           
                            </CardItem>  
                    </Card>
                </Content>
            </Container>
        )
    
}