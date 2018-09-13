import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableHighlight, Switch, Image} from 'react-native';
import { Constants } from 'expo';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import DateTimePicker from 'react-native-modal-datetime-picker';


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
        {value:"Meat/Poultry"},
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
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };
  render() {
    return (
      <View style={styles.container}>

        <TextField
          label='Name'
          onChangeText = {(input) => this.setState({name: input})}
          containerStyle={styles.categoryDropdown}

        />

        <Dropdown
          label="Category"
          data={this.state.categories}
          containerStyle={styles.categoryDropdown}
          itemCount={6}
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
          containerStyle={styles.categoryDropdown}
        />

        <TextField
          label='Unit'
          onChangeText={ (input) => this.setState({ unit:input }) }
          containerStyle={styles.categoryDropdown}
        />


        <View style={styles.expiration}>

          <View><Text>Communal</Text></View>
          <Switch>
          </Switch>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.button}><Text style={styles.buttonText}>Add Item</Text></TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 5,
    backgroundColor: '#ecf0f1',
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
    borderBottomWidth: .5,
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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 20,
    alignSelf: 'center'
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginBottom: 10
  },
  headerText: {
    flex: 1,
    fontSize: 17
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
  }
});
