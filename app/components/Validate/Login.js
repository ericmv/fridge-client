
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, AsyncStorage} from 'react-native';
import axios from 'axios'

export default class Login extends Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
    headerLeft: (
      <Text>dfgfd</Text>
    )
  }
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  storeSession = async (data) => {
    const session_id = data._id
    const user_id = data.user_id
    const fridge_id = data.fridge_id
    try {
      await AsyncStorage.setItem('session_id', session_id);
      await AsyncStorage.setItem('user_id', user_id);
      await AsyncStorage.setItem('fridge_id', fridge_id);
    } catch (error) {
      console.log("Error storing session")
      this.props.navigation.navigate('Login')
    }

  }
  validateUser = () => {
    const email = this.state.email;
    const password = this.state.password;
    console.log(email);
    console.log(password)
    axios({
      method: 'POST',
      url: "http://192.168.1.10:3000/users/login",
      data: {
        email: email,
        password: password
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.data != null) {
        this.storeSession(res.data);
        this.props.navigation.navigate("App");
      }
      else {
        console.log("Invalid login credentials")
      }

    })
    .catch((err) => {
      console.log(err.message)
      console.log("Could not validate session at this time")
    })
  }

  registerUser = () => {
    const email = this.state.email;
    const password = this.state.password;

    axios({
      method: 'POST',
      url: "http://192.168.1.10:3000/users/register",
      data: {
        email: email,
        password: password
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.data != null) {
        this.storeSession(res.data);
        this.props.navigation.navigate("App");
      }
      else {
        console.log("Invalid login credentials")
      }

    })
    .catch((err) => {
      console.log(err.message)
      console.log("Could not validate session at this time")
    })
  }


  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          source={require('../../../images/logo.png')}
          style={styles.logo}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onChangeText = {(input) => this.setState({email: input})}
          onSubmitEditing={()=> this.passwordInput.focus()}
          />
          <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          returnKeyType="go"
          onChangeText = {(input) => this.setState({password: input})}
          ref={(input) => this.passwordInput = input}
          />

          <TouchableOpacity style={styles.buttonContainer} onPress={this.registerUser}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButtonContainer} onPress={this.validateUser}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#1abc9c"
    },
    selection: {
      flex: 1,
    },
    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
    },
    logo: {
      width: 150,
      height:150
    },
    input: {
      height: 40,
      backgroundColor: "rgba(255,255,255,0.2)",
      marginBottom: 10,
      color: '#FFF',
      paddingHorizontal: 10
    },
    inputContainer: {
      padding: 20
    },
    buttonContainer: {
      backgroundColor: "#16a085",
      paddingVertical: 15,
      marginTop: 10
    },
    registerButtonContainer: {
      backgroundColor: "#16a085",
      paddingVertical: 15,
      marginTop: 5
    },
    buttonText: {
      textAlign: 'center',
      color: "#FFFFFF",
      fontWeight: '700'
    }

  }
)

AppRegistry.registerComponent('Login', () => Login);
