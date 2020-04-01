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
    let [url1,setUrl1]=useState('../assets/loading.png')
    let [url2,setUrl2]=useState('../assets/loading.png')
    let [url3,setUrl3]=useState('../assets/loading.png')
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
      //  <Text> {card1["cuisine"]}  </Text>
      //<Text>{card1["food_info"]}</Text>
      
       
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
                                {card1["food_info"]}
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
                                {card2["food_info"]}
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
                                {card3["food_info"]}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </Content>
        </Container>

    )

}
    
