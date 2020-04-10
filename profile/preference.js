import React, { useState,useEffect} from 'react'
import {Alert,AsyncStorage} from 'react-native'
import {Text,Container,Content,Body,CheckBox,ListItem, Button,Separator, View} from 'native-base';
import fire from '../fire'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function preference({navigation}) {
    const[pass,setPass]=useState(false)
    const[prefer,setPrefer]=useState({"food":{"indian":false,"british":false,"american":false,
    "spanish":false,"chinese":false,"mexican":false,
    "japanese":false,"italian":false,"french":false},
    "food_deter":{"veg":false,"nonveg":false},
    "food_type":{"snacks":false ,"maincourse":false,"dessert":false,"drinks":false}})

        useEffect(()=>{
          async function Does(){let myJSON = JSON.stringify(prefer);
          let authUser=fire.auth().currentUser
          await AsyncStorage.setItem("prefFood",myJSON)
        }
        Does();
        },[pass])
        const date = JSON.stringify(new Date().getDate());
        const [foodtype, setFoodtype] = useState(0)
        const [foodDet,setFoodDet]=useState(0)
        const [foodClass,setFoodClass]=useState(0)
       
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
       
            else return true
        }
        const getpath=()=>{
          const getFood=()=>{
              const pref =prefer["food"]
              let arr = [];
                  for (let key in pref) {
                      if (pref[key]) arr.push(key);
                          
                  } 
               return arr[Math.floor(Math.random()*arr.length)]  
          } 
          const getDeter=()=>{
            const pref =prefer["food_deter"]
            let arr = [];
                for (let key in pref) {
                    if (pref[key]) arr.push(key);     
                }
             return arr[Math.floor(Math.random()*arr.length)]  
          }
          const getFoodType=()=>{
          const pref =prefer["food_type"]
        let arr = [];
            for (let key in pref) {
                if (pref[key]) arr.push(key);     
            }
            return arr[Math.floor(Math.random()*arr.length)]
          }   
          let ran =Math.floor(Math.random()*10)
          let path='/0/food/0/'+getDeter()+'/0/'+getFoodType()+'/0/'+getFood()+'/0/data/'+ran
        
          return path
      }
      
        const isValid=(path)=>{
          console.log("getting in")
            const interval =  setInterval(async() => {
                   await  fire.database().ref().child(getpath())
                         .once("value",
                     (snapshot)=>{
                         let item=snapshot.val()
                         if(item!==null){
                         let array=[];
                         Object.
                         keys(item)
                         .forEach(i=>array.push(item[i]));   
                    }
                    
                    console.log(item,"item")
                    if(item!==null)
                    { 
                      _storeData(item,path); 
                      clearInterval(interval); 
                      
                    }
                   })
                 }, 200)    
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
              <Separator bordered>
                  <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <Text style={{fontSize:18}}>Food Type</Text>
                  </View>
                  </Separator>
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
              <Separator bordered>
                  <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <Text style={{fontSize:18}}>Food Cuisine</Text>
                  </View>
                  </Separator>
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
             
              <Button transparent onPress={()=>{if(check()){navigation.navigate("profileMain")
                                      setPass(true) 
                                      isValid("foodData0")
                                      isValid("foodData1")
                                      isValid("foodData2") 
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
 
        
    
