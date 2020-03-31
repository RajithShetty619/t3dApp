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
                            <CardItem style={{ backgroundColor:'#777',borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                  <Image source={{uri:''}} style={{height:400,width:250,flex:1}}/> 
                                    <Text style={{fontWeight:'bold',color:'coral'}}>Food</Text>
                                </Body> 
                            </CardItem>
                            <CardItem footer>
                                    <Left> 
                                     <Text style={{fontWeight:'bold'}}>Food</Text>
                                    </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ card:{backgroundColor:'black'}, borderRadius: 8 }}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('genRecomAppCard')}}>
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                  <Image source={{uri:''}} style={{height:400,width:250,flex:1}}/>
                                    <Text style={{fontWeight:'bold'}}>app</Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                    <Left> 
                                     <Text style={{fontWeight:'bold'}}>App</Text>
                                    </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ card:{backgroundColor:'black'}, borderRadius: 8 }}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('genRecomTopicCard')}}>
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                  <Image source={{uri:''}} style={{height:400,width:250,flex:1}}/>
                                    <Text style={{fontWeight:'bold'}}>topic</Text>
                                </Body>
                        </CardItem>
                            <CardItem footer>
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
