/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, AsyncStorage} from 'react-native';

export default class BrowseHome extends Component {
  static navigationOptions = {
    title: "Browse",
    
  }
  onPressCategory = () => {
    this.props.navigation.navigate('BrowseCategory', {section: 'fridge'})
  }
  onPressUsers = () => {
    AsyncStorage.getItem("fridge_id")
    .then((id) => {
      this.props.navigation.navigate('BrowseUser', {section: 'fridge', id: id})
    })
    .catch((err) => {
      console.log(err.message)
    })
    
  }
  onPressAll = () => {
    AsyncStorage.getItem("fridge_id")
    .then((id) => {
      this.props.navigation.navigate('Results', {title: "All Items", type: "all", fridge: id})
    })
    .catch((err) => {
      console.log(err.message)
    })
    
  }
  render() {
    const section = this.props.navigation.getParam('section', 'fridge');
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.section} onPress={this.onPressUsers }>
          <View>
            <Text style={styles.sectionText}>Browse {section} By Owner</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.section} onPress={this.onPressCategory}>
          <View>
            <Text style={styles.sectionText}>Browse {section} By Category</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.section} onPress={this.onPressAll}>
          <View>
            <Text style={styles.sectionText}>Browse All</Text>
          </View>
        </TouchableOpacity>
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
    section: {
      flex: 1,
      backgroundColor: '#00b894',
      marginVertical: 5,
      marginHorizontal: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionText: {
      color: 'white',
      fontSize: 22
    }
  }
)

AppRegistry.registerComponent('BrowseHome', () => BrowseHome);
