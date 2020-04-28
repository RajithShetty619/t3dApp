import React, {  useEffect,useState } from 'react'
import {  View,Image,AsyncStorage,BackHandler,Alert,Dimensions,StatusBar} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,} from 'native-base';
import {useFocusEffect} from '@react-navigation/native'
import fire from '../fire'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import IsUptoDate from './IsUptoDate'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function personalMain({navigation}) {
    let [cardF1,setCardF1]=useState({"cuisine":"","food_deter":"veg","food_info":"","food_item":"","food_meal":"","food_pic":"","sr":""})
    let [urlF1,setUrlF1]=useState('../assets/loading.png')
    let [cardA1,setCardA1]=useState({"app_info":"","app_name":"","app_pic":"","category":"","sr":""})
    let [urlA1,setUrlA1]=useState('../assets/loading.png')
    let [cardT1,setCardT1]=useState({"category":"","sr":"","topic_info":"","topic_name":"","topic_pic":""})
    let [urlT1,setUrlT1]=useState('../assets/loading.png')
    const _retrieveData = async (path) => {
        try {
          const value = await AsyncStorage.getItem(path);
          if (value !== null) {
            return JSON.parse(value)
          }
        } catch (error) {
          console.log(error)
        }
      };
      
   
    useFocusEffect(
        React.useCallback(()=>{
                handleAndroidBackButton(exitAlert);
                async function Does(){
                  let  pref= await _retrieveData("prefApp")
                    if(JSON.stringify(pref))
                    {
                    await IsUptoDate().then(async()=>{
                   
                    const inter=async()=>{   
                      let  val1= await _retrieveData("foodData0")
                      let  val2= await _retrieveData("appData0")
                      let  val3= await _retrieveData("topicData0")
                      if(val1&&val2&&val3)
                      {  
                        setCardF1(val1)
                        if(val1) {await fire.storage().ref('/food/'+val1["food_pic"]).getDownloadURL().then(data=>setUrlF1(data))}

                        
                        setCardA1(val2)
                        if(val1) {await fire.storage().ref('/App/'+val2["app_pic"]).getDownloadURL().then(data=>setUrlA1(data))}
                
                      
                        setCardT1(val3)
                        if(val1) {await fire.storage().ref('/topics/'+val3["topic_pic"]).getDownloadURL().then(data=>setUrlT1(data))}
                
                        await Font.loadAsync({
                                        Roboto: require('native-base/Fonts/Roboto.ttf'),
                                        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                                        ...Ionicons.font,
                                      });
                        }
                        else{
                          setTimeout(inter,1000)
                        }
                      }
                    await inter();
                  })
                }
                   else
                    {
                      Alert.alert(
                        'Preferences not set',
                        'Please,set preference.',
                        [
                          {text: 'OK', onPress: () => navigation.navigate("Auth",{screen:'preference',params:{id:"preferenceTopic"}})}
                        ]
                      );
                    }
                  }
                  Does();
                
            return()=>{
                BackHandler.removeEventListener('hardwareBackPress', true);
            }    
        },[])
  );
    const handleAndroidBackButton = callback => {
        BackHandler.addEventListener('hardwareBackPress', () => {
          callback();
          return true;
        });
      };
    const  exitAlert = () => {
        Alert.alert(
          'Confirm exit',
          'Do you want to quit the app?',
          [
            {text: 'CANCEL', style: 'cancel'},
            {text: 'OK', onPress: () => BackHandler.exitApp()}
          ]
        );
      };
      
    return (
        <Container style={{backgroundColor:'#000000', paddingTop:15,flex:1}}>
            <Content >
            <StatusBar translucent backgroundColor="transparent" />

            <View style={{paddingTop:20}} >
            <TouchableWithoutFeedback  onPress={()=>{
                    navigation.navigate('personalFoodCard',{cardF1,urlF1})
                    }}>
                    <Card style={{ borderRadius: 16,borderColor:"#000000"}} >
                        <CardItem cardBody style={{ backgroundColor:'#FFFFFF',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Image source={{uri:urlF1}} style={{height: 550, width: Dimensions.get('window').width, flex: 1,borderRadius:10}} 
                            resizeMode="stretch" />
                        </CardItem>
                        <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Body>
                            <Text style={{fontWeight:'bold'}}>
                                 Food for you
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{paddingTop:20}}>
                <TouchableWithoutFeedback onPress={()=>{navigation.navigate('personalTopicCard',{cardT1,urlT1})}}>
                    <Card style={{ borderRadius: 16,borderTopLeftRadius: 30, borderTopRightRadius: 30,borderColor:"#000000"}} >
                        <CardItem cardBody style={{ backgroundColor:'#FFFFFF',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Image source={{uri:urlT1}} style={{height: 350, width:Dimensions.get('window').width, flex: 1,borderRadius:13}} 
                            resizeMode="stretch" />
                        </CardItem>
                        <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Body>
                            <Text style={{fontWeight:'bold'}}>
                                Do you know?
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{paddingTop:20}} >
            <TouchableWithoutFeedback onPress={()=>{navigation.navigate('personalAppCard',{cardA1,urlA1})}}>
                    <Card style={{ borderRadius: 16,borderColor:"#000000"}} >
                        <CardItem cardBody style={{ backgroundColor:'#FFFFFF',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Image source={{uri:urlA1}} style={{height: 300, width: Dimensions.get('window').width, flex: 1,borderRadius:13}} 
                            resizeMode="stretch" />
                        </CardItem>
                        <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Body>
                            <Text style={{fontWeight:'bold'}}>
                                Apps for you
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    </TouchableWithoutFeedback>
                </View>
            </Content>
        </Container>
    )
}
    



