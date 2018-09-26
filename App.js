/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Expo from 'expo'
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import RootStack from './app/components/Navigation/Navigation'
import {register} from './app/helpers/helpers'


export default class fridge extends Component {
  componentWillMount() {
    this.listener = Expo.Notifications.addListener(this.listen)
  }
  
  listen = ({origin, data}) => {
    console.log(origin, data)
  }
  render() {
    return (
      <RootStack />
    );
  }
}

AppRegistry.registerComponent('fridge', () => fridge);
