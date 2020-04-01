import React from 'react';
import { Container, Text, Content,Thumbnail, Button, Left, Body, Card, CardItem, View, DeckSwiper } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { AppLoading } from 'expo';
// import { Header } from 'react-native/Libraries/NewAppScreen';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    // image: require(''),
  },
  {
    text: 'Card Two',
    name: 'Two',
    //image: require(''),
  },
]

export default class getstarted extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        isReady: false,
      };
    }
  
    async componentDidMount() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      this.setState({ isReady: true });
    }
  
    render() {
      if (!this.state.isReady) {
        return <AppLoading />;
      }
  
   return (
      <Container>
        {/* <Header /> */}
        <View>
          <DeckSwiper 
            dataSource={cards}
            renderItem={item =>
              <Card transparent style={{ elevation: 2 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>text</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 480, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
            }
          />
            
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button bordered dark>
            <Text>         Skip            </Text>
          </Button>
          
         </View> 
      </Container>
    );
  }
}
