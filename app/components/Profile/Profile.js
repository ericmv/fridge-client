
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, AsyncStorage} from 'react-native';
import InitialLabel from '../Labels/InitialLabel';
import {logout} from '../../helpers/helpers'


export default class Profile extends Component {

  goToMyItems = () => {
    AsyncStorage.getItem("user_id")
    .then((id) => {
      this.props.navigation.navigate('Items', {type: "owner", id: id, title: "My Items"})
    })
    .catch((err) => {
      console.log("error loading items")
    })

  }

  static navigationOptions = {
    title: "Profile"
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.label}>
            <InitialLabel text="E" size={90}/>
          </View>
        </View>
        <TouchableOpacity onPress={this.goToMyItems} style={styles.button}>
          <Text style={styles.buttonText}>My Items</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Fridge Settings</Text>
        </View>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate("Edit")}} style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
      display: 'flex',
    },
    banner: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 200,
      borderBottomWidth: .5
    },
    label: {

    },
    button: {
      height: 70,
      display: 'flex',
      justifyContent: 'center',
      borderBottomWidth: .5,

    },
    buttonText: {
      fontSize: 18,
      paddingLeft: 15,
    }

  }
)

AppRegistry.registerComponent('Profile', () => Profile);
