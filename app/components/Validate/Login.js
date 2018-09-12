
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, AsyncStorage} from 'react-native';
import axios from 'axios'

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }
  componentWillMount() {
    this.validateSession();
  }

  validateSession = async () => {
    try {
      let session_id = await AsyncStorage.getItem('session_id');
      axios({
        method: 'POST',
        url: "http://192.168.1.3:3000/users/validateUser",
        data: {
          session: session_id
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.data != null) {
          this.props.navigation.navigate("Home")
        }
        else {
          console.log("Session Invalid")
        }

      })
      .catch((err) => {
        console.log("Could not validate session at this time")
      })
    } catch (err) {
      console.log("Error retrieving from store")
    }
  }

  validateUser = () => {
    const username = this.state.username;
    const password = this.state.password;

    axios({
      method: 'POST',
      url: "http://192.168.1.3:3000/users/login",
      data: {
        user: username,
        password: password
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.data != null) {
        console.log("sdkfjhsdkhfkjsd")
        this.props.navigation.navigate("Home")
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
          placeholder="username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onChangeText = {(input) => this.setState({username: input})}
          onSubmitEditing={()=> this.passwordInput.focus()}
          />
          <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          returnKeyType="go"
          onChangeText = {(input) => this.setState({password: input})}
          ref={(input) => this.passwordInput = input}
          />

          <TouchableOpacity style={styles.buttonContainer} onPress={this.validateUser}>
            <Text style={styles.buttonText}>LOGIN</Text>
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
      paddingVertical: 15
    },
    buttonText: {
      textAlign: 'center',
      color: "#FFFFFF",
      fontWeight: '700'
    }

  }
)

AppRegistry.registerComponent('Fridge', () => Fridge);
