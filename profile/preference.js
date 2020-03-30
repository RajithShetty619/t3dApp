import React, { useState,useEffect} from 'react'
import {Alert,AsyncStorage} from 'react-native'
import {Text,Container,Content,Body,CheckBox,ListItem, Button,Separator, Header, View} from 'native-base';
import fire from '../fire'
import PreferVar from './preferVar'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function preference({navigation}) {
    const[pass,setPass]=useState(false)
    const[prefer,setPrefer]=useState(PreferVar())

        useEffect(()=>{
            let myJSON = JSON.stringify(prefer);
            let authUser=fire.auth().currentUser
            fire.database().ref('/users/').child(authUser.uid+'/preference/').set(myJSON)
        },[pass])

        const [foodtype, setFoodtype] = useState(0)
        const [foodDet,setFoodDet]=useState(0)
        const [foodClass,setFoodClass]=useState(0)
        const [app,setApp]=useState(0)
        const [topics,setTopics]=useState(0)
        const check=()=>{
            if(foodtype<=3){
                console.log("cusine")
                console.log(foodtype)
                  Alert.alert("choose more food cusines")
                  return false
            }
            if(foodDet<=0){
                console.log("veg-nonveg")
                console.log(foodDet)
                  Alert.alert("choose non-veg or veg")
                  return false
            }
            if(foodClass<=1){
                console.log("snacks")
                console.log(foodClass)
                  Alert.alert("choose atleast two food type")
                  return false
            }
          	if(app<=5){
						console.log("appdetails")
            console.log(app)
                  Alert.alert("choose atleast five app type")
                  return false
            }
          if(topics<=4){
            console.log("topicdetails")
                console.log(topics)
                  Alert.alert("choose atleast four topic type")
                  return false
          }
            else return true
        }
     

        return(
            <Container style={{ justifyContent:'center',backgroundColor:'black',paddingTop:24}}>
              {/* <View style={{}}>
              <Header transparent />

              </View> */}
                <Content>
                    <Content>
                      <Separator bordered>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Text style={{fontSize:24}}>Food Preference</Text>
                        </View>
                        </Separator>
                        <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food_deter:{
                            ...prevPrefer.food_deter,veg:!prefer.food_deter.veg
                          }
                          }))
                        if(prefer.food_deter.veg){setFoodDet(foodDet-1)} else {setFoodDet(foodDet+1)}
                        }}>
                    <ListItem> 
                        <CheckBox checked={prefer.food_deter.veg}/>
                        <Body>
                            <Text style={{fontWeight:'bold' ,color:'#ffffff'}}>Veg</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        setPrefer((prevPrefer)=>({...prevPrefer,
                      food_deter:{
                        ...prevPrefer.food_deter,nonveg:!prefer.food_deter.nonveg
                      }
                      }))
                        if(prefer.food_deter.nonveg){setFoodDet(foodDet-1)} else {setFoodDet(foodDet+1)}
                        }}>
                    <ListItem>
                        <CheckBox checked={prefer.food_deter.nonveg}/>
                        <Body>
                            <Text style={{fontWeight:'bold' ,color:'#ffffff'}}>Non-Veg</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food_type:{
                            ...prevPrefer.food_type,drinks:!prefer.food_type.drinks
                          }
                          }))
                        if(prefer.food_type.drinks){setFoodClass(foodClass-1)} else {setFoodClass(foodClass+1)}
                        }} >
                    <ListItem>
                        <CheckBox checked={prefer.food_type.drinks} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Drinks</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food_type:{
                            ...prevPrefer.food_type,snacks:!prefer.food_type.snacks
                          }
                          }))
                        if(prefer.food_type.snacks){setFoodClass(foodClass-1)} else {setFoodClass(foodClass+1)}
                        }} >
                    <ListItem>
                        <CheckBox checked={prefer.food_type.snacks} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Snacks</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{
                        setPrefer((prevPrefer)=>({...prevPrefer,
                      food_type:{
                        ...prevPrefer.food_type,maincourse:!prefer.food_type.maincourse
                      }
                      }))
                        if(prefer.food_type.maincourse){setFoodClass(foodClass-1)} else {setFoodClass(foodClass+1)}
                        }}>
                    <ListItem>
                        <CheckBox checked={prefer.food_type.maincourse} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>MainCourse</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food_type:{
                            ...prevPrefer.food_type,dessert:!prefer.food_type.dessert
                          }
                          }))
                          
                        if(prefer.food_type.dessert){setFoodClass(foodClass-1)} else {setFoodClass(foodClass+1)}
                        }}>
                    <ListItem>
                        <CheckBox checked={prefer.food_type.dessert} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Dessert</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,indian:!prefer.food.indian,
                          }
                          }))
                        if(prefer.food.indian){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}>
                    <ListItem>
                        <CheckBox checked={prefer.food.indian} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Indian</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,british:!prefer.food.british,
                          }
                          }))
                        if(prefer.food.british){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}>
                    <ListItem>
                        <CheckBox checked={prefer.food.british} />
                        <Body>
                            <Text  style={{color:'#ffffff'}}>British</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{
                        setPrefer((prevPrefer)=>({...prevPrefer,
                      food:{
                        ...prevPrefer.food,american:!prefer.food.american,
                      }
                      }))
                        if(prefer.food.american){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}>
                    <ListItem>
                        <CheckBox checked={prefer.food.american} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>American</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,spanish:!prefer.food.spanish,
                          }
                          }))
                        if(prefer.food.spanish){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}>
                    <ListItem>    
                        <CheckBox checked={prefer.food.spanish} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Spanish</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,chinese:!prefer.food.chinese,
                          }
                          }))
                        if(prefer.food.chinese){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}>
                    <ListItem>
                        <CheckBox checked={prefer.food.chinese} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Chinese</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,french:!prefer.food.french,
                          }
                          }))
                        if(prefer.food.french){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}>
                    <ListItem>
                             <CheckBox checked={prefer.food.french} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>French</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{
                        setPrefer((prevPrefer)=>({...prevPrefer,
                      food:{
                        ...prevPrefer.food,mexican:!prefer.food.mexican,
                      }
                      }))
                        if(prefer.food.mexican){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}>
                    <ListItem>
                        <CheckBox checked={prefer.food.mexican} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Mexican</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,japanese:!prefer.food.japanese,
                          }
                          }))
                        if(prefer.food.japanese){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}>
                    <ListItem>
                        <CheckBox checked={prefer.food.japanese} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Japanese</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,italian:!prefer.food.italian,
                          }
                          }))
                        if(prefer.food.italian){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}>
                    <ListItem>
                        <CheckBox checked={prefer.food.italian} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Italian</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                      <Separator bordered>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                      <Text style={{fontSize:20}}>App Preferences</Text>
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
                      <Separator bordered>
                      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                      <Text style={{fontSize:20}}>Topic Prefrences</Text>
                      </View>
                        </Separator>
                        <TouchableOpacity  onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,architecture:!prefer.topic_details.architecture,
                          }
                          }))
                        if(prefer.topic_details.architecture){setTopics(topics-1)} else {setTopics(topics+1)}
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
                        if(prefer.topic_details.automobile){setTopics(topics-1)} else {setTopics(topics+1)}
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
                        if(prefer.topic_details.aviation){setTopics(topics-1)} else {setTopics(topics+1)}
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
                        if(prefer.topic_details.famouspersonality){setTopics(topics-1)} else {setTopics(topics+1)}
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
                        if(prefer.topic_details.food){setTopics(topics-1)} else {setTopics(topics+1)}
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
                        if(prefer.topic_details.general){setTopics(topics-1)} else {setTopics(topics+1)}
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
                        if(prefer.topic_details.health){setTopics(topics-1)} else {setTopics(topics+1)}
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
                        if(prefer.topic_details.psychology){setTopics(topics-1)} else {setTopics(topics+1)}
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
                        if(prefer.topic_details.space){setTopics(topics-1)} else {setTopics(topics+1)}
                        }}>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.space} />
                        <Body>
                            <Text style={{color:'#ffffff'}}>Space</Text>
                        </Body>
                    </ListItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Button transparent onPress={()=>{if(check()){navigation.navigate("profileMain")
                                            setPass(true) }}}>
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

 
            /*
            sign out 
            review this app
            share this app 
            send feedback 
            privacy policy 
            */
    
