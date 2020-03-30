
import React, { Component } from 'react';
import { StyleSheet,View,Image,TouchableOpacity,} from 'react-native';
import {Card,CardItem,Text,Container,Content,Body,footer,Left} from 'native-base';

export default class profileMain extends Component {

  render() {
    return (
      <Container>
      
          <View style={styles.header}>
            <View style={styles.headerContent}>
                
                <Text style={styles.name}>John Doe </Text>
                <Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
                
            </View>
          </View>
        <Content style={{backgroundColor:'black'}}>
          <View style={styles.body}>
            <View style={styles.item}>
              
              <View style={styles.infoContent}>
                 <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('preference')}>
                <Text>Preferences</Text> 
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.item}>
            
              <View style={styles.infoContent}>
                <Text style={styles.info}>text</Text>
              </View>
            </View>
          </View>
     </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#F0FFFF",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:100,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#000000",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  
  },
 
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});

    
