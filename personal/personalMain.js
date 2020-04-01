import React, {  useEffect } from 'react'
import {  View,TouchableOpacity,Image,} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,} from 'native-base';
import {BackHandler} from 'react-native'
import {Alert} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import IsUptoDate from './IsUptoDate'

export default function personalMain({navigation}) {


    useEffect(()=>{
       async function Does(){
        await Font.loadAsync({
                        Roboto: require('native-base/Fonts/Roboto.ttf'),
                        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                        ...Ionicons.font,
                      });
        await IsUptoDate()
        handleAndroidBackButton(exitAlert)
        }
        Does();
        return()=>{BackHandler.removeEventListener('hardwareBackPress', true); }
    },[])

   const handleAndroidBackButton = callback => {
    BackHandler.addEventListener('hardwareBackPress', () => {
        callback();
        return true;
    });
    };
    const exitAlert = () => {
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
        <Container style={{backgroundColor:'black', paddingTop:15,flex:1}}>
            <Content >
            <View >
            <TouchableOpacity onPress={()=>{navigation.navigate('personalFoodCard')}}>
                    <Card style={{ borderRadius: 16,borderColor:"black"}} >
                        <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Image source={require('../assets/img-5708.png')} style={{height: 500, width: null, flex: 1,borderRadius:16}} 
                            resizeMode="cover" />
                        </CardItem>
                        <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Body>
                            <Text style={{fontWeight:'bold'}}>
                                Personalized Food
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    </TouchableOpacity>
                </View>
                <View >
            <TouchableOpacity onPress={()=>{navigation.navigate('personalTopicCard')}}>
                    <Card style={{ borderRadius: 16,borderColor:"black"}} >
                        <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Image source={require('../assets/img-5710.png')} style={{height: 500, width: null, flex: 1,borderRadius:16}} 
                            resizeMode="cover" />
                        </CardItem>
                        <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Body>
                            <Text style={{fontWeight:'bold'}}>
                                Personalized Topic
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    </TouchableOpacity>
                </View>
                <View >
                <TouchableOpacity onPress={()=>{navigation.navigate('personalTopicCard')}}>
                    <Card style={{ borderRadius: 16,borderColor:"black"}} >
                        <CardItem cardBody style={{ backgroundColor:'black',borderTopLeftRadius: 16, borderTopRightRadius: 16,
                                                    borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Image source={require('../assets/img-5709.png')} style={{height: 200, width: null, flex: 1,borderRadius:16}} 
                            resizeMode="cover" />
                        </CardItem>
                        <CardItem style={{ borderBottomRightRadius:16,borderBottomLeftRadius:16 }}>
                            <Body>
                            <Text style={{fontWeight:'bold'}}>
                                Personalized Topic
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
    )
}
    



