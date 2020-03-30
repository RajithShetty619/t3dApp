import React, { Component } from 'react'
import {  StyleSheet,TouchableOpacity,Image } from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,footer,Left} from 'native-base';
import {BackHandler} from 'react-native'
import {Alert} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
export default class personalMain extends Component {
   async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
          });
          this.setState({ isReady: true });
        this.handleAndroidBackButton(this.exitAlert)
      }  
    componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', true);
    }
    handleAndroidBackButton = callback => {
    BackHandler.addEventListener('hardwareBackPress', () => {
        callback();
        return true;
    });
    };
    exitAlert = () => {
    Alert.alert(
        'Confirm exit',
        'Do you want to quit the app?',
        [
        {text: 'CANCEL', style: 'cancel'},
        {text: 'OK', onPress: () => BackHandler.exitApp()}
        ]
    );
    };
    render() {
        return (
            <Container>
                <Content padder>
                    <Card style={{ borderRadius: 8 }}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('personalFoodCard')}} > 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                  	<Image source={{uri:''}} style={{height:400,width:250,flex:1}}/>
                                    <Text>food</Text>
                                </Body> 
                            </CardItem>
                            <CardItem footer>
                                    <Left> 
                                     <Text style={{fontWeight:'bold'}}>Food</Text>
                                    </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ borderRadius: 8 }}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('personalAppCard')}}>
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                  	<Image source={{uri: ''}} style={{height:400,width:250,flex:1}} />
                                    <Text>app</Text>
                                </Body>
                            </CardItem>
                          <CardItem>
                            	 <Left> 
                                     <Text style={{fontWeight:'bold'}}>App</Text>
                                </Left>
                          </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ borderRadius: 8 }}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('personalTopicCard')}}>
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                  	<Image source={{uri: ''}} style={{height:400,width:250,flex:1}}/>
                                    <Text>topic</Text>
                                </Body>
                        </CardItem>
                          <CardItem>
                            	 <Left> 
                                     <Text style={{fontWeight:'bold'}}>Topic</Text>
                                </Left>
                          </CardItem>
                        </TouchableOpacity>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({})
