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
    backgroundColor:'gray',
    marginTop:17
  },
  title: {
    fontWeight:"500",
    fontSize:20,
    textAlign:'center',
  },
  subTitle:{
    fontSize:14,
    fontWeight:"400",
    textAlign:'center'
  },
  text:{
    fontSize:14,
    textAlign:'center',
    flex:1,
  }
  
});

 
  const slides = [
  {
    key: 1,
    title: 'Setting up your App',
    subTitle:'A one step process',
    text: "Set your Food,Topic and App preferences\nAnd avail to feed filled with personalized recommendation",
    image: require('../assets/profile.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 2,
    title: 'Title 2',
    subTitle:'A one step process',
    text: 'Other cool stuff',
    image: require('../assets/IMG-5710.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    subTitle:'A one step process',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assets/IMG-5710.png'),
    backgroundColor: '#22bcb5',
  },
  
  {
    key: 4,
    title: 'Setting up your App',
    subTitle:'A one step process',
    text: 'Description.\nSay something cool',
    image: require('../assets/loading.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 5,
    title: 'Setting up your App',
    subTitle:'A one step process',
    text: 'Description.\nSay something cool',
    image: require('../assets/loading.png'),
    backgroundColor: '#59b2ab',
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
        <View style={{alignContent:'space-around',justifyContent:'center'}}>
          <Image source={item.image} styles={{flex:1,height:50,width:50}}/>
        </View>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  
  render() {
    // if (this.state.showRealApp) {
    //  return this.props.navigation.navigate('main')
    // } else {
      return <AppIntroSlider 
                  renderItem={this._renderItem} 
                  data={slides} 
                  onDone={this._onDone}
                  />
    // }
  }
}
 