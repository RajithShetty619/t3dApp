import React from 'react';
import { StyleSheet, View,Text,Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
// import Icon from 'react-native-vector-icons/Ionicons';
const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#2B2C35',
    marginTop:20
  },
  title: {
    fontWeight:"500",
    fontSize:20,
    textAlign:'center',
    color:"white"
    
  },
  subTitle:{
    fontSize:14,
    fontWeight:"400",
    textAlign:'center',
    marginBottom:5,
    color:"white"
  },
  text:{
    fontSize:14,
    textAlign:'center',
    flex:1,
    marginTop:7,
    color:"white"
  }
  
});

 
  const slides = [
  {
    key: "1",
    title: 'Setting up your App',
    subTitle:'A one step process',
    text: "Set your Food,Topic and App preferences\nAnd avail to feed filled with personalized recommendation",
    // image: require('../assets/profile.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: "2",
    title: 'Personalized feed',
    subTitle:'Three recommendations per-section daily',
    text: 'Easy access to information\nto your personalized item',
    // image: require('../assets/topicStart.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: "3",
    title: 'General Feed',
    subTitle:'Alternative recommendations',
    text: "daily three generalized recommendation,\n with one-tap information",
    // image: require('../assets/IMG-5710.png'),
    backgroundColor: '#22bcb5',
  },
];

export default class getstarted extends React.Component {
  state = {
    showRealApp: false
  }

  
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    this.props.navigation.navigate('main')

  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
        <View style={{height:null,width:null,borderRadius:16,}}>
          <Image source={item.image} resizeMode="contain" style={{height:400,width:null,borderRadius:16}}/>
        </View> 
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  
  render() {
      return <AppIntroSlider 
                  renderItem={this._renderItem} 
                  data={slides} 
                  onDone={this._onDone}
                  dotStyle={{backgroundColor:"gray"}}
                  activeDotStyle={{backgroundColor:"white"}}
                  />
  }
}
 