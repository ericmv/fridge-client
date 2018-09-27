import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import HomeScreen from '../HomeScreen/HomeScreen';
import BrowseHome from '../Browse/BrowseHome';
import BrowseCategory from '../Browse/BrowseCategory';
import BrowseUser from '../Browse/BrowseUser';
import Results from '../Results/Results';
import Login from '../Validate/Login';
import AddItem from '../Add/AddItem';
import Profile from '../Profile/Profile';
import ResultModal from '../Modal/ResultModal';
import AuthLoadingScreen from '../Validate/AuthLoadingScreen';
import EditProfile from '../Profile/EditProfile';

import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const MainStack = createStackNavigator(
  {
    Home:{screen: BrowseHome},
    BrowseCategory: {screen: BrowseCategory},
    Results: {screen: Results},
    BrowseUser: {screen: BrowseUser},
  },
  {
    initialRouteName: 'Home',
  }
);


const AuthStack = createStackNavigator(
  {
    Login: Login
  },
  {
    initialRouteName: 'Login',
  }
);

const ProfileStack = createStackNavigator(
  {
    Home: Profile,
    Edit: EditProfile,
    Items: Results
  },
  {
    initialRouteName: 'Home'
  }
);

const TabNavigator = createBottomTabNavigator (
    {
      Main: {
          screen: MainStack,
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
        screen: ProfileStack,
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



// RootStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   if (navigation.state.index == 0) {
//     tabBarVisible = false;
//   }

//   return {
//     tabBarVisible,
//   };
// };

export default RootStack = createSwitchNavigator({
  App: TabNavigator,
  Auth: AuthStack,
  AuthLoading: AuthLoadingScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

class LoginStack extends Component {
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
  LoginStack = createStackNavigator(
  {
    Login: {screen: Login},
    Main: {screen: TabNavigator}
  },
  {
    initialRouteName: 'Login',
  }
);

	render() {
		return (
		  <this.LoginStack />
		);
	}
}
