import fire from '../fire';
import React, { useState,useEffect} from 'react'
export default function PreferVar(){
const [prefer,setPrefer]=useState({}) 
    useEffect(()=>{
        let authUser=fire.auth().currentUser
        fire.database().ref().child('/users/'+authUser.uid+'/preference/food').
         once("value",(snapshot)=>{
             let item=snapshot.val()
             console.log(snapshot.val())
             setPrefer(JSON.parse(item))
             }
     );},[])
return(prefer)

}

 