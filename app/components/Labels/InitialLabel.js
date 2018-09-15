
import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class InitialLabel extends Component {

  render() {
    let size = 50;
    if (this.props.size) {
      size = this.props.size
    }
    const radius = size/2;
    const labelStyle = {
      height: size,
      width: size,
      borderRadius: radius,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#40739e",
    }
    const fontSize = (size * 2) / 3
    const text = {
      margin: "auto",
      color: "#FFF",
      fontSize: fontSize,
    }
    return (
      <View style={labelStyle}>
        <Text style={text}>{this.props.text}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('InitialLabel', () => InitialLabel);
