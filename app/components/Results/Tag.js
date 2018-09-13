
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Tag extends Component {

  render() {
    const tagStyle = {
      borderRadius: 10,
      height:20,
      backgroundColor: this.props.color,
      paddingHorizontal: 5,
      display: 'flex',
      justifyContent: 'center',
      marginLeft: 5,
    }
    return (
      <View style={tagStyle}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
      borderRadius: 10,
      height:20,
      backgroundColor: "red",
      paddingHorizontal: 5,
      display: 'flex',
      justifyContent: 'center',
      marginLeft: 5
    },
    text: {
      fontSize: 12,
      color: "white"
    }
  }
)

AppRegistry.registerComponent('Tag', () => Tag);
