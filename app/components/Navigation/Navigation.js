import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import HomeScreen from '../HomeScreen/HomeScreen';
import BrowseHome from '../Browse/BrowseHome';
import BrowseCategory from '../Browse/BrowseCategory';
import BrowseUser from '../Browse/BrowseUser';
import Results from '../Results/Results';
import Login from '../Validate/Login';
import AddItem from '../Add/AddItem';
import Profile from '../Profile/Profile';
import ResultModal from '../Modal/ResultModal';

import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const RootStack = createStackNavigator(
  {
    Home:{screen: HomeScreen},
    Browse:{screen: BrowseHome},
    BrowseCategory: {screen: BrowseCategory},
    Login: {screen: Login},
    Results: {screen: Results},
    Add: {screen: AddItem},
    BrowseUser: {screen: BrowseUser}
  },
  {
    initialRouteName: 'Home',
  }
);

export default class TabNavigator extends Component {
	constructor() {
		super();
		this.state = {
			display: false
		}
	}
	onClose=()=> {
		this.setState({display: false})
	}
	onOpen=()=>{
		this.setState({display: true})
	}
	TabNavigator = createBottomTabNavigator (
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
        
      test: {
        screen: props => <ResultModal display={this.state.display} modal={{name:"TEST"}} onClose={this.onClose}/>,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <TouchableOpacity onPress={this.onOpen}><Icon
                    name="ios-man"
                    color={tintColor}
                    size={30}
                /></TouchableOpacity>
            ),
            tabBarOptions: {
			    showLabel: false
			},
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
			},
        })
      }
      
    }


  )
	render() {
		return (
		  <this.TabNavigator />
		);
	}
}


