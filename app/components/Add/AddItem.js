import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableHighlight, Switch, Image} from 'react-native';
import { Constants } from 'expo';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import DateTimePicker from 'react-native-modal-datetime-picker';

import axios from 'axios';

var moment = require('moment');

// You can import from local files


export default class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      name:"",
      category:"",
      quantity:"",
      unit:"",
      owner_id:"",
      owner_name:"",
      exp:"",
      language: "Broccoli",
      categories: [
        {value:"Vegetable"},
        {value:"Meat"},
        {value:"Seafood"},
        {value:"Dairy"},
        {value:"Fruit"},
        {value:"Misc."}
      ],
      isDateTimePickerVisible: false
    }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    const formatted = moment(date).format('YYYY-MM-DD');
    this.setState({exp: formatted})
    console.log('A date has been picked: ', formatted);
    this._hideDateTimePicker();
  };

  handleSubmit = () => {
    if (this.state.name == "") {
      return;
    }
    const body = {
      name: this.state.name,
      category: this.state.category.toLowerCase(),
      qty: this.state.quantity,
      exp: this.state.exp,
      unit: this.state.unit,
      user: "5b98a5a41c9d44000064ed27"
    }

    axios({
      method: 'POST',
       url: "http://192.168.1.4:3000/insert/item",
      data: body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res != null) {
        console.log("SUCCESS");
      }
      else {
        console.log("FAILURE");
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Cancel</Text>
        </View>

        <TextField
          label='Name'
          onChangeText = {(input) => this.setState({name: input})}
          containerStyle={styles.name}
          value={this.state.name}

        />

        <Dropdown
          label="Category"
          data={this.state.categories}
          containerStyle={styles.categoryDropdown}
          itemCount={6}
          onChangeText = {(input) => this.setState({category: input})}
        />
          <View style={styles.expiration}>
            <TextInput
              placeholder="Expiration Date"
            />
            <TouchableHighlight onPress={this._showDateTimePicker}>
              <Image
                source={require('../../../images/calendar.png')}
                style={styles.calendar}
              />
            </TouchableHighlight>
          </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />

        <TextField
          label='Quantity'
          onChangeText={ (input) => this.setState({ quantity:input }) }
          containerStyle={styles.name}
        />

        <TextField
          label='Unit'
          onChangeText={ (input) => this.setState({ unit:input }) }
          containerStyle={styles.name}
        />


        <View style={styles.expiration}>

          <View><Text>Communal</Text></View>
          <Switch>
          </Switch>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.button} onPress={this.handleSubmit}><Text style={styles.buttonText}>Add Item</Text></TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 5,
    backgroundColor: "white"
    // backgroundColor: '#ecf0f1',
  },
  input: {
    height: 50,
    flex: 5,
    backgroundColor:'white',
    paddingLeft: 7,
    textAlign: 'left'
  },
  label: {
    paddingLeft: 10,
    height: 50,
    justifyContent: 'center',
    flex: 2,
    backgroundColor: 'white'
  },
  labelText: {
    fontSize: 16
  },
  row: {
    flexDirection: 'row',
    flex: 0,
    marginHorizontal: 10,
    paddingVertical: 10,
    marginTop: 25,
    marginBottom: 20,
  },
  expiration: {
    flexDirection: 'row',
    flex: 0,
    marginHorizontal: 10,
    borderBottomWidth: .5,
    paddingVertical: 10,
    marginTop: 25,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  block: {
    flexDirection: 'row',
    flex: 0,
    borderBottomWidth: .5
  },
  button: {
    height: 50,
    flex: 1,
    backgroundColor: 'rgba(85, 239, 196,1.0)',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 20,
    alignSelf: 'center'
  },
  header: {
    paddingTop: 25,
    paddingBottom: 10,
    paddingHorizontal:10,
    flexDirection: 'row',
    paddingLeft: 10,
    marginBottom: 10,
    justifyContent:'flex-end',
    borderBottomWidth: .5,
    borderColor: 'grey'
  },
  headerText: {
    color: 'red',
    fontSize: 18
  },
  categoryDropdown: {

    flex:1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 0,
    paddingTop:0
  },
  calendar: {
    height: 25,
    width: 25
  },
  name: {
    height: 25,
    flex:1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 0,
    paddingTop:0
  }
});
