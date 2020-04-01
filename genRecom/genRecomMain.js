import React, { Component } from 'react'
import {  StyleSheet,TouchableOpacity,Image} from 'react-native'
import {Card,CardItem,Text,Container,Content,Body,footer,Left} from 'native-base';
export default class personalMain extends Component {

    render() {
         return (
            <Container>
                <Content>
                    <Card style={{backgroundColor:'#777',borderRadius: 8 }}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('genRecomFoodCard')}} > 
                            <CardItem style={{ backgroundColor:'black',borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                  <Image source={require('../assets/img-5708.png')} style={{height:500,width:330,}}/> 
                                    <Text style={{fontWeight:'bold',color:'#FFFFFF'}}>General Food</Text>
                                </Body> 
                            </CardItem>
                            
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ backgroundColor:'#777', borderRadius: 8 }}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('genRecomAppCard')}}>
                            <CardItem style={{ backgroundColor:'black',borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                  <Image source={require('../assets/img-5710.png')} style={{height:420,width:300,flex:1}}/>
                                    <Text style={{fontWeight:'bold',color:'coral'}}>General App</Text>
                                </Body>
                            </CardItem>
                            
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ backgroundColor:'black', borderRadius: 8 }}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('genRecomTopicCard')}}>
                            <CardItem style={{backgroundColor:'black', borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                  <Image source={require('../assets/img-5709.png')} style={{height:200,width:330,flexDirection:'row'}}/>
                                    <Text style={{fontWeight:'bold',color:'coral'}}>General Topic</Text>
                                </Body>
                        </CardItem>
                            
                        </TouchableOpacity>
                    </Card>
                </Content>
            </Container>
        )
    }
}
    


const styles = StyleSheet.create({})
