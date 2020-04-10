import React from 'react'
import firebase from 'firebase';
import fire from '../fire';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
export default class SignUp extends React.Component {
  constructor(props){
    super(props);
  }
  state = { email: '', password: '', userName:'',errorMessage: null }
handleSignUp = () => {
  const {userName,email,password}=this.state;
  firebase.
  auth()
   .createUserWithEmailAndPassword(this.state.email, this.state.password)
   .then(authUser => {
     
      fire.database().ref().child('/users/').child(authUser.user.uid)
      .set({
        userName,
        email,
      });
  })
  .then(()=>this.props.navigation.navigate('main'))
      .catch(error => this.setState({ errorMessage: error.message }))
}
render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          placeholder="userName"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={userName => this.setState({ userName })}
          value={this.state.userName}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('login')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})