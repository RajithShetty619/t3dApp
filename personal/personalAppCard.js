import PreferVar from '../profile/preferVar';
import React from 'react'
import {  StyleSheet,TouchableOpacity } from 'react-native'
import {Card,CardItem,Text,Container,Content,Image,Body,footer,Left} from 'native-base';


export default function personalAppCard ({navigation}){
    // const getpath=()=>{
    //     const getApp=()=>{
    //         const prefer =prefVar["app_details"]
    //         let arr = [];
    //             for (let key in prefer) {
    //                 if (prefer[key]) arr.push(key);
                        
    //             }
                
    //          return arr[Math.floor(Math.random()*arr.length)]  
    //     } 
    //     return path ='/0/app_topics'+getApp
    // }

    
    // let [card1,setCard1]= useState({})
    // const [url1,setUrl1]=useState({})
    // let itemlen = 0
    // useEffect(()=>{
    //     const interval = setInterval(() => {
    //             fire.database().ref().child(getpath())
    //                 .once("value",
    //             (snapshot)=>{
    //                 let item=snapshot.val()
    //                 console.log(item)
    //                 if(item!==null){
    //                 let array=[];
    //                 Object.
    //                 keys(item)
    //                 .forEach(i=>array.push(item[i]));
    //                 setCard1(array);
    //            }
    //            console.log(item,"item")
    //            if(item!==null)
    //            { 
                    
    //                 itemlen=7  //length of object I get from valid result
    //                 //stop polling for results
    //                 console.log(itemlen,"should clear")
    //            }
    //            else {
    //                console.log("polling")
    //             }
    //           })
    //        }, 1000)
    //        console.log("comingout")
    //       clearInterval(interval)
    //     },[prefVar]);

        return(
            <Container>
                <Content>
                     <Card style={{ borderRadius: 8 }}> 
                        <TouchableOpacity > 
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                    <Text>pmain</Text>
                                </Body> 
                            </CardItem>
                            <CardItem footer>
                                    <Left> 
                                     <Text>food</Text>
                                    </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ borderRadius: 8 }}> 
                        <TouchableOpacity>
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                    <Text>app</Text>
                                </Body>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{ borderRadius: 8 }}>
                        <TouchableOpacity>
                            <CardItem style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8,borderBottomRightRadius:8,borderBottomLeftRadius:8 }}>
                                <Body>
                                    <Text>topic</Text>
                                </Body>
                        </CardItem>
                        </TouchableOpacity>
                    </Card>
                </Content>
            </Container>
        )
    
}