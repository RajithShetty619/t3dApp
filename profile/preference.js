import React, { useState,useEffect} from 'react'
import {Alert,AsyncStorage} from 'react-native'
import {Text,Container,Content,Body,CheckBox,ListItem, Button,Separator} from 'native-base';
import fire from '../fire'
import PreferVar from './preferVar'

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
      //   let [cardf1,setCard1]=useState({})
      //   let [cardf2,setCard2]=useState({})
      //   let [cardf3,setCard3]=useState({})
      //   const getpath=()=>{
      //     const getFood=()=>{
      //         const pref =prefer["food"]
      //         let arr = [];
      //             for (let key in pref) {
      //                 if (pref[key]) arr.push(key);
                          
      //             }
                  
      //          return arr[Math.floor(Math.random()*arr.length)]  
      //     } 
      //     const getDeter=()=>{
      //       const pref =prefer["food_deter"]
      //       let arr = [];
      //           for (let key in pref) {
      //               if (pref[key]) arr.push(key);     
      //           }
      //        return arr[Math.floor(Math.random()*arr.length)]  
      //     }
      //     const getFoodType=()=>{
      //     const pref =prefer["food_type"]
      //   let arr = [];
      //       for (let key in pref) {
      //           if (pref[key]) arr.push(key);     
      //       }
      //       return arr[Math.floor(Math.random()*arr.length)]
      //     }   
      //     let ran =Math.floor(Math.random()*10)
          
      //     return ('/0/food/0/'+getDeter()+'/0/'+getFoodType()+'/0/'+getFood()+'/0/data/'+ran+'/')
           
          
      // }

      //   useEffect(()=>{
      //       fire.database().ref()
      //       const interval = setInterval(() => {
      //               fire.database().ref().child(getpath())
      //                   .once("value",
      //               (snapshot)=>{
      //                   let item=snapshot.val()
      //                   console.log(item)
      //                   if(item!==null){
      //                   let array=[];
      //                   Object.
      //                   keys(item)
      //                   .forEach(i=>array.push(item[i]));
      //                   setCard1(array);
      //              }
                   
      //              console.log(item,"item")
      //              if(item!==null)
      //              { 
      //                   clearInterval(interval)
      //                   console.log("should clear")
      //                   console.log(card1)
      //              }
      //              else {
      //                  console.log("polling")
      //               }
      //             })
      //           }, 10)
      //          console.log("comingout")
      //        return ()=> clearInterval(interval)
      //          },[pass]);
      //   useEffect(()=>{
      //           fire.database().ref()
      //           const interval = setInterval(() => {
      //                   fire.database().ref().child(getpath())
      //                       .once("value",
      //                   (snapshot)=>{
      //                       let item=snapshot.val()
      //                       console.log(item)
      //                       if(item!==null){
      //                       let array=[];
      //                       Object.
      //                       keys(item)
      //                       .forEach(i=>array.push(item[i]));
      //                       setCard2(array);
      //                  }
                       
      //                  console.log(item,"item")
      //                  if(item!==null)
      //                  { 
      //                       clearInterval(interval)
      //                       console.log("should clear")
      //                       console.log(card1)
      //                  }
      //                  else {
      //                      console.log("polling")
      //                   }
      //                 })
      //               }, 10)
      //              console.log("comingout")
      //            return ()=> clearInterval(interval)
      //          },[pass]);
      //   useEffect(()=>{
      //       fire.database().ref()
      //       const interval = setInterval(() => {
      //               fire.database().ref().child(getpath())
      //                   .once("value",
      //               (snapshot)=>{
      //                   let item=snapshot.val()
      //                   console.log(item)
      //                   if(item!==null){
      //                   let array=[];
      //                   Object.
      //                   keys(item)
      //                   .forEach(i=>array.push(item[i]));
      //                   setCard3(array);
      //               }
                    
      //               console.log(item,"item")
      //               if(item!==null)
      //               { 
      //                   clearInterval(interval)
      //                   console.log("should clear")
      //                   console.log(card)
      //               }
      //               else {
      //                   console.log("polling")
      //               }
      //               })
      //           }, 10)
      //           console.log("comingout")
      //           return ()=> clearInterval(interval)
      //          },[pass]);
      //   const saveData=async(name,obj)=>{  
      //               await AsyncStorage.setItem(name,JSON.stringify(obj));  
      //              } 
      //   useEffect(() => {saveData("cardf1",cardf1);saveData("cardf2",cardf2);
      //                    saveData("cardf3",cardf3)}, [cardf1,cardf2,cardf3])
        


        return(
            <Container style={{ justifyContent:'center',flexDirection:'row'}}>
                <Content>
                    <Content>
                      <Separator bordered>
                        <Text style={{fontSize:12}}>Food Preference</Text>
                        </Separator>
                    <ListItem>
                        <CheckBox checked={prefer.food_deter.veg} 
                        onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food_deter:{
                            ...prevPrefer.food_deter,veg:!prefer.food_deter.veg
                          }
                          }))
                        if(prefer.food_deter.veg){setFoodDet(foodDet-1)} else {setFoodDet(foodDet+1)}
                        }}/>
                        <Body>
                            <Text style={{fontWeight:'bold'}}>Veg</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={prefer.food_deter.nonveg} 
                       onPress={()=>{
                        setPrefer((prevPrefer)=>({...prevPrefer,
                      food_deter:{
                        ...prevPrefer.food_deter,nonveg:!prefer.food_deter.nonveg
                      }
                      }))
                        if(prefer.food_deter.nonveg){setFoodDet(foodDet-1)} else {setFoodDet(foodDet+1)}
                        }}/>
                        <Body>
                            <Text style={{fontWeight:'bold'}}>Non-Veg</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={prefer.food_type.drinks} 
                         onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food_type:{
                            ...prevPrefer.food_type,drinks:!prefer.food_type.drinks
                          }
                          }))
                        if(prefer.food_type.drinks){setFoodClass(foodClass-1)} else {setFoodClass(foodClass+1)}
                        }} />
                        <Body>
                            <Text>Drinks</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={prefer.food_type.snacks} 
                        onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food_type:{
                            ...prevPrefer.food_type,snacks:!prefer.food_type.snacks
                          }
                          }))
                        if(prefer.food_type.snacks){setFoodClass(foodClass-1)} else {setFoodClass(foodClass+1)}
                        }} />
                        <Body>
                            <Text>Snacks</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={prefer.food_type.maincourse} 
                       onPress={()=>{
                        setPrefer((prevPrefer)=>({...prevPrefer,
                      food_type:{
                        ...prevPrefer.food_type,maincourse:!prefer.food_type.maincourse
                      }
                      }))
                        if(prefer.food_type.maincourse){setFoodClass(foodClass-1)} else {setFoodClass(foodClass+1)}
                        }}/>
                        <Body>
                            <Text>MainCourse</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={prefer.food_type.dessert} 
                        onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food_type:{
                            ...prevPrefer.food_type,dessert:!prefer.food_type.dessert
                          }
                          }))
                          
                        if(prefer.food_type.dessert){setFoodClass(foodClass-1)} else {setFoodClass(foodClass+1)}
                        }}/>
                        <Body>
                            <Text>Dessert</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={prefer.food.indian} 
                         onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,indian:!prefer.food.indian,
                          }
                          }))
                        if(prefer.food.indian){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}/>
                        <Body>
                            <Text>Indian</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={prefer.food.british} 
                         onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,british:!prefer.food.british,
                          }
                          }))
                        if(prefer.food.british){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}/>
                        <Body>
                            <Text>British</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={prefer.food.american} 
                       onPress={()=>{
                        setPrefer((prevPrefer)=>({...prevPrefer,
                      food:{
                        ...prevPrefer.food,american:!prefer.food.american,
                      }
                      }))
                        if(prefer.food.american){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}/>
                        <Body>
                            <Text>American</Text>
                        </Body>
                    </ListItem>
                    <ListItem>    
                        <CheckBox checked={prefer.food.spanish} 
                        onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,spanish:!prefer.food.spanish,
                          }
                          }))
                        if(prefer.food.spanish){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}/>
                        <Body>
                            <Text>Spanish</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={prefer.food.chinese} 
                        onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,chinese:!prefer.food.chinese,
                          }
                          }))
                        if(prefer.food.chinese){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}/>
                        <Body>
                            <Text>Chinese</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                             <CheckBox checked={prefer.food.french} 
                        onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,french:!prefer.food.french,
                          }
                          }))
                        if(prefer.food.french){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}/>
                        <Body>
                            <Text>French</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={prefer.food.mexican} 
                       onPress={()=>{
                        setPrefer((prevPrefer)=>({...prevPrefer,
                      food:{
                        ...prevPrefer.food,mexican:!prefer.food.mexican,
                      }
                      }))
                        if(prefer.food.mexican){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}/>
                        <Body>
                            <Text>Mexican</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={prefer.food.japanese} 
                         onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,japanese:!prefer.food.japanese,
                          }
                          }))
                        if(prefer.food.japanese){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}/>
                        <Body>
                            <Text>Japanese</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={prefer.food.italian} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          food:{
                            ...prevPrefer.food,italian:!prefer.food.italian,
                          }
                          }))
                        if(prefer.food.italian){setFoodtype(foodtype-1)} else {setFoodtype(foodtype+1)}
                        }}/>
                        <Body>
                            <Text>Italian</Text>
                        </Body>
                    </ListItem>
                      <Separator bordered>
                      <Text style={{fontSize:12}}>App Preferences</Text>
                        </Separator>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.booksandreference} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,booksandreference:!prefer.app_details.booksandreference,
                          }
                          }))
                        if(prefer.app_details.booksandreference){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>Books Reference</Text>
                        </Body>
                    </ListItem>
                        <ListItem>
                        <CheckBox checked={prefer.app_details.dating} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,dating:!prefer.app_details.dating,
                          }
                          }))
                        if(prefer.app_details.dating){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>Dating</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.education} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,education:!prefer.app_details.education,
                          }
                          }))
                        if(prefer.app_details.education){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>Education</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.entertainment} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,entertainment:!prefer.app_details.entertainment,
                          }
                          }))
                        if(prefer.app_details.entertainment){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>Entertainment</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.finance} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,finance:!prefer.app_details.finance,
                          }
                          }))
                        if(prefer.app_details.finance){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>Finance</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.fitness} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,fitness:!prefer.app_details.fitness,
                          }
                          }))
                        if(prefer.app_details.fitness){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>Fitness</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.game} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,game:!prefer.app_details.game,
                          }
                          }))
                        if(prefer.app_details.game){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>Game</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.lifestyle} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,lifestyle:!prefer.app_details.lifestyle,
                          }
                          }))
                        if(prefer.app_details.lifestyle){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>Life Style</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.music} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,music:!prefer.app_details.music,
                          }
                          }))
                        if(prefer.app_details.music){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>Music</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.news} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,news:!prefer.app_details.news,
                          }
                          }))
                        if(prefer.app_details.finance){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>News</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.productivity} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,productivity:!prefer.app_details.productivity,
                          }
                          }))
                        if(prefer.app_details.productivity){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>Productivity</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.socialmedia} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,socialmedia:!prefer.app_details.socialmedia,
                          }
                          }))
                        if(prefer.app_details.socialmedia){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>Social Media</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.app_details.travel} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          app_details:{
                            ...prevPrefer.app_details,travel:!prefer.app_details.travel,
                          }
                          }))
                        if(prefer.app_details.travel){setApp(app-1)} else {setApp(app+1)}
                        }}/>
                        <Body>
                            <Text>Travel</Text>
                        </Body>
                    </ListItem>
                      <Separator bordered>
                      <Text style={{fontSize:12}}>Topic Prefrences</Text>
                        </Separator>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.architecture} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,architecture:!prefer.topic_details.architecture,
                          }
                          }))
                        if(prefer.topic_details.architecture){setTopics(topics-1)} else {setTopics(topics+1)}
                        }}/>
                        <Body>
                            <Text>Architecture</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.automobile} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,automobile:!prefer.topic_details.automobile,
                          }
                          }))
                        if(prefer.topic_details.automobile){setTopics(topics-1)} else {setTopics(topics+1)}
                        }}/>
                        <Body>
                            <Text>Automobile</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.aviation} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,aviation:!prefer.topic_details.aviation,
                          }
                          }))
                        if(prefer.topic_details.aviation){setTopics(topics-1)} else {setTopics(topics+1)}
                        }}/>
                        <Body>
                            <Text>Aviation</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.famouspersonality} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,famouspersonality:!prefer.topic_details.famouspersonality,
                          }
                          }))
                        if(prefer.topic_details.famouspersonality){setTopics(topics-1)} else {setTopics(topics+1)}
                        }}/>
                        <Body>
                            <Text>Famous Personality</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.food} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,food:!prefer.topic_details.food,
                          }
                          }))
                        if(prefer.topic_details.food){setTopics(topics-1)} else {setTopics(topics+1)}
                        }}/>
                        <Body>
                            <Text>Food</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.general} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,general:!prefer.topic_details.general,
                          }
                          }))
                        if(prefer.topic_details.general){setTopics(topics-1)} else {setTopics(topics+1)}
                        }}/>
                        <Body>
                            <Text>General</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.health} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,health:!prefer.topic_details.health,
                          }
                          }))
                        if(prefer.topic_details.health){setTopics(topics-1)} else {setTopics(topics+1)}
                        }}/>
                        <Body>
                            <Text>Health</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.psychology} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,psychology:!prefer.topic_details.psychology,
                          }
                          }))
                        if(prefer.topic_details.psychology){setTopics(topics-1)} else {setTopics(topics+1)}
                        }}/>
                        <Body>
                            <Text>Psychology</Text>
                        </Body>
                    </ListItem>
                      <ListItem>
                        <CheckBox checked={prefer.topic_details.space} 
                       onPress={()=>{
                            setPrefer((prevPrefer)=>({...prevPrefer,
                          topic_details:{
                            ...prevPrefer.topic_details,space:!prefer.topic_details.space,
                          }
                          }))
                        if(prefer.topic_details.space){setTopics(topics-1)} else {setTopics(topics+1)}
                        }}/>
                        <Body>
                            <Text>Space</Text>
                        </Body>
                    </ListItem>
                    <Button onPress={()=>{if(check()){navigation.navigate("profileMain")
                                            setPass(true) }}}>
                        <Text>save</Text>
                    </Button>
                    </Content>
                </Content>
            </Container>
        )
    
}
