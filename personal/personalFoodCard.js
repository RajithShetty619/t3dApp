import React,{useState,useEffect} from 'react'
import { View,Image,AsyncStorage,BackHandler,Dimensions} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body} from 'native-base';
import {useFocusEffect} from "@react-navigation/native";
import firebase from 'firebase'

export default function personalFoodCard ({route,navigation}){
    
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
    let { cardF1 } = route.params;
    let [cardF2,setCardF2]=useState({"cuisine":"","food_deter":"veg","food_info":"","food_item":"","food_meal":"","food_pic":"","sr":""})
    let [cardF3,setCardF3]=useState({"cuisine":"","food_deter":"veg","food_info":"","food_item":"","food_meal":"","food_pic":"","sr":""})
    let { urlF1 } = route.params;
    let [urlF2,setUrlF2]=useState('../assets/loading.png')
    let [urlF3,setUrlF3]=useState('../assets/loading.png')
    
    
        useEffect(()=>{  
            async function Do() { 
            let  val2= await _retrieveData("foodData1")
            setCardF2(val2)
            await firebase.storage().ref('/food/'+val2["food_pic"]).getDownloadURL().then(data=>setUrlF2(data))
            let  val3= await _retrieveData("foodData2")
            setCardF3(val3)
            await firebase.storage().ref('/food/'+val3["food_pic"]).getDownloadURL().then(data=>setUrlF3(data))
           }
           Do();
           return()=>{BackHandler.removeEventListener("hardwareBackPress",true)}
          },[])
          useFocusEffect(
                React.useCallback(()=>{
                    BackHandler.addEventListener("hardwareBackPress",()=>{
                        navigation.navigate("personalMain")
                        return true
                        })
                    return()=>{
                        BackHandler.removeEventListener("hardwareBackPress",()=>{
                            navigation.navigate("personalMain")
                            return true
                        })
                    }    
                },[])
          );
      
       
      return(
        <Container style={{backgroundColor:'black', paddingTop:15,flex:1}}>
            <Content>
                <View >
                    <Card style={{ borderRadius: 16,borderColor:"black"}} >
                        <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Image source={{uri: urlF1}} style={{height: 550, width: Dimensions.get('window').width, flex: 1,borderRadius:16}} 
                            resizeMode="stretch" />
                        </CardItem>
                        <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Body>
                            <Text >
                                {cardF1["food_info"]}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
                <View >
                    <Card style={{ borderRadius: 16,borderColor:"black"}} >
                        <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Image source={{uri: urlF2}} style={{height: 550, width: Dimensions.get('window').width, flex: 1,borderRadius:16}} 
                            resizeMode="stretch" />
                        </CardItem>
                        <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Body>
                            <Text >
                                {cardF2["food_info"]}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
                <View >
                    <Card style={{ borderRadius: 16,borderColor:"black"}} >
                        <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Image source={{uri: urlF3}} style={{height: 550, width: Dimensions.get('window').width, flex: 1,borderRadius:16}} 
                            resizeMode="stretch" />
                        </CardItem>
                        <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Body>
                            <Text >
                                {cardF3["food_info"]}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </Content>
        </Container>

    )

}
    
