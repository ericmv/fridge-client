import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import HomeScreen from '../HomeScreen/HomeScreen';
import BrowseHome from '../Browse/BrowseHome';
import BrowseCategory from '../Browse/BrowseCategory';
import Results from '../Results/Results';
import Login from '../Validate/Login';
import AddItem from '../Add/AddItem';
import Profile from '../Profile/Profile';

import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

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
    initialRouteName: 'BrowseCategory',
  }
);

const TabNavigator = createBottomTabNavigator (
    {
      Main: {
          screen: RootStack,
          navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-home"
                    color={tintColor}
                    size={30}
                />
            ),
            tabBarOptions: {
    showLabel: false
}
        })
            },
           Add: {
          screen: AddItem,
          navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-add-circle-outline"
                    color={tintColor}
                    size={30}
                />
            ),
            tabBarOptions: {
    showLabel: false
}
        })
            },
        
      Profile: {
        screen: Profile,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-man"
                    color={tintColor}
                    size={30}
                />
            ),
            tabBarOptions: {
    showLabel: false
}
        })
      }
    }

  )

export default TabNavigator;
