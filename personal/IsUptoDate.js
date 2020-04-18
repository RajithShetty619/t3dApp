import {AsyncStorage} from 'react-native'
import fire from '../fire';
import firebase from 'firebase';

export default async function IsUptoDate(){

    const _retrieveData = async (path) => {
        try {
          const value = await AsyncStorage.getItem(path);
          if (value !== null) {
            return JSON.parse(value)
          }
        } catch (error) {
        
        }
      };

    
    const getpathFood=async()=>{
    const prefer = await _retrieveData("prefFood")
    console.log(prefer,"prefer")
    const getFood=()=>{
    const pref = prefer["food"]
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
  const isValidFood=(path)=>{
      const interval =  setInterval( async() => {
              firebase.database().ref().child( await getpathFood())
                   .on("value",
               (snapshot)=>{
                   let item=snapshot.val()
                   if(item!==null){
                   let array=[];
                   Object.
                   keys(item)
                   .forEach(i=>array.push(item[i]));   
              }
              
              if(item!==null)
              { 
                _storeData(item,path); 
                clearInterval(interval); 
                
              }
             })
           }, 100)    
}  
const _storeData = async (obj,path) => {
try {
  
  await AsyncStorage.setItem(path,JSON.stringify(obj) );
} catch (error) {
  
}
};  
 const  pathItemsApp=(path)=>{
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
    const getpathApp=async()=>{
        const prefer = await _retrieveData("prefApp")
        const getTopic=()=>{
            const pref =prefer["app_details"]
            let arr = [];
                for (let key in pref) {
                    if (pref[key]) arr.push(key);
                        
                } 
             return arr[Math.floor(Math.random()*arr.length)]  
            }
            
            let path= '/0/app_details/0/'+getTopic()
          
            let ran=Math.floor(Math.random()* pathItemsApp(path))
            return '/0/app_details/0/'+getTopic()+'/0/data/'+ ran;
        } 
    const isValidApp=(path)=>{
          const interval=setInterval(()=>{
            async function Does(){
            await  fire.database().ref().child( await getpathApp() )
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
           Does();
          },200)
         
    } 
    function pathItemsTopic(path){
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
    const getpathTopics=async()=>{
        const prefer=await _retrieveData("prefTopic")
        
        const getTopic=()=>{
            const pref=prefer["topic_details"]
            let arr = [];
                for (let key in pref) {
                    if (pref[key]) arr.push(key);         
                } 
             return arr[Math.floor(Math.random()*arr.length)]  
            }
            let path= '/0/topic_details/0/'+getTopic()
      
            let ran=Math.floor(Math.random()* pathItemsTopic(path))
            
            return '/0/topic_details/0/'+getTopic()+'/0/data/'+ ran;
        } 
    const isValidTopic=(path)=>{
          
    const interval =setInterval(  async()=>{ 
                 await  firebase.database().ref().child(await getpathTopics())
                       .once("value",
                   (snapshot)=>{
                       let item=snapshot.val()
                       if(item!==null){
                       let array=[];
                       Object.
                       keys(item)
                       .forEach(i=>array.push(item[i]));   
                       }
                       if(item!==null)
                        { 
                        _storeData(item,path); 
                        clearInterval(interval); 
                        
                        }
             })
                
                },1000)

   }  
    const  date= parseInt(JSON.parse(await AsyncStorage.getItem("date")))
    const NewDate=parseInt(new Date().getDate())
    
    
    if(date!==NewDate)
    {   let keys=["foodData0","foodData1","foodData2",
                  "appData0","appData1","appData2",
                  "topicData0","topicData1","topicData2"]
        await AsyncStorage.multiRemove(keys)
        isValidFood("foodData0")
        isValidFood("foodData1")
        isValidFood("foodData2")
        isValidApp("appData0")
        isValidApp("appData1")
        isValidApp("appData2")
        isValidTopic("topicData0")
        isValidTopic("topicData1")
        isValidTopic("topicData2")

        await AsyncStorage.setItem("date",JSON.stringify(NewDate))
    }
  }