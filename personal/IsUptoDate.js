
import {Alert,AsyncStorage} from 'react-native'
import fire from '../fire'


export default async function IsUptoDate(){

    const _retrieveData = async (path) => {
        try {
          const value = await AsyncStorage.getItem(path);
          console.log(value,path)
          if (value !== null) {
            return JSON.parse(value)
          }
        } catch (error) {
          console.log(error)
        }
      };

    
    const getpathFood=async()=>{
    const prefer = await _retrieveData("prefFood")
    console.log(prefer,"prefer")
    const getFood=()=>{
    const pref = prefer["food"]

    console.log(pref,"pref")
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
    console.log(path,"path")
    return path
}
  const isValidFood=(path)=>{
    console.log("getting in")
      const interval =  setInterval( async() => {
          console.log(getpathFood(),"getPath")
            await  fire.database().ref().child( await getpathFood())
                   .on("value",
               (snapshot)=>{
                   let item=snapshot.val()
                   console.log(item,"item")
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
           }, 100)    
}  
const _storeData = async (obj,path) => {
try {
  
  console.log("storing",obj)
  await AsyncStorage.setItem(path,JSON.stringify(obj) );
} catch (error) {
  console.log(error)
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
            console.log(ran)
            return '/0/app_details/0/'+getTopic()+'/0/data/'+ ran;
        } 
    const isValidApp=(path)=>{
          console.log("app")
        async function Does(){ console.log(getpathApp(),"getpathApp")
                 await  fire.database().ref().child( await getpathApp() )
                       .once("value",
                   (snapshot)=>{
                       let item=snapshot.val()
                       if(item!==null){
                       let array=[];
                       Object.
                       keys(item)
                       .forEach(i=>array.push(item[i]));   
                       }
                    _storeData(item,path); 
                 })
                }
                Does()
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
        const prefer=await AsyncStorage.getItem("prefTopic")
        const getTopic=()=>{
            
            let arr = [];
                for (let key in prefer) {
                    if (prefer[key]) arr.push(key);         
                } 
             return arr[Math.floor(Math.random()*arr.length)]  
            }
            let path= '/0/topic_details/0/'+getTopic()
            let ran=Math.floor(Math.random()* pathItemsTopic(path))
            console.log(ran)
            return '/0/topic_details/0/'+getTopic()+'/0/data/'+ ran;
        } 
    const isValidTopic=(path)=>{
          
    const interval =setInterval(  async()=>{ 
                 await  fire.database().ref().child(await getpathTopics())
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
    const  date= JSON.parse(await AsyncStorage.getItem("date"))
    const NewDate=new Date().getMinutes()
    
    if(date!==NewDate)
    {   let keys=["foodData0","foodData1","foodData2","appData0","appData0","appData0"]
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