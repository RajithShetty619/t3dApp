import React, { Component } from 'react'
import {  View,TouchableOpacity,Image} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body} from 'native-base';
export default class personalMain extends Component {

    render() {
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
                                        General Food
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
                                     General Topic
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
                                    General Topic
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
    
}
    



