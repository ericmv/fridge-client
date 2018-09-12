/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, FlatList, AsyncStorage} from 'react-native';
import axios from 'axios'
export default class Results extends Component {
  constructor () {
    super();
    this.state = {
      results: []
    }
  }

  componentWillMount () {
    const category = this.props.navigation.getParam('category')
    AsyncStorage.getItem("user_id")

    .then((id) => {
      axios({
        method: 'POST',
        url: "http://192.168.1.3:3000/browse/category",
        data: {
          category: category,
          user: id
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.data != null) {
          console.log(res.data)
          this.setState({results: res.data})
        }
        else {
          console.log("Could not find items in category")
        }

      })
      .catch((err) => {
        console.log("Error processing query")
      })
    })

  }


  render() {
    const section = this.props.navigation.getParam('section', 'fridge')
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.results}
          renderItem = {({item}) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    owner: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center'
    },
    category: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center'
    },
    all: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }

  }
)

AppRegistry.registerComponent('Results', () => Results);