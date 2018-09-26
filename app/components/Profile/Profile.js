
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import InitialLabel from '../Labels/InitialLabel';
import {logout} from '../../helpers/helpers'
export default class Profile extends Component {
  
  
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.label}>
            <InitialLabel text="E" size={90}/>
          </View>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>My Items</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Fridge Settings</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </View>
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
