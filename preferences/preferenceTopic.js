import React, { useState,useEffect} from 'react'
import {Alert,AsyncStorage} from 'react-native'
import {Text,Container,Content,Body,CheckBox,ListItem, Button,Separator, View} from 'native-base';
import fire from '../fire'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function preferenceTopic({navigation,route}) {
    const {id}=route.params
    const[prefer,setPrefer]=useState({"topic_details":{"architecture":false,"automobile":false,"aviation":false,"famouspersonality":false,
    "food":false,"general":false,"health":false,"psychology":false,"space":false}})
    const date = JSON.stringify(new Date().getDate());
     
        useEffect(()=>{
          async function Does(){ 
            let pref=await AsyncStorage.getItem("prefTopic")
             
            if(JSON.parse(pref)!==null){
            setPrefer(JSON.parse(pref))
            }
          }
          Does();
        },[])
            
        async function Set(){ 
          const authUser=fire.auth().currentUser;
          fire.database().ref('/users/'+authUser.uid+'/preference/preferenceTopic').set(JSON.stringify(prefer))
          let myJSON = JSON.stringify(prefer);
          await AsyncStorage.setItem("prefTopic",myJSON) 
      
        }
            
      
       
        const check=()=>{
            let count=0
            for(let i in prefer["topic_details"])
            {
              if(prefer["topic_details"][i]){count=count+1}
            }
            if(count<=4){
                console.log("topicdetails")
                    console.log(count)
                      Alert.alert("Choose atleast five topic type")
                      return false
              }
                else return true
            }
            function pathItems(path){
                if(path ==='/0/topic_details/0/architecture') {return 0;}
                if(path==='/0/topic_details/0/automobile') {return 9;}
                if(path==='/0/topic_details/0/aviation') {return 4;}
                if(path==='/0/topic_details/0/famouspersonality') {return 0;}
                if(path==='/0/topic_details/0/food') {return 3;} 
                if(path==='/0/topic_details/0/general') {return 8;}
                if(path==='/0/topic_details/0/health') {return 9;}
                if(path==='/0/topic_details/0/psychology') {return 9;}
                if(path==='/0/topic_details/0/space') {return 8;}
              }
            const getpath=()=>{
                const getTopic=()=>{
                    const pref =prefer["topic_details"]
                    let arr = [];
                        for (let key in pref) {
                            if (pref[key]) arr.push(key);
                                
                        } 
                     return arr[Math.floor(Math.random()*arr.length)]  
                    }
                    
                    let path= '/0/topic_details/0/'+getTopic()
                    console.log(pathItems(path),"pathitem")
                    let ran=Math.floor(Math.random()* pathItems(path))
                    console.log(ran)
                    return '/0/topic_details/0/'+getTopic()+'/0/data/'+ ran;
                } 
            const isValid=(path)=>{    
              async function inter(){
                await  fire.database().ref().child(await getpath())
                                 .once("value",
                             (snapshot)=>{
                                 let item=snapshot.val()
                                 if(item!==null)
                                  { 
                                  _storeData(item,path); 
                                  
                                  }
                                  else{
                                    setTimeout(inter,10)
                                  }
                       })
              }      
              setTimeout(inter,10)
           }  
           const _storeData = async (obj,path) => {
            try {
              
              console.log("storing",obj)
              await AsyncStorage.setItem(path,JSON.stringify(obj) );
            } catch (error) {
              console.log(error)
            }
          };  
           
    
            return(
                <Container style={{ justifyContent:'center',backgroundColor:'#000000',paddingTop:24}}>
                    <Content>
                        <Content>
                       
                        <ListItem itemDivider>
                          <View style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                          <Text style={{fontSize:24,}}>Topic Prefrences</Text>
                          </View>
                        </ListItem>  
                        <TouchableOpacity  onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,architecture:!prefer.topic_details.architecture,
                          }
                          }))
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.architecture} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Architecture</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,automobile:!prefer.topic_details.automobile,
                          }
                          })) 
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.automobile} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Automobile</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,aviation:!prefer.topic_details.aviation,
                          }
                          })) 
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.aviation} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Aviation</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,famouspersonality:!prefer.topic_details.famouspersonality,
                          }
                          })) 
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.famouspersonality} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Famous Personality</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,food:!prefer.topic_details.food,
                          }
                          })) 
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.food} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Food</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,general:!prefer.topic_details.general,
                          }
                          })) 
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.general} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>General</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,health:!prefer.topic_details.health,
                          }
                          })) 
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.health} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Health</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,psychology:!prefer.topic_details.psychology,
                          }
                          })) 
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.psychology} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Psychology</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity    onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,space:!prefer.topic_details.space,
                          }
                          })) 
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.space} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Space</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <Button transparent onPress={async()=>{
                                        console.log("checkout")
                                        if(check()){
                                            console.log("iphone press")
                                            navigation.navigate(id,{id:'main'})
                                            await Set();
                                            isValid("topicData0") 
                                            isValid("topicData1") 
                                            isValid("topicData2")
                                            _storeData(date,"date") }}}>
                      <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={{color:'#00BFFF'}}>SAVE</Text>
                        </View>
                    </Button>
                    </Content>
                </Content>
            </Container>
        )
    
}