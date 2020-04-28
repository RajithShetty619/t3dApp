import React,{useState,useEffect} from 'react'
import { View,Image,AsyncStorage,BackHandler,Dimensions,ImageBackground,StyleSheet,TouchableWithoutFeedback} from 'react-native'
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
    const [isPressed1,setPress1]=useState(false)
    const [isPressed2,setPress2]=useState(false)
    const [isPressed3,setPress3]=useState(false)
    
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
        <Container style={{backgroundColor:'#2b2c35', paddingTop:25,flex:1}}>
            <Content>
                    <Card style={{ borderRadius: 16,borderColor:"#2b2c35"}} >
                        <CardItem cardBody style={{ backgroundColor:'#2b2c35',borderRadius:16 }}>
                            <TouchableWithoutFeedback onPress={()=>{setPress1(!isPressed1)}}>
                               <View style={{ backgroundColor:'#2b2c35',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                    <ImageBackground
                                source={{uri: urlF1}}
                                style={styles.image}
                                imageStyle={{borderRadius:16}}
                                resizeMode="cover" 
                                >
                                    {isPressed1&&cardF1?
                                    <View style={styles.opacity}>
                                        <Text style={styles.info} >
                                            {cardF1["food_info"]}
                                        </Text>
                                    </View>
                                    :
                                    <View style={styles.imageDetail}>
                                        <Text style={styles.textHeading}>
                                            {cardF1["food_item"]}
                                        </Text>
                                        <Text style={styles.details} >
                                            {cardF1["cuisine"]} | {cardF1["food_meal"]} | {cardF1["food_deter"]}
                                        </Text>
                                    </View>
                                    }
                                    
                                </ImageBackground> 
                               </View>
                              
                            </TouchableWithoutFeedback>
                            
                        </CardItem>
                    </Card>
                    <Card style={{ borderRadius: 16,borderColor:"#2b2c35"}} >
                        <CardItem cardBody style={{ backgroundColor:'#2b2c35',borderRadius:16 }}>
                            <TouchableWithoutFeedback onPress={()=>{setPress2(!isPressed2)}}>
                               <View style={{ backgroundColor:'#2b2c35',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                    <ImageBackground
                                source={{uri: urlF2}}
                                style={styles.image}
                                imageStyle={{borderRadius:16}}
                                resizeMode="cover" 
                                >
                                    {isPressed2?
                                    <View style={styles.opacity}>
                                        <Text style={styles.info} >
                                            {cardF2["food_info"]}
                                        </Text>
                                    </View>
                                    :
                                    <View style={styles.imageDetail}>
                                        <Text style={styles.textHeading}>
                                            {cardF2["food_item"]}
                                        </Text>
                                        <Text style={styles.details} >
                                            {cardF2["cuisine"]} | {cardF2["food_meal"]} | {cardF2["food_deter"]}
                                        </Text>
                                    </View>
                                    }
                                    
                                </ImageBackground> 
                               </View>
                              
                            </TouchableWithoutFeedback>
                            
                        </CardItem>
                    </Card>
                    <Card style={{ borderRadius: 16,borderColor:"#2b2c35"}} >
                        <CardItem cardBody style={{ backgroundColor:'#2b2c35',borderRadius:16 }}>
                            <TouchableWithoutFeedback onPress={()=>{setPress3(!isPressed3)}}>
                               <View style={{ backgroundColor:'#2b2c35',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                                    <ImageBackground
                                source={{uri: urlF3}}
                                style={styles.image}
                                imageStyle={{borderRadius:16}}
                                resizeMode="cover" 
                                >
                                    {isPressed3?
                                    <View style={styles.opacity}>
                                        <Text style={styles.info} >
                                            {cardF3["food_info"]}
                                        </Text>
                                    </View>
                                    :
                                    <View style={styles.imageDetail}>
                                        <Text style={styles.textHeading}>
                                            {cardF3["food_item"]}
                                        </Text>
                                        <Text style={styles.details} >
                                            {cardF3["cuisine"]} | {cardF3["food_meal"]} | {cardF3["food_deter"]}
                                        </Text>
                                    </View>
                                    }
                                </ImageBackground> 
                               </View>
                            </TouchableWithoutFeedback>
                        </CardItem>
                    </Card>
            </Content>
        </Container>
    )
}
const styles=StyleSheet.create({
    image:{
        flex:1,
        height: Dimensions.get('window').height/2.1,
        width: Dimensions.get('window').width/1.01,
        borderRadius:16 ,
        justifyContent:'flex-end'
    },
    opacity: {
        borderRadius:16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
    },
    info:{
        color:'#f9efef',
        padding: 3,
        textAlign:"center",
        paddingBottom:5
    },
    imageDetail:{
        color:'#f9efef',
        flex: .23,
        backgroundColor: 'rgba( 0, 0, 0, 0.3 )',
        marginHorizontal:60,
        borderRadius:16,
    },
    textHeading:{
        fontWeight:"700",
        fontSize:20,
        textAlign:'center',
        color:'#f9efef',
        borderRadius:5,
        flexDirection:'column',
    },
    details:{
        fontWeight:"300",
        fontSize:13,
        textAlign:'center',
        textAlignVertical:'center',
        alignSelf:'center',
        color:'#2b2c35',
        paddingHorizontal:5,
        backgroundColor: '#f9efef',
        borderRadius:30,
        flexDirection:'column'
    },
})
    
