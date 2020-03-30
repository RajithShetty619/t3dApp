import React from 'react'
import {  StyleSheet,TouchableOpacity } from 'react-native'
import {Card,CardItem,Text,Container,Content,Image,Body,footer,Left} from 'native-base';


export default class genRecomTopicCard extends React.Component{
    render(){
        return(
            <Container>
                <Content>
                     <Card style={{ borderRadius: 8 }}> 
                        <TouchableOpacity > 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                    <Text>pmain</Text>
                                </Body> 
                            </CardItem>
                            <CardItem footer>
                                    <Left> 
                                     <Text>food</Text>
                                    </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ borderRadius: 8 }}> 
                        <TouchableOpacity>
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                    <Text>app</Text>
                                </Body>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ borderRadius: 8 }}>
                        <TouchableOpacity>
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                    <Text>topic</Text>
                                </Body>
                        </CardItem>
                        </TouchableOpacity>
                    </Card>
                </Content>
            </Container>
        )
    }
}