import PreferVar from '../profile/preferVar';
import React,{useState,useEffect} from 'react'
import { View, StyleSheet,TouchableOpacity,Image,AsyncStorage} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,footer,Left} from 'native-base';
import fire from '../fire'
import firebase from 'firebase'

export default function personalFoodCard ({navigation}){
    
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
    let [card1,setCard1]=useState({"cuisine":"","food_deter":"veg","food_info":"","food_item":"","food_meal":"","food_pic":"","sr":""})
    let [card2,setCard2]=useState({"cuisine":"","food_deter":"veg","food_info":"","food_item":"","food_meal":"","food_pic":"","sr":""})
    let [card3,setCard3]=useState({"cuisine":"","food_deter":"veg","food_info":"","food_item":"","food_meal":"","food_pic":"","sr":""})
    let [url1,setUrl1]=useState('https://goo.gl/2W4iW6')
    let [url2,setUrl2]=useState('https://goo.gl/2W4iW6')
    let [url3,setUrl3]=useState('https://goo.gl/2W4iW6')
        useEffect(()=>{  
         async function Do() { 
           let  val1= await _retrieveData("foodData0")
           setCard1(val1)
           await firebase.storage().ref('/food/'+val1["food_pic"]).getDownloadURL().then(data=>setUrl1(data))
           let  val2= await _retrieveData("foodData1")
           setCard2(val2)
           await firebase.storage().ref('/food/'+val2["food_pic"]).getDownloadURL().then(data=>setUrl2(data))
           let  val3= await _retrieveData("foodData2")
           setCard3(val3)
           await firebase.storage().ref('/food/'+val3["food_pic"]).getDownloadURL().then(data=>setUrl3(data))
           
           }
           Do();
          },[])
      
        // useEffect(()=>{
        //     if(pass===true)
        //    { firebase.storage().ref('/food/'+card1["food_pic"]).getDownloadURL().then(data=>setUrl1(data))
        //     firebase.storage().ref('/food/'+card2["food_pic"]).getDownloadURL().then(data=>setUrl2(data))
        //     firebase.storage().ref('/food/'+card3["food_pic"]).getDownloadURL().then(data=>setUrl3(data))}
        // },[pass])
       
        return(
            <Container>
                <Content>
                     <Card style={{ borderRadius: 8 }}> 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                    <View style={{flex:1,justifyContent:"space-evenly"}}> 
                                    <Image source={{uri: url1
                                }} resizeMode="cover" style={{ height:520,width:320,flex:1}}/> 
                                     </View>
                                    <Text> {card1["cuisine"]}  </Text>
                                    <Text>{card1["food_info"]}</Text>
                                </Body>                           
                            </CardItem>
                    </Card>
                    <Card style={{ borderRadius: 8 }}> 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                <Image source={{uri: url2
                            }} resizeMode="contain" style={{ height:520,width:320,flex:1}}/>  
                                    <Text> {card2["cuisine"]}  </Text>
                                    <Text>{card2["food_info"]}</Text>
                                </Body>                           
                            </CardItem>
                    </Card>
                    <Card style={{ borderRadius: 8 }}> 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                <Image source={{uri: url3
                            }} resizeMode="contain" style={{ height:520,width:320,flex:1}}/>  
                                    <Text>{card3["cuisine"]}</Text>
                                    <Text>{card3["food_info"]}</Text>
                                </Body>                           
                            </CardItem>  
                    </Card>
                </Content>
            </Container>
        )
    
}
    
