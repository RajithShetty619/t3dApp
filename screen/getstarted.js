import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
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
  },
  title: {
    fontWeight:"bold",
    fontSize:"26"
  },
  subTitle:{
    fontSize:"14",
  },
  
});
const slides = [
  {
    key: 1,
    title: 'Setting up your App',
    subTitle:'A one step process',
    text: 'Description.\nSay something cool',
    image: require('../assets/loading.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/IMG-5710.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assets/IMG-5710.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assets/IMG-5710.png'),
    backgroundColor: '#22bcb5',
  }
];


export default class App extends React.Component {
   
    _renderItem = ({ item }) => {
      return (
        <View style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.title}</Text>
          
          <Image source={item.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      );
    }
    _onDone = () => {
      // User finished the introduction. Show real app through
      // navigation or simply by controlling state
      this.props.navigation.navigate('main')
    }
    render() {
      if (this.state.showRealApp) {
        return <App />;
      } else {
        return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
      }
    }
  }