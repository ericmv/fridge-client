import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableHighlight, Picker, ActivityIndicator, Image} from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import DateTimePicker from 'react-native-modal-datetime-picker';
import InitialLabel from '../Labels/InitialLabel';

import {loadUserInfo} from '../../helpers/helpers'



export default class EditProfile extends React.Component {
  static navigationOptions = {
    headerTitle: "Edit Profile",
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Done"
      />
    ),
  };

  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name:"",
      username:"",
      email: "",
      phone: "",
      gender: "",
      data_loaded: true
    }
    this.getInfo()
  }

  getInfo = loadUserInfo.bind(this)
  setUserInfo(info) {
    this.setState({
      first_name: info.first_name,
      last_name:info.last_name,
      username:info.username,
      email: info.email,
      phone: info.phone,
      gender: info.gender,
      data_loaded: true
    })
  }
  render() {
    return (
      this.state.data_loaded ?
        <View style={styles.container}>
          <View style={styles.banner}>
            <View style={styles.label}>
              <InitialLabel text="E" size={90}/>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.label}>
              <Text style={styles.labelText}>First Name</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="First Name"
                value={this.state.first_name}
                style={styles.inputField}
                onChangeText = {(input) => this.setState({first_name: input})}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Last Name</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Last Name"
                value={this.state.last_name}
                style={styles.inputField}
                onChangeText = {(input) => this.setState({last_name: input})}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Username</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Username"
                value={this.state.username}
                style={styles.inputField}
                onChangeText = {(input) => this.setState({username: input})}
              />
            </View>
          </View>

          <View style={styles.password}>
            <Button
              title="Change Password"
              onPress={() => alert('This is a button!')}
            />
          </View>
          <Text style={styles.headerLabel}>Personal Information</Text>
          <View style={styles.row}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Email</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Email"
                value={this.state.email}
                style={styles.inputField}
                onChangeText = {(input) => this.setState({email: input})}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Phone</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Phone"
                value={this.state.phone}
                style={styles.inputField}
                onChangeText = {(input) => this.setState({phone: input})}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Gender</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Gender"
                value={this.state.gender}
                style={styles.inputField}
                onChangeText = {(input) => this.setState({gender: input})}
              />
            </View>
          </View>
        </View>
      :
      <ActivityIndicator />
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'white',
  },
  banner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 125,
    borderBottomWidth: .5,
    borderColor: 'grey'
  },
  row: {
    height: 50,
    flexDirection: 'row'
  },
  label: {
    flex: 1,
    paddingLeft: 15,
    // display: 'flex',
    justifyContent: 'center'
  },
  labelText: {
    // alignSelf: 'center'
    fontSize: 15
  },
  input: {
    flex: 3,
    justifyContent: 'center',
    borderBottomWidth: .5,
    marginRight: 10,
    borderColor: 'grey'
  },
  inputField: {
    paddingLeft: 5
  },
  password: {
    height: 75,
    // alignSelf: 'center',
    paddingVertical:20
  },
  headerLabel: {
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 10,
    paddingLeft:15
  }

});
