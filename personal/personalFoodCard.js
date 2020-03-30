import PreferVar from '../profile/preferVar';
import React,{useState,useEffect} from 'react'
import {  StyleSheet,TouchableOpacity,Image,AsyncStorage} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,footer,Left} from 'native-base';
import fire from '../fire'
import firebase from 'firebase'
import AsyncImage from '../globalcode.js/asyncImage'

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
        console.log(path);
        return path
    }
 
    let [card1,setCard1]=useState({})
    let [card2,setCard2]=useState({})
    let [card3,setCard3]=useState({})
    const [url1,setUrl1]=useState('https://goo.gl/2W4iW6')
    const [url2,setUrl2]=useState({})
    const [url3,setUrl3]=useState({})
        useEffect(()=>{
            fire.database().ref()
            const interval = setInterval(() => {
                    fire.database().ref().child(getpath())
                        .once("value",
                    (snapshot)=>{
                        let item=snapshot.val()
                        console.log(item)
                        if(item!==null){
                        let array=[];
                        Object.
                        keys(item)
                        .forEach(i=>array.push(item[i]));
                        setCard1(array);
                }
                
                console.log(item,"item")
                if(item!==null)
                { 
                        clearInterval(interval)
                        console.log("should clear")
                        console.log(card1)
                }
                else {
                    console.log("polling")
                    }
                })
                }, 100)
            console.log("comingout")
            return ()=> clearInterval(interval)
            },[prefVar]);
        useEffect(()=>{
            fire.database().ref()
            const interval = setInterval(() => {
                    fire.database().ref().child(getpath())
                        .once("value",
                    (snapshot)=>{
                        let item=snapshot.val()
                        console.log(item)
                        if(item!==null){
                        let array=[];
                        Object.
                        keys(item)
                        .forEach(i=>array.push(item[i]));
                        setCard2(array);
                   }
                   
                   console.log(item,"item")
                   if(item!==null)
                   { 
                        clearInterval(interval)
                        console.log("should clear")
                        console.log(card1)
                   }
                   else {
                       console.log("polling")
                    }
                  })
                }, 100)
               console.log("comingout")
             return ()=> clearInterval(interval)
             },[prefVar]);

        useEffect(()=>{
        fire.database().ref()
        const interval = setInterval(() => {
                fire.database().ref().child(getpath())
                    .once("value",
                (snapshot)=>{
                    let item=snapshot.val()
                    console.log(item)
                    if(item!==null){
                    let array=[];
                    Object.
                    keys(item)
                    .forEach(i=>array.push(item[i]));
                    setCard3(array);
                }
                
                console.log(item,"item")
                if(item!==null)
                { 
                    clearInterval(interval)
                    console.log("should clear")
                    console.log(card)
                }
                else {
                    console.log("polling")
                }
                })
            }, 100)
            console.log("comingout")
            return ()=> clearInterval(interval)
            },[prefVar]);
        
         useEffect(()=>{firebase.storage().ref('/food/'+card1[5]).getDownloadURL().then(data=>setUrl1(data))},[card1])
        //  useEffect(()=>{firebase.storage().ref('/food/'+card2[5]).getDownloadURL().then(data=>setUrl2(data))},[card2])
        //  useEffect(()=>{firebase.storage().ref('/food/'+card3[5]).getDownloadURL().then(data=>setUrl3(data))},[card3])
             
            //indian snacks nonveg '/0/food/'+getDeter()+'/0/'+getFoodType()+'/0/'+getFood()+'/data/0/
                                 //'/0/food/nonveg/0/snacks/0/indian/data/0/'
            //0/food/0/nonveg/0/snacks/0/indian/0/data
            // nonveg snacks american   firebase.storage().ref('/food/'+card1[5]).getDownloadURL().then(data=>setUrl1(data))
    
        return(
            <Container>
                <Content>
                     <Card style={{ borderRadius: 8 }}> 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                 
                            {/* <AsyncImage
            style={{
              borderRadius: 50,
              height: 100,
              width: 100,
            }}
            source={{
              uri: url1
            }}
            placeholderColor='#b3e5fc'/> */}
                                <Body>
                                <Image source={{uri: url1
                            }} resizeMode="contain" style={{flexDirection:'row',width:400,height:400}}/> 
                                    <Text> {card1[2]}  </Text>
                                    <Text>{card1[3]}</Text>
                                </Body>                           
                            </CardItem>
                    </Card>
                    {/* <Card style={{ borderRadius: 8 }}> 
                            <CardItem style={{ flexdirection:"column",borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                <Image source={{uri: url2
                            }} resizeMode="contain" style={{flexDirection:'row',width:400,height:400}}/>  
                                    <Text> {card2[2]}  </Text>
                                    <Text>{card2[3]}</Text>
                                </Body>                           
                            </CardItem>
                    </Card>
                    <Card style={{ borderRadius: 8 }}> 
                            <CardItem style={{ flexdirection:"column",borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                <Image source={{uri: url3
                            }} resizeMode="contain" style={{flexDirection:'row',width:400,height:400}}/>  
                                    <Text>{card3[2]}</Text>
                                    <Text>{card3[3]}</Text>
                                </Body>                           
                            </CardItem>  
                    </Card>*/}
                </Content>
            </Container>
        )
    
}