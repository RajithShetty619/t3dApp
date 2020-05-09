import React,{useState,useEffect} from 'react';
import {View,StyleSheet,ScrollView,StatusBar,ImageBackground,BackHandler,Alert} from 'react-native';
import {Card,CardItem,Text,Container,Content,} from 'native-base';
import fire from '../fire'
import firebase from 'firebase'
import {  TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native'
export default function General() {
    let [cardf1,setCardf1]=useState({"cuisine":"","food_deter":"veg","food_info":"","food_item":"","food_meal":"","food_pic":"","sr":""})
    let [cardf2,setCardf2]=useState({"cuisine":"","food_deter":"veg","food_info":"","food_item":"","food_meal":"","food_pic":"","sr":""})
    let [cardf3,setCardf3]=useState({"cuisine":"","food_deter":"veg","food_info":"","food_item":"","food_meal":"","food_pic":"","sr":""})
    const [urlf1,setUrlf1]=useState('../assets/loading.png')
    const [urlf2,setUrlf2]=useState('../assets/loading.png')
    const [urlf3,setUrlf3]=useState('../assets/loading.png')
    
    useFocusEffect(
        React.useCallback(()=>{
            handleAndroidBackButton(exitAlert);
        },[])
    )

    const handleAndroidBackButton = callback => {
        BackHandler.addEventListener('hardwareBackPress', () => {
          callback();
          return true;
        });
      };
    const  exitAlert = () => {
        Alert.alert(
          'Confirm exit',
          'Do you want to quit the app?',
          [
            {text: 'CANCEL', style: 'cancel'},
            {text: 'OK', onPress: () => BackHandler.exitApp()}
          ]
        );
      };
      

    useEffect(() => {
         async function GetResult() { 
            await fire.database().ref('/0/general/food/0').once("value",snapshot=>{
               let item=snapshot.val() 
        
               setCardf1(item)
               firebase.storage().ref('/food/'+item.food_pic).getDownloadURL().then(data=>setUrlf1(data))
              
            })
           await fire.database().ref('/0/general/food/1').once("value",snapshot=>{
               let item=snapshot.val() 
               setCardf2(item)
               firebase.storage().ref('/food/'+item.food_pic).getDownloadURL().then(data=>setUrlf2(data))
               
            })
           await fire.database().ref('/0/general/food/2').once("value",snapshot=>{
                let item=snapshot.val() 
                setCardf3(item)
                firebase.storage().ref('/food/'+item.food_pic).getDownloadURL().then(data=>setUrlf3(data))
              
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
             
               setCardA1(item)
               firebase.storage().ref('/App/'+item["app_pic"]).getDownloadURL().then(data=>setUrlA1(data))
            
            })
           await fire.database().ref('/0/general/app/1').once("value",snapshot=>{
               let item=snapshot.val() 
               setCardA2(item)
               firebase.storage().ref('/App/'+item["app_pic"]).getDownloadURL().then(data=>setUrlA2(data))
               
            })
           await fire.database().ref('/0/general/app/2').once("value",snapshot=>{
                let item=snapshot.val() 
                setCardA3(item)
                firebase.storage().ref('/App/'+item["app_pic"]).getDownloadURL().then(data=>setUrlA3(data))
               
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
               console.log(item["topic_pic"],"topicpic")
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
                firebase.storage().ref('/topics/'+item["topic_pic"]).getDownloadURL().then(data=>setUrlT3(data))
                
             }) ; 
           }
           GetResult();
    },[])
    

     const[textShow,setTextShow]=useState({"food1":false,"food2":false,"food3":false,
                                            "app1":false,"app2":false,"app3":false,
                                            "topic1":false,"topic2":false,"topic3":false})



    return(
        <Container>
            <Content>
            <View style={{flex:1,backgroundColor:'#2b2c35'}}>
            <StatusBar translucent backgroundColor="transparent" />
            <ScrollView 
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
            >
                <View style={{flex:1,backgroundColor:'#2b2c35'}}>
                    <View style={{height:550,marginTop:20}}>
                        <Text style={{padding:10,fontSize:18,color:'#FFFFFF',fontWeight:"700" }}> Food</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableWithoutFeedback onPress={() =>{setTextShow({...textShow,food1:!textShow.food1})}}>
                                    <Card transparent style={{height:500,marginTop:10,}}>
                                    <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#2b2c35'}}>
                                    <View style={{flex:1}}>
                                        <ImageBackground source={{uri:urlf1}}
                                            style={styles.image}
                                            imageStyle={{borderRadius:16 }}
                                        >
                                            <View style={styles.imageDetail}>
                                                <Text style={styles.textHeading}>
                                                    {cardf1["food_item"]}
                                                </Text>
                                                <Text style={styles.details} >
                                                    {cardf1["cuisine"]} | {cardf1["food_meal"]} | {cardf1["food_deter"]}
                                                </Text>
                                            </View>   
                                                {textShow.food1?
                                                <View style={styles.opacity}>
                                                    <Text style={styles.info} >
                                                        {cardf1["food_info"]}
                                                    </Text>
                                                </View> 
                                                :null}
                                            
                                        </ImageBackground>   
                                    </View>
                            </CardItem>
                            </Card>  
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() =>{setTextShow({...textShow,food2:!textShow.food2})}}>
                             
                                    <Card transparent style={{height:500,marginTop:10,}}>
                                    <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#2b2c35'}}>
                                   <View style={{flex:1}}>
                                        <ImageBackground source={{uri:urlf2}}
                                            style={styles.image}
                                            imageStyle={{borderRadius:16 }}
                                        >
                                            <View style={styles.imageDetail}>
                                                <Text style={styles.textHeading}>
                                                    {cardf2["food_item"]}
                                                </Text>
                                                <Text style={styles.details} >
                                                    {cardf2["cuisine"]} | {cardf2["food_meal"]} | {cardf2["food_deter"]}
                                                </Text>
                                            </View>   
                                                {textShow.food2?
                                                <View style={styles.opacity}>
                                                    <Text style={styles.info} >
                                                        {cardf1["food_info"]}
                                                    </Text>
                                                </View> 
                                                :null}
                                            
                                        </ImageBackground>   
                                    </View>
                            </CardItem>
                            </Card>  
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() =>{setTextShow({...textShow,food3:!textShow.food3})}}>
                             
                                    <Card transparent style={{height:500,marginTop:10,}}>
                                    <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#2b2c35'}}>
                                   <View style={{flex:1}}>
                                        <ImageBackground source={{uri:urlf3}}
                                            style={styles.image}
                                            imageStyle={{borderRadius:16 }}
                                            >
                                            <View style={styles.imageDetail}>
                                                <Text style={styles.textHeading}>
                                                    {cardf3["food_item"]}
                                                </Text>
                                                <Text style={styles.details} >
                                                    {cardf3["cuisine"]} | {cardf3["food_meal"]} | {cardf3["food_deter"]}
                                                </Text>
                                            </View>   
                                                {textShow.food3?
                                                <View style={styles.opacity}>
                                                    <Text style={styles.info} >
                                                        {cardf3["food_info"]}
                                                    </Text>
                                                </View> 
                                                :null}
                                            
                                        </ImageBackground>   
                                    </View>
                            </CardItem>
                            </Card>  
                            </TouchableWithoutFeedback>
                        </ScrollView>

                    </View>
                    <View style={{height:400,marginTop:10}}>
                        <Text style={{padding:10,fontSize:18,color:'#FFFFFF',fontWeight:"700"}}>Topic</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableWithoutFeedback onPress={() =>{setTextShow({...textShow,topic1:!textShow.topic1});console.log(urlT1,"urlT1")}}>
                                <Card transparent style={{height:350,marginTop:10,}}>
                                <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#2b2c35'}}>
                                <View style={{flex:1}}>
                                    <ImageBackground source={{uri:urlT1}}
                                        style={styles.image}
                                        imageStyle={{borderRadius:16 }}
                                        >
                                        <View style={styles.imageDetail}>
                                            <Text style={styles.textHeading}>
                                                {cardT1["topic_name"]}
                                            </Text>
                                            <Text style={styles.details} >
                                                {cardT1["category"]} 
                                            </Text>
                                        </View>   
                                            {textShow.topic1?
                                            <View style={styles.opacity}>
                                                <Text style={styles.info} >
                                                    {cardT1["topic_info"]}
                                                </Text>
                                            </View> 
                                            :null}
                                        
                                    </ImageBackground>   
                                </View>
                        </CardItem>
                        </Card>  
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() =>{setTextShow({...textShow,topic2:!textShow.topic2})}}>
                                <Card transparent style={{height:350,marginTop:10,}}>
                                <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#2b2c35'}}>
                                <View style={{flex:1}}>
                                    <ImageBackground source={{uri:urlT2}}
                                        style={styles.image}
                                        imageStyle={{borderRadius:16 }}
                                        >
                                        <View style={styles.imageDetail}>
                                            <Text style={styles.textHeading}>
                                                {cardT2["topic_name"]}
                                            </Text>
                                            <Text style={styles.details} >
                                                {cardT2["category"]} 
                                            </Text>
                                        </View>   
                                            {textShow.topic2?
                                            <View style={styles.opacity}>
                                                <Text style={styles.info} >
                                                    {cardT2["topic_info"]}
                                                </Text>
                                            </View> 
                                            :null}
                                        
                                    </ImageBackground>   
                                </View>
                        </CardItem>
                        </Card>  
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() =>{setTextShow({...textShow,topic3:!textShow.topic3})}}>
                                <Card transparent style={{height:350,marginTop:10,}}>
                                <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#2b2c35'}}>
                                <View style={{flex:1}}>
                                    <ImageBackground source={{uri:urlT3}}
                                        style={styles.image}
                                        imageStyle={{borderRadius:16 }}
                                        >
                                        <View style={styles.imageDetail}>
                                            <Text style={styles.textHeading}>
                                                {cardT3["topic_name"]}
                                            </Text>
                                            <Text style={styles.details} >
                                                {cardT3["category"]} 
                                            </Text>
                                        </View>   
                                            {textShow.topic3?
                                            <View style={styles.opacity}>
                                                <Text style={styles.info} >
                                                    {cardT3["topic_info"]}
                                                </Text>
                                            </View> 
                                            :null}
                                        
                                    </ImageBackground>   
                                </View>
                        </CardItem>
                        </Card>  
                        </TouchableWithoutFeedback>   
                        </ScrollView>

                    </View>
                    <View style={{height:400}} >
                        <Text style={{fontSize:18,color:'#FFFFFF',padding:10,fontWeight:"700"}}> App</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                             <TouchableWithoutFeedback onPress={() =>{setTextShow({...textShow,app1:!textShow.app1})}}>
                                <Card transparent style={{height:350,marginTop:10,}}>
                                <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#2b2c35'}}>
                                <View style={{flex:1}}>
                                    <ImageBackground source={{uri:urlA1}}
                                        style={styles.image}
                                        imageStyle={{borderRadius:16 }}
                                        >
                                        <View style={styles.imageDetail}>
                                            <Text style={styles.textHeading}>
                                                {cardA1["app_name"]}
                                            </Text>
                                            <Text style={styles.details} >
                                                {cardA1["category"]} 
                                            </Text>
                                        </View>   
                                            {textShow.app1?
                                            <View style={styles.opacity}>
                                                <Text style={styles.info} >
                                                    {cardA1["app_info"]}
                                                </Text>
                                            </View> 
                                            :null}
                                        
                                    </ImageBackground>   
                                </View>
                        </CardItem>
                        </Card>  
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() =>{setTextShow({...textShow,app2:!textShow.app2})}}>
                                <Card transparent style={{height:350,marginTop:10,}}>
                                <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#2b2c35'}}>
                                <View style={{flex:1}}>
                                    <ImageBackground source={{uri:urlA2}}
                                        style={styles.image}
                                        imageStyle={{borderRadius:16 }}
                                        >
                                        <View style={styles.imageDetail}>
                                            <Text style={styles.textHeading}>
                                                {cardA2["app_name"]}
                                            </Text>
                                            <Text style={styles.details} >
                                                {cardA2["category"]} 
                                            </Text>
                                        </View>   
                                            {textShow.app2?
                                            <View style={styles.opacity}>
                                                <Text style={styles.info} >
                                                    {cardA2["app_info"]}
                                                </Text>
                                            </View> 
                                            :null}
                                        
                                    </ImageBackground>   
                                </View>
                        </CardItem>
                        </Card>  
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() =>{setTextShow({...textShow,app3:!textShow.app3})}}>
                                <Card transparent style={{height:350,marginTop:10,}}>
                                <CardItem style={{flex:1,height:null,width:300,backgroundColor:'#2b2c35'}}>
                                <View style={{flex:1}}>
                                    <ImageBackground source={{uri:urlA3}}
                                        style={styles.image}
                                        imageStyle={{borderRadius:16 }}
                                        >
                                        <View style={styles.imageDetail}>
                                            <Text style={styles.textHeading}>
                                                {cardA3["app_name"]}
                                            </Text>
                                            <Text style={styles.details} >
                                                {cardA3["category"]} 
                                            </Text>
                                        </View>   
                                            {textShow.app3?
                                            <View style={styles.opacity}>
                                                <Text style={styles.info} >
                                                    {cardA3["app_info"]}
                                                </Text>
                                            </View> 
                                            :null}
                                        
                                    </ImageBackground>   
                                </View>
                        </CardItem>
                        </Card>  
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
const styles=StyleSheet.create({
    image:{
        flex:1,
        height: null,
        width: null,
        borderRadius:16 ,
        
    },
    opacity: {
        borderRadius:16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
    },
    info:{
        color:'#f9efef',
        padding: 3,
        textAlign:"center",
        paddingTop:5
    },
    imageDetail:{
        color:'#f9efef',
        paddingBottom:6,
        backgroundColor: 'rgba( 0, 0, 0, 0.3 )',
        borderRadius:16,
    },
    textHeading:{
        fontWeight:"700",
        fontSize:20,
        textAlign:'center',
        color:'#f9efef',
        borderRadius:5,
        flexDirection:'column',
        paddingTop:7
    },
    details:{
        fontWeight:"300",
        fontSize:13,
        textAlign:'center',
        textAlignVertical:'center',
        alignSelf:'center',
        color:'#2b2c35',
        paddingHorizontal:5,
        backgroundColor: '#f9efef',
        borderRadius:30,
        flexDirection:'column'
    },
    image:{
        flex:1,
        height: null,
        width: null,
        borderRadius:16 ,
        
    },
})
    

