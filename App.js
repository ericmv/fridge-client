/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import TabNavigator from './app/components/Navigation/Navigation'

export default class fridge extends Component {
  render() {
    return (
      <TabNavigator />
    );
  }
}

AppRegistry.registerComponent('fridge', () => fridge);
