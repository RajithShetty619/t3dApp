import fire from '../fire';
import React, { useState,useEffect} from 'react'
export default function PreferVar(){
const [prefer,setPrefer]=useState({"food":{"indian":false,"british":false,"american":false,
"spanish":false,"chinese":false,"mexican":false,
"japanese":false,"italian":false,"french":false},
"food_deter":{"veg":false,"nonveg":false},
"food_type":{"snacks":false ,"maincourse":false,"dessert":false,"drinks":false},
"topic_details":{"architecture":false,"automobile":false,"aviation":false,"famouspersonality":false,
        "food":false,"general":false,"health":false,"psychology":false,"space":false},
"app_details":{"booksandreference":false,"dating":false,"education":false,"entertainment":false,
                "finance":false,"fitness":false,"game":false,"lifestyle":false,
            "music":false,"news":false,"productivity":false,"socialmedia":false,"travel":false}}) 
    useEffect(()=>{
        let authUser=fire.auth().currentUser
        fire.database().ref().child('/users/'+authUser.uid+'/preference/').
         once("value",(snapshot)=>{
             let item=snapshot.val()
             console.log(snapshot.val())
             setPrefer(JSON.parse(item))
             }
     );},[])
return(prefer)

}

 