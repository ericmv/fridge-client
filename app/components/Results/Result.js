
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Result extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Text style={styles.name}>{this.props.item.name}</Text>
          <Text style={styles.qty}>{this.props.item.quantity}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      height: 100,
      backgroundColor: "#0984e3"
    },
    topRow: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between'
    },
    bottomRow: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between'
    },
    name: {
      color: 'white',
      fontSize: 24,
      paddingTop: 5,
      paddingLeft:10
    },
    qty: {
      color: 'white',
      fontSize: 16,
      paddingTop: 5,
      paddingLeft:10
    }
  }
)

AppRegistry.registerComponent('Result', () => Result);
