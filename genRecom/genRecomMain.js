import React,{useState,useEffect} from 'react';
import {View,StyleSheet,ScrollView,Image} from 'react-native';
import {Card,CardItem,Text,Container,Content,Body} from 'native-base';
import fire from '../fire'
import firebase from 'firebase'
import {  TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default function General() {
    let [cardf1,setCardf1]=useState({"cuisine":"","food_deter":"veg","food_info":"","food_item":"","food_meal":"","food_pic":"","sr":""})
    let [cardf2,setCardf2]=useState({"cuisine":"","food_deter":"veg","food_info":"","food_item":"","food_meal":"","food_pic":"","sr":""})
    let [cardf3,setCardf3]=useState({"cuisine":"","food_deter":"veg","food_info":"","food_item":"","food_meal":"","food_pic":"","sr":""})
    const [urlf1,setUrlf1]=useState('../assets/loading.png')
    const [urlf2,setUrlf2]=useState('../assets/loading.png')
    const [urlf3,setUrlf3]=useState('../assets/loading.png')
   
    useEffect(() => {
         async function GetResult() { 
            await fire.database().ref('/0/general/food/0').once("value",snapshot=>{
               let item=snapshot.val() 
               console.log(item,"card1")
               setCardf1(item)
               firebase.storage().ref('/food/'+item.food_pic).getDownloadURL().then(data=>setUrlf1(data))
               console.log((item.food_pic))
            })
           await fire.database().ref('/0/general/food/1').once("value",snapshot=>{
               let item=snapshot.val() 
               setCardf2(item)
               firebase.storage().ref('/food/'+item.food_pic).getDownloadURL().then(data=>setUrlf2(data))
               console.log((item.food_pic))
            })
           await fire.database().ref('/0/general/food/2').once("value",snapshot=>{
                let item=snapshot.val() 
                setCardf3(item)
                firebase.storage().ref('/food/'+item.food_pic).getDownloadURL().then(data=>setUrlf3(data))
                console.log((item.food_pic))
             }) ; 
           }
           GetResult();
    },[])

    let [cardA1,setCardA1]=useState({"app_info":"",
    "app_name":"","app_pic":"","category":"","sr":""})
    let [cardA2,setCardA2]=useState({"app_info":"",
    "app_name":"","app_pic":"","category":"","sr":""})
    let [cardA3,setCardA3]=useState({"app_info":"",
    "app_name":"","app_pic":"","category":"","sr":""})
    const [urlA1,setUrlA1]=useState('../assets/loading.png')
    const [urlA2,setUrlA2]=useState('../assets/loading.png')
    const [urlA3,setUrlA3]=useState('../assets/loading.png')
    useEffect(() => {
         async function GetResult() { 
            await fire.database().ref('/0/general/app/0').once("value",snapshot=>{
               let item=snapshot.val() 
               console.log(item,"card1")
               setCardA1(item)
               firebase.storage().ref('/App/'+item["app_pic"]).getDownloadURL().then(data=>setUrlA1(data))
               console.log((item.food_pic))
            })
           await fire.database().ref('/0/general/app/1').once("value",snapshot=>{
               let item=snapshot.val() 
               setCardA2(item)
               firebase.storage().ref('/App/'+item["app_pic"]).getDownloadURL().then(data=>setUrlA2(data))
               console.log((item.food_pic))
            })
           await fire.database().ref('/0/general/app/2').once("value",snapshot=>{
                let item=snapshot.val() 
                setCardA3(item)
                firebase.storage().ref('/App/'+item["app_pic"]).getDownloadURL().then(data=>setUrlA3(data))
                console.log((item.food_pic))
             }) ; 
           }
           GetResult();
    },[])
    
    let [cardT1,setCardT1]=useState({"category":"","sr":"","topic_info":"","topic_name":"","topic_pic":""})
    let [cardT2,setCardT2]=useState({"category":"","sr":"","topic_info":"","topic_name":"","topic_pic":""})
    let [cardT3,setCardT3]=useState({"category":"","sr":"","topic_info":"","topic_name":"","topic_pic":""})
    const [urlT1,setUrlT1]=useState('../assets/loading.png')
    const [urlT2,setUrlT2]=useState('../assets/loading.png')
    const [urlT3,setUrlT3]=useState('../assets/loading.png')
    
    useEffect(() => {
         async function GetResult() { 
            await fire.database().ref('/0/general/topic/0').once("value",snapshot=>{
               let item=snapshot.val() 
               setCardT1(item)
               firebase.storage().ref('/topics/'+item["topic_pic"]).getDownloadURL().then(data=>setUrlT1(data))
               
            })
           await fire.database().ref('/0/general/topic/1').once("value",snapshot=>{
               let item=snapshot.val() 
               setCardT2(item)
               firebase.storage().ref('/topics/'+item["topic_pic"]).getDownloadURL().then(data=>setUrlT2(data))
               
            })
           await fire.database().ref('/0/general/topic/2').once("value",snapshot=>{
                let item=snapshot.val() 
                setCardT3(item)
                console.log(item["topic_pic"],item,"card3")
                firebase.storage().ref('/topics/'+item["topic_pic"]).getDownloadURL().then(data=>setUrlT3(data))
                
             }) ; 
           }
           GetResult();
    },[])
    

     const[textShow,setTextShow]=useState({"food1":true,"food2":true,"food3":true,
                                            "app1":true,"app2":true,"app3":true,
                                            "topic1":true,"topic2":true,"topic3":true})



    return(
        <Container>
            <Content>
        <View style={{flex:1,backgroundColor:'#000000'}}>
            <ScrollView 
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
            >
                <View style={{flex:1,backgroundColor:'#000000'}}>
                    <View style={{height:550,marginTop:20}}>
                        <Text style={{padding:10,fontSize:18,color:'#FFFFFF',fontWeight:"700" }}> Food</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableWithoutFeedback onPress={() =>{setTextShow({...textShow,food1:!textShow.food1})}}>
                                {textShow.food1 ?(
                                       <Card transparent style={{height:500,marginTop:10,}}>
                                       <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#000000'}}>
                                   <View style={{flex:1}}>
                                       
                                           <Image source={{uri:urlf1}}
                                               style={{flex:1,width:null,height:null,resizeMode:'stretch',borderTopLeftRadius:16,borderTopRightRadius:16,borderBottomLeftRadius:16,borderBottomRightRadius:16}}
                                           />   
                                        </View>
                            </CardItem>
                            </Card>  
                                ):(
                                    <Card transparent style={{height:500,marginTop:10,}}>
                                <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#000000'}}>
                            <View style={{flex:1}}>
                            <View style={{flex:1,paddingLeft:5,paddingTop:5,alignContent:'center',justifyContent:'center'}}>
                            
                                    <Text style={{color:'#FFFFFF',}}>{cardf1.food_info}</Text>
                                    
                                </View>
                                </View>
                            </CardItem>
                            </Card>
                                )
                            } 
                            </TouchableWithoutFeedback>
                            
                            <TouchableWithoutFeedback onPress={()=>{setTextShow({...textShow,food2:!textShow.food2})}}>
                                {textShow.food2?(
                                     <Card transparent style={{height:500,marginTop:10,}}>
                                     <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#000000'}}>
                                        <View style={{flex:1}}>
                                         <Image source={{uri:urlf2}}
                                             style={{flex:1,width:null,height:null,resizeMode:'stretch',borderTopLeftRadius:16,borderTopRightRadius:16,borderBottomLeftRadius:16,borderBottomRightRadius:16}}
                                         />
                                        </View>
                            </CardItem>
                            </Card>
                                ):(
                                    <Card transparent style={{height:500,marginTop:10,}}>
                                <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#000000'}}>
                            <View style={{flex:1}}>
                            <View style={{flex:1,paddingLeft:5,paddingTop:5,alignContent:'center',justifyContent:'center'}}>
                                    <Text  style={{color:'#FFFFFF'}}>{cardf2.food_info}</Text>
                                </View> 
                                </View>
                            </CardItem>
                            </Card>
                                )
                            }
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={()=>{setTextShow({...textShow,food3:!textShow.food3})}}>
                                {textShow.food3?(
                                    <Card transparent style={{height:500,marginTop:10}}>
                                    <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#000000'}}>
                                <View style={{flex:1}}>
                                        <Image source={{uri:urlf3}}
                                            style={{flex:1,width:null,height:null,resizeMode:'stretch',borderTopLeftRadius:16,borderTopRightRadius:16,borderBottomLeftRadius:16,borderBottomRightRadius:16}}
                                        />
                                        </View>
                            </CardItem>
                            </Card>
                                ):(
                                    <Card transparent style={{height:500,marginTop:10}}>
                                <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#000000'}}>
                            <View style={{flex:1}}>
                            <View style={{flex:1,paddingLeft:5,paddingTop:5,alignContent:'center',justifyContent:'center'}}>
                                    <Text  style={{color:'#FFFFFF'}}>  {cardf3.food_info}</Text>
                                </View> 
                                </View>
                            </CardItem>
                            </Card>
                                )
                            }
                            </TouchableWithoutFeedback>
                        </ScrollView>

                    </View>
                    <View style={{height:400,marginTop:10}}>
                        <Text style={{padding:10,fontSize:18,color:'#FFFFFF',fontWeight:"700"}}>Topic</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableWithoutFeedback onPress={()=>{setTextShow({...textShow,topic1:!textShow.topic1})}}>
                                {textShow.topic1?(
                                    <Card transparent style={{height:300,marginTop:10}}>
                                    <CardItem style={{flex:1,height:null,width:330,backgroundColor:'#000000'}}>
                                <View style={{flex:1}}>
                                        <Image source={{uri:urlT1}}
                                            style={{flex:1,width:null,height:null,resizeMode:'stretch',borderTopLeftRadius:16,borderTopRightRadius:16,borderBottomLeftRadius:16,borderBottomRightRadius:16}}
                                        />
                                        </View>

                            </CardItem>
                            </Card>
                                ):(
                                    <Card transparent style={{height:300,marginTop:10}}>
                                    <CardItem style={{flex:1,height:null,width:330,backgroundColor:'#000000'}}>
                                <View style={{flex:1}}>  
                                <View style={{flex:1,paddingLeft:5,paddingTop:5,alignContent:'center',justifyContent:'center'}}>
                                    <Text style={{color:'#FFFFFF'}}>{cardT1.topic_info}</Text>
                                </View>
                                </View>
                            </CardItem>
                            </Card>
                                )
                                }
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={()=>{setTextShow({...textShow,topic2:!textShow.topic2})}}>
                                {textShow.topic2?(
                                    <Card transparent style={{height:300,marginTop:10}}>
                                    <CardItem style={{flex:1,height:null,width:330,backgroundColor:'#000000'}}>
                                <View style={{flex:1}}>
                                        <Image source={{uri:urlT2}}
                                            style={{flex:1,width:null,height:null,resizeMode:'stretch',borderTopLeftRadius:16,borderTopRightRadius:16,borderBottomLeftRadius:16,borderBottomRightRadius:16}}
                                        />
                                        </View>
                            </CardItem>
                            </Card>
                                ):(
                                    <Card transparent style={{height:300,marginTop:10}}>
                                <CardItem style={{flex:1,height:null,width:330,backgroundColor:'#000000'}}>
                            <View style={{flex:1}}>
                            <View style={{flex:1,paddingLeft:5,paddingTop:5,alignContent:'center',justifyContent:'center'}}>
                                    <Text style={{color:'#FFFFFF'}}>{cardT2.topic_info}</Text>
                                </View>
                                </View>
                            </CardItem>
                            </Card>
                                )}
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={()=>{setTextShow({...textShow,topic3:!textShow.topic3})}}>
                                {textShow.topic3?(
                                    <Card transparent style={{height:300,marginTop:10}}>
                                    <CardItem style={{flex:1,height:null,width:330,backgroundColor:'#000000'}}>
                                <View style={{flex:1}}>
                                        <Image source={{uri:urlT3}}
                                            style={{flex:1,width:null,height:null,resizeMode:'stretch',borderTopLeftRadius:16,borderTopRightRadius:16,borderBottomLeftRadius:16,borderBottomRightRadius:16}}
                                        />
                                         </View>
                            </CardItem>
                            </Card>
                                ):(
                                    <Card transparent style={{height:300,marginTop:10}}>
                                    <CardItem style={{flex:1,height:null,width:330,backgroundColor:'#000000'}}>
                                <View style={{flex:1}}> 
                                <View style={{paddingLeft:5,paddingTop:5,alignContent:'center',justifyContent:'center'}}>
                                    <Text style={{color:'#FFFFFF'}}>{cardT3.topic_info}</Text>
                                </View>
                                </View>
                            </CardItem>
                            </Card>
                                )}
                            </TouchableWithoutFeedback>
                        </ScrollView>

                    </View>
                    <View style={{height:400}} >
                        <Text style={{fontSize:18,color:'#FFFFFF',padding:10,fontWeight:"700"}}> App</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                             <TouchableWithoutFeedback onPress={()=>{setTextShow({...textShow,app1:!textShow.app1})}}>
                                 {textShow.app1?(
                                     <Card transparent style={{height:300,marginTop:10}}>
                                     <CardItem style={{flex:1,height:null,width:330,backgroundColor:'#000000'}}>
                                 <View style={{flex:1}}>
                                         <Image source={{uri:urlA1}}
                                             style={{flex:1,width:null,height:null,resizeMode:'stretch',borderTopLeftRadius:16,borderTopRightRadius:16,borderBottomLeftRadius:16,borderBottomRightRadius:16}}
                                         />
                                         </View>
                            </CardItem>
                            </Card>
                                 ):(
                                    <Card transparent style={{height:300,marginTop:10}}>
                                    <CardItem style={{flex:1,height:null,width:330,backgroundColor:'#000000'}}>
                                <View style={{flex:1}}>
                                <View style={{flex:1,paddingLeft:5,paddingTop:5,alignContent:'center',justifyContent:'center'}}>
                                    <Text style={{color:'#FFFFFF'}}>{cardA1.app_info}</Text>
                                </View>
                                </View>
                            </CardItem>
                            </Card>
                                 )
                                }
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={()=>{setTextShow({...textShow,app2:!textShow.app2})}}>
                                {textShow.app2?(
                                   <Card transparent style={{height:300,marginTop:10}}>
                                   <CardItem style={{flex:1,height:null,width:330,backgroundColor:'#000000'}}>
                               <View style={{flex:1}}>
                                       <Image source={{uri:urlA2}}
                                           style={{flex:1,width:null,height:null,resizeMode:'stretch',borderTopLeftRadius:16,borderTopRightRadius:16,borderBottomLeftRadius:16,borderBottomRightRadius:16}}
                                       /> 
                                       </View>
                            </CardItem>
                            </Card>
                                ):(
                                    <Card transparent style={{height:300,marginTop:10}}>
                                <CardItem style={{flex:1,height:null,width:330,backgroundColor:'#000000'}}>
                            <View style={{flex:1}}>
                            <View style={{flex:1,paddingLeft:5,paddingTop:5,alignContent:'center',justifyContent:'center'}}>
                                    <Text style={{color:'#FFFFFF'}}>{cardA2.app_info}</Text>
                                </View> 
                                </View>
                            </CardItem>
                            </Card>
                                )
                            }
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={()=>{setTextShow({...textShow,app3:!textShow.app3})}}>
                                {textShow.app3?(
                                    <Card transparent style={{height:300,marginTop:10}}>
                                    <CardItem style={{flex:1,height:null,width:330,backgroundColor:'#000000'}}>
                                <View style={{flex:1}}>
                                        <Image source={{uri:urlA3}}
                                            style={{flex:1,width:null,height:null,resizeMode:'stretch',borderTopLeftRadius:16,borderTopRightRadius:16,borderBottomLeftRadius:16,borderBottomRightRadius:16}}
                                        />
                                        </View>
                            </CardItem>
                            </Card>
                                ):(
                                    <Card transparent style={{height:300,marginTop:10}}>
                                <CardItem style={{flex:1,height:null,width:330,backgroundColor:'#000000'}}>
                            <View style={{flex:1}}>
                            <View style={{paddingLeft:5,paddingTop:5,alignContent:'center',justifyContent:'center'}}>
                                    <Text style={{color:'#FFFFFF'}}>{cardA3.app_info}</Text>
                                </View>
                                </View>
                            </CardItem>
                            </Card>
                                )
                                }
                            </TouchableWithoutFeedback>
                        </ScrollView>

                    </View>
                   
                </View>
                
            </ScrollView>
        </View>
        </Content>
        </Container>
    )
}
