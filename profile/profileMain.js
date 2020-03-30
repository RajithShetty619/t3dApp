import React, { Component } from 'react'
import {  StyleSheet,TouchableOpacity } from 'react-native'
import { Container,Text, Header, Title, Content, Button, Left, Right, Body, Icon, Card, CardItem, Item,Input, } from 'native-base';
export default class personalMain extends Component {
    render() {
        return(
        <Container style={{backgroundColor:'coral'}}>
      
      <Header transparent >
        <Body>
          <Text>Profile</Text>
        </Body>
      </Header>
      
    <Content padder>
        <Card transparent>
          <CardItem >
              <Item>
                <Input placeholder="textarea"/>
              </Item>
          </CardItem>
          <CardItem>
            <Body>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('preference')}> 
               <Text>preference</Text>
            </TouchableOpacity>
            </Body>
          </CardItem>  
        </Card>
    </Content>
   </Container>
    );
  }
}

            /*
            sign out 
            review this app
            share this app 
            send feedback 
            privacy policy 
            */
    
