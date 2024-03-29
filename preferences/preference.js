import React, { useState,useEffect} from 'react'
import {Alert,AsyncStorage} from 'react-native'
import {Text,Container,Content,Body,CheckBox,ListItem, Button,Separator, View,StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import fire from '../fire'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function preference({route,navigation}) {
    
    const {id} =route.params
    const[prefer,setPrefer]=useState({"food":{"indian":false,"british":false,"american":false,
    "spanish":false,"chinese":false,"mexican":false,
    "japanese":false,"italian":false,"french":false},
    "food_deter":{"veg":false,"nonveg":false},
    "food_type":{"snacks":false ,"maincourse":false,"dessert":false,"drinks":false}})
    const date = JSON.stringify(new Date().getDate());
        

        useEffect(()=>{
                  async function Does(){ 
                    let pref=await AsyncStorage.getItem("prefFood")
                    if(JSON.parse(pref)!==null){
                    setPrefer(JSON.parse(pref))
                    }
                  }
                  Does();
                },[])

      
          async function Set(){
            const authUser=fire.auth().currentUser;
            fire.database().ref('/users/'+authUser.uid+'/preference/preferenceFood').set(JSON.stringify(prefer));
            let myJSON = JSON.stringify(prefer);
            await AsyncStorage.setItem("prefFood",myJSON);
          }
       
       
        const check=()=>{
          let food_type=0
          let food=0
          let food_deter=0
          
         for(let i in prefer["food"] )
         {
            if(prefer["food"][i]){food=food+1}
         }
         for(let i in prefer.food_deter)
         {
            if(prefer["food_deter"][i]){food_deter=food_deter+1}
         }
         for(let i in prefer.food_type)
         {
            if(prefer["food_type"][i]){food_type=food_type+1}
         }
            if(food<=3){
                  
                  Alert.alert("Choose atleast 4 food cusines")
                  return false
            }
            if(food_deter<=0){
                
                  Alert.alert("Choose non-veg or veg")
                  return false
            }
            if(food_type<=1){
              
                  Alert.alert("Choose atleast two food type")
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
          let ran =Math.floor(Math.random()*15)
          let path='/0/food/0/'+getDeter()+'/0/'+getFoodType()+'/0/'+getFood()+'/0/data/'+ran
        
          return path
      }
      
        const isValid=async(path)=>{
          
          async function inter(){
           await fire.database().ref().child(  getpath())
           .once("value",
               async(snapshot)=>{
                   let item=snapshot.val()
                   console.log(item)
                   
                  if(item!==null)
                      { 
                      await _storeData(item,path);
                      return new Promise(resolve => {
                      console.log('true')
                      resolve('true');
                    });

                      }
                  else{
                    setTimeout(inter,10)
                    
                  }
             })
         }
        await inter();
           
     }  
     const _storeData = async (obj,path) => {
      try {
        await AsyncStorage.setItem(path,JSON.stringify(obj) );
      } catch (error) {
      }
    };  
     

    return(
      <StyleProvider style={getTheme(material)}>
          <Container style={{ justifyContent:'center',backgroundColor:'#2B2C35',paddingTop:24}}>
            <Content>
                <Content>
                    <ListItem itemDivider >
                        <View style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                        <Text style={{fontSize:24,}}>Food Preferences</Text>
                        </View>
                      </ListItem>  
                    <TouchableOpacity   onPress={()=>{
                        setPrefer((prevPrefer)=>({...prevPrefer,
                      food_deter:{
                        ...prevPrefer.food_deter,veg:!prefer.food_deter.veg
                      }
                      }))
                    }}>
                <ListItem> 
                    <CheckBox checked={prefer.food_deter.veg}  />
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
                    
                    }}>
                <ListItem>
                    <CheckBox checked={prefer.food_deter.nonveg}/>
                    <Body>
                        <Text style={{fontWeight:'bold' ,color:'#ffffff'}}>Non-Veg</Text>
                    </Body>
                </ListItem>
                </TouchableOpacity>
              
                    <ListItem itemDivider>
                        <View style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                        <Text style={{fontSize:24,}}>Food Type</Text>
                        </View>
                      </ListItem>  
                <TouchableOpacity onPress={()=>{
                        setPrefer((prevPrefer)=>({...prevPrefer,
                      food_type:{
                        ...prevPrefer.food_type,drinks:!prefer.food_type.drinks
                      }
                      }))
                    
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
                        
                    }}>
                <ListItem>
                    <CheckBox checked={prefer.food_type.dessert} />
                    <Body>
                        <Text style={{color:'#ffffff'}}>Dessert</Text>
                    </Body>
                </ListItem>
                </TouchableOpacity>
                    <ListItem itemDivider>
                        <View style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                        <Text style={{fontSize:24,}}>Food Cuisine</Text>
                        </View>
                      </ListItem>  
                <TouchableOpacity  onPress={()=>{
                        setPrefer((prevPrefer)=>({...prevPrefer,
                      food:{
                        ...prevPrefer.food,indian:!prefer.food.indian,
                      }
                      })) 
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
                    }}>
                <ListItem>
                    <CheckBox checked={prefer.food.british} />
                    <Body>
                        <Text  style={{color:'#f9f2f2'}}>British</Text>
                    </Body>
                </ListItem>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>{
                    setPrefer((prevPrefer)=>({...prevPrefer,
                  food:{
                    ...prevPrefer.food,american:!prefer.food.american,
                  }
                  })) 
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
                    }}>
                <ListItem>
                    <CheckBox checked={prefer.food.italian} />
                    <Body>
                        <Text style={{color:'#ffffff'}}>Italian</Text>
                    </Body>
                </ListItem>
                </TouchableOpacity>
              
                <Button transparent onPress={async()=>{if(check()){
                                        navigation.navigate(id,{id:"preferenceApp"})
                                        await Set();
                                        await isValid("foodData0")
                                        await isValid("foodData1")
                                        await isValid("foodData2")
                                        await _storeData(date,"date")
                      
                                      }}}>
                  <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                    <Text style={{color:'#00BFFF'}}>SAVE</Text>
                    </View>
                </Button>
                </Content>
            </Content>
        </Container>
  
      </StyleProvider>

         )

}
 
        
    
