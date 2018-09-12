
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Result extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      borderRadius: 10,
      height:30,
      backgroundColor: "red",
      
    }
  }
)

AppRegistry.registerComponent('Result', () => Result);
