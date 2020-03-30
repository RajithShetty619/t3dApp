import React,{useEffect,useState} from 'react'
import {  StyleSheet,TouchableOpacity,Image ,Text} from 'react-native'
import {Card,CardItem,Container,Content,Body,Left} from 'native-base';
import firebase from 'firebase'
import fire from '../fire'

export default function personalTopicCard (){
    const ran=Math.floor(Math.random()*10+1)
  useEffect(()=>{
      fire.database().ref().child('/2/data/'+ran).once("value",
      (snapshot)=>{
        const item=snapshot.val()
        if(item){
          const array=[];
          Object.
          keys(item)
          .forEach(i=>array.push(item[i]));
          setDisplay(array);
        }
      }
      );
      firebase.storage().ref('/images/Screenshot (6).png').getDownloadURL().then(data=>setUrl(data))
  },[])
   const[display,setDisplay]=useState([])
    const [url,setUrl]=useState()

    
   
        return(
            <Container>
                <Content>
                     <Card style={{ borderRadius: 8 }}> 
                        <TouchableOpacity > 
                            <CardItem  cardBody style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8,flexDirection:'column' }}>
                                
                                    <Image source={{uri:url}}   style={{ flex:1,width: 400, height: 300 }} resizeMode="contain"  />
                                    <Text >{display[3]}</Text>
                            </CardItem>
                            <CardItem footer bordered>
                                    <Left> 
                                     <Text>{display[2]}</Text>
                                    </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ borderRadius: 8 }}> 
                        <TouchableOpacity > 
                            <CardItem  cardBody style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8,flexDirection:'column' }}>
                                
                                    <Image source={{uri:url}}   style={{ flex:1,width: 400, height: 300 }} resizeMode="contain"  />
                                    <Text >{display[3]}</Text>
                            </CardItem>
                            <CardItem footer bordered>
                                    <Left> 
                                     <Text>{display[2]}</Text>
                                    </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ borderRadius: 8 }}> 
                        <TouchableOpacity > 
                            <CardItem  cardBody style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8,flexDirection:'column' }}>
                                
                                    <Image source={{uri:url}}   style={{ flex:1,width: 400, height: 300 }} resizeMode="contain"  />
                                    <Text >{display[3]}</Text>
                            </CardItem>
                            <CardItem footer bordered>
                                    <Left> 
                                     <Text>{display[2]}</Text>
                                    </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                </Content>
            </Container>
        )
    
}