import React, {Component} from 'react'
import { Modal, View, Image, Text, StyleSheet, TouchableOpacity, Button, Switch, TextInput, TouchableHighlight } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class DisplayModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: "Save Changes",
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
    this.props.onChangeText("exp", formatted)

    console.log('A date has been picked: ', formatted);
    this._hideDateTimePicker();
  };

  
  render() {    
    console.log(this.props.name)
    renderDelete = () => {
      if (this.props.is_owner) {
        return (
          <TouchableHighlight onPress={this.props.onDelete} style={styles.headerItem}><Text style={styles.delete}>Delete Item</Text></TouchableHighlight>
        )
      }
      else {
        return (null)
      }
    }
    return (
      <Modal visible={ this.props.display } animationType = "slide" 
         onRequestClose={ () => console.log('closed') }>>
         <View style={styles.header}>
          {renderDelete()}
          <TouchableHighlight onPress={this.props.onClose} style={styles.headerItem}><Text style={styles.headerText}>Cancel</Text></TouchableHighlight>
        </View>
        <View style={styles.container}>
        
        <TextField
          label='Name'
          onChangeText = {(input) => this.props.onChangeText("name", input)}
          containerStyle={styles.name}
          value={this.props.name}
          editable={this.props.is_owner}

        />

        <Dropdown
          label="Category"
          value={this.props.category}
          data={this.state.categories}
          containerStyle={styles.categoryDropdown}
          itemCount={6}
          onChangeText = {(input) => this.props.onChangeText("category", input)}
        />
          <View style={styles.expiration}>
            <TextInput
              placeholder="Expiration Date"
              value={this.props.exp}
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
          onChangeText={ (input) => this.props.onChangeText( "quantity", input ) }
          containerStyle={styles.name}
          value={this.props.quantity}
          editable={this.props.is_owner}
        />

        <TextField
          label='Unit'
          onChangeText={ (input) => this.props.onChangeText( "unit", input ) }
          containerStyle={styles.name}
          value={this.props.unit}
          editable={this.props.is_owner}
        />


        <View style={styles.expiration}>

          <View><Text>Communal</Text></View>
          <Switch>
          </Switch>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.button} onPress={this.props.onSubmit}><Text style={styles.buttonText}>{this.state.buttonText}</Text></TouchableHighlight>
        </View>

      </View>
      </Modal>

    )
  }
}

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    marginLeft: 90,
    height: 200,
    width: 200
  },
  text: {
    fontSize: 20,
    marginLeft: 150
  },
  modal: {
    flex: 1,
    marginTop: 100,
    backgroundColor: 'rgba(85, 239, 196,1.0)'
  },
  container: {
    flex: 15,

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
    flex: 1,
    paddingTop: 30,
    paddingHorizontal:10,
    flexDirection: 'row',
    display: 'flex',
    paddingLeft: 10,
    marginBottom: 10,
    borderBottomWidth: .5,
    borderColor: 'grey'
  },
  headerText: {
    color: 'red',
    fontSize: 18,
    flex: 1,
    textAlign: 'right'
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
  },
  delete: {
    color: 'red',
    fontSize: 18,
    flex: 1,
    textAlign: 'left'
  },
  headerItem: {
    flex: 1
  }

})

