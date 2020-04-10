import React, { useState,useEffect} from 'react'
import {Alert,AsyncStorage} from 'react-native'
import {Text,Container,Content,Body,CheckBox,ListItem, Button,Separator,View} from 'native-base';
import fire from '../fire'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function preferenceApp({navigation}) {
    const[pass,setPass]=useState(false)
    const[prefer,setPrefer]=useState({"app_details":{"booksandreference":false,"dating":false,"education":false,"entertainment":false,
    "finance":false,"fitness":false,"game":false,"lifestyle":false,
"music":false,"news":false,"productivity":false,"socialmedia":false,"travel":false}})
    const date = JSON.stringify(new Date().getDate());
        useEffect(()=>{
        async function Does(){ let myJSON = JSON.stringify(prefer);
            let authUser=fire.auth().currentUser
            await AsyncStorage.setItem("prefApp",myJSON)
        }
            Does();
        },[pass])

        const [app,setApp]=useState(0)
        const check=()=>{
            if(app<=4){
                console.log("appdetails")
    console.log(app)
          Alert.alert("choose atleast four app type")
          return false
    }
         else return true
    }
    const pathItems=(path)=>{
    if(path ==='/0/app_details/0/booksandreference') {return 4;}
    if(path==='/0/app_details/0/dating') {return 19;}
    if(path==='/0/app_details/0/education') {return 11;}
    if(path==='/0/app_details/0/entertainment') {return 12;}
    if(path==='/0/app_details/0/finance') {return 8;}
    if(path==='/0/app_details/0/fitness') {return 13;}
    if(path==='/0/app_details/0/game') {return 12;}
    if(path==='/0/app_details/0/lifestyle') {return 4;}
    if(path==='/0/app_details/0/music') {return 11;}
      if(path==='/0/app_details/0/news') {return 11;}
      if(path==='/0/app_details/0/productivity') {return 7;}
      if(path==='/0/app_details/0/socialmedia') {return 24;}
      if(path==='/0/app_details/0/travel') {return 12;}
      }
    const getpath=()=>{
        const getTopic=()=>{
            const pref =prefer["app_details"]
            let arr = [];
                for (let key in pref) {
                    if (pref[key]) arr.push(key);
                        
                } 
             return arr[Math.floor(Math.random()*arr.length)]  
            }
            
            let path= '/0/app_details/0/'+getTopic()
            console.log(pathItems(path),"pathitem")
            let ran=Math.floor(Math.random()* pathItems(path))
            console.log(ran)
            return '/0/app_details/0/'+getTopic()+'/0/data/'+ ran;
        } 
    const isValid=(path)=>{
          const interval=setInterval(()=>{
            async function Does(){ console.log(getpath(),"getpath")
            await  fire.database().ref().child(getpath())
                  .once("value",
              (snapshot)=>{
                  let item=snapshot.val()
                  if(item!==null){
                  let array=[];
                  Object.
                  keys(item)
                  .forEach(i=>array.push(item[i]));  
                  if(item!==null)
                  {
                    _storeData(item,path); 
                    clearInterval(interval)
                  } 
                  }
               
            })
           }
           Does()
          },1000)
         
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
        <Container style={{ justifyContent:'center',backgroundColor:'black',paddingTop:24}}>
             <Content>
                    <Content>
                      <Separator bordered>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={{fontSize:24}}>App Preferences</Text>
                        </View>
                        </Separator>
                        <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,booksandreference:!prefer.app_details.booksandreference,
                          }
                          }))
                        if(prefer.app_details.booksandreference){setApp(app-1)} else {setApp(app+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.booksandreference} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Book & Reference</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,dating:!prefer.app_details.dating,
                          }
                          }))
                        if(prefer.app_details.dating){setApp(app-1)} else {setApp(app+1)}
                        }}>
                        <ListItem>
                        <CheckBox checked={prefer.app_details.dating}/>
                        <Body>
                            <Text style={{color:'#ffffff'}}>Dating</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,education:!prefer.app_details.education,
                          }
                          }))
                        if(prefer.app_details.education){setApp(app-1)} else {setApp(app+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.education} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Education</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,entertainment:!prefer.app_details.entertainment,
                          }
                          }))
                        if(prefer.app_details.entertainment){setApp(app-1)} else {setApp(app+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.entertainment} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Entertainment</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,finance:!prefer.app_details.finance,
                          }
                          }))
                        if(prefer.app_details.finance){setApp(app-1)} else {setApp(app+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.finance} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Finance</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,fitness:!prefer.app_details.fitness,
                          }
                          }))
                        if(prefer.app_details.fitness){setApp(app-1)} else {setApp(app+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.fitness} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Fitness</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity    onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,game:!prefer.app_details.game,
                          }
                          }))
                        if(prefer.app_details.game){setApp(app-1)} else {setApp(app+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.game} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Game</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity    onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,lifestyle:!prefer.app_details.lifestyle,
                          }
                          }))
                        if(prefer.app_details.lifestyle){setApp(app-1)} else {setApp(app+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.lifestyle} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>LifeStyle</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,music:!prefer.app_details.music,
                          }
                          }))
                        if(prefer.app_details.music){setApp(app-1)} else {setApp(app+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.music} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Music</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,news:!prefer.app_details.news,
                          }
                          }))
                        if(prefer.app_details.finance){setApp(app-1)} else {setApp(app+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.news} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>News</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,productivity:!prefer.app_details.productivity,
                          }
                          }))
                        if(prefer.app_details.productivity){setApp(app-1)} else {setApp(app+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.productivity} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Productivity</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity >
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,socialmedia:!prefer.app_details.socialmedia,
                          }
                          }))
                        if(prefer.app_details.socialmedia){setApp(app-1)} else {setApp(app+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.socialmedia} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Social Media</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,travel:!prefer.app_details.travel,
                          }
                          }))
                        if(prefer.app_details.travel){setApp(app-1)} else {setApp(app+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.travel} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Travel</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Button transparent onPress={()=>{if(check()){navigation.navigate("profileMain")
                                            setPass(true) 
                                            isValid("appData0")
                                            isValid("appData1")
                                            isValid("appData2")
                                            _storeData(date,"date")
                                            }}}>
                      <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={{color:'#00BFFF'}}>SAVE</Text>
                        </View>
                    </Button>
                    </TouchableOpacity>
                    </Content>
                </Content>
            </Container>
        )
    
}