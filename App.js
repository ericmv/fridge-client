/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './app/components/HomeScreen/HomeScreen';
import BrowseHome from './app/components/Browse/BrowseHome';
import BrowseCategory from './app/components/Browse/BrowseCategory';
import Results from './app/components/Results/Results';
import Login from './app/components/Validate/Login';
import AddItem from './app/components/Add/AddItem'


import {createStackNavigator} from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home:{screen: HomeScreen},
    Browse:{screen: BrowseHome},
    BrowseCategory: {screen: BrowseCategory},
    Login: {screen: Login},
    Results: {screen: Results},
    Add: {screen: AddItem}
  },
  {
    initialRouteName: 'Add',
  }
);

export default class fridge extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

AppRegistry.registerComponent('fridge', () => fridge);
