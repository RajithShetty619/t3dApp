import React, { Component, useEffect } from 'react'
import {  StyleSheet,TouchableOpacity,Image,AsyncStorage} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,footer,Left} from 'native-base';
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
        <Container>
            <Content >
                <Card style={{ borderRadius: 8 }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('personalFoodCard')}} > 
                        <CardItem style={{ backgroundColor:'black',borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                            <Body>
                                  <Image source={require('../assets/img-5708.png')} style={{height:500,width:310,flex:1}}/>
                                
                            </Body> 
                        </CardItem>
                        <CardItem footer>
                                <Left> 
                                 <Text style={{fontWeight:'bold'}}>Personalized Food </Text>
                                </Left>
                        </CardItem>
                    </TouchableOpacity>
                </Card>
                <Card style={{ borderRadius: 8 }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('personalAppCard')}}>
                        <CardItem style={{  backgroundColor:'black',borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                            <Body>
                                  <Image source={require('../assets/img-5710.png')} style={{height:200,width:300,flexDirection:'row'}} />
                                
                            </Body>
                        </CardItem>
                      <CardItem>
                             <Left> 
                                 <Text style={{fontWeight:'bold'}}>Personalized App</Text>
                            </Left>
                      </CardItem>
                    </TouchableOpacity>
                </Card>
                <Card style={{ borderRadius: 8 }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('personalTopicCard')}}>
                        <CardItem style={{ backgroundColor:'black', borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                            <Body>
                                  <Image source={require('../assets/img-5709.png')} style={{height:200,width:300,flexDirection:'row'}} resizeMode="contain"/>
                                
                            </Body>
                    </CardItem>
                      <CardItem>
                             <Left> 
                                 <Text style={{fontWeight:'bold'}}>Personalized Topic</Text>
                            </Left>
                      </CardItem>
                    </TouchableOpacity>
                </Card>
            </Content>
        </Container>
    )
}
    



