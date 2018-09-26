/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, FlatList, AsyncStorage} from 'react-native';
import axios from 'axios'
import Result from './Result'
import ResultModal from '../Modal/ResultModal'

export default class Results extends Component {

  constructor () {
    super();
    this.state = {
      results: [],
      modal: {
	      	name: "",
	        category: "",
	        quantity:"",
	        unit:"",
	        owner_id:"",
	        owner_name:"",
	        item_id: "",
	        exp:"",
	      },
      is_owner: false,
      display: false
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
     headerTitleStyle : {textAlign: 'center',alignSelf:'center', fontSize: 20},
        headerStyle:{
            backgroundColor:'white',
        },
    });

  onSave = () => {
  	axios({
        method: 'POST',
        url: "http://192.168.1.3:3000/update",
        data: {
          item_id: this.state.modal.item_id,
          item: this.state.modal
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.data != null) {
          this.closeModal();
        }
        else {
          console.log("Could not find items")
        }

      })
      .catch((err) => {
        console.log("Error processing query")
      })
  }

  onChangeText = (field, value) => {
    let newModal = this.state.modal
    newModal[field] = value
    this.setState({modal: newModal})
  }

  onDelete = () => {
  	axios({
        method: 'POST',
        url: "http://192.168.1.3:3000/delete/item",
        data: {
          item: this.state.modal.item_id
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.data != null) {

          this.removeFromResults();
        }
        else {
          console.log("Could not find items")
        }

      })
      .catch((err) => {
        console.log("Error processing query")
      })
  }

  displayModal = (item, is_owner) => {
    this.setState(
      {
        modal: item,
        is_owner: is_owner,
      }, () => {
      this.setState({display: true})
    })
  }
  closeModal = () => {
    this.setState({display: false})
  }

  removeFromResults = () => {
  	let id = this.state.modal.item_id;
  	let index = this.state.results.findIndex(x => x.item_id == id);
  	let newResults = this.state.results;
  	newResults.splice(index, 1);
  	this.setState({results: newResults}, () => {
  		this.setState({display: false})
  	})
  }

  componentWillMount () {
    let data = {}
    let url = ""
    const category = this.props.navigation.getParam('category')
    const type = this.props.navigation.getParam('type')
    console.log(type)
    if (type == "owner") {
      data = {
        user: this.props.navigation.getParam('id')
      }
      url = "http://192.168.1.3:3000/browse/user"
    }
    else if (type == "category") {
      data = {
        category: this.props.navigation.getParam('category')
      }
      url = "http://192.168.1.3:3000/browse/category"
    } else {
      data = {
        fridge: this.props.navigation.getParam('fridge')
      }
      url = "http://192.168.1.3:3000/browse/all"
    }
    AsyncStorage.getItem("user_id")
    .then((id) => {
      console.log(url)
      if (type== 'category') {
        data['user'] = id
      }
      console.log(data)
      axios({
        method: 'POST',
        url: url,
        data: data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.data != null) {
          this.setState({results: res.data})
        }
        else {
          console.log("Could not find items in category")
        }

      })
      .catch((err) => {
        console.log("Error processing query")
      })
    })

  }


  render() {
  	let submit = this.closeModal;
  	if (this.state.is_owner) {
  		submit = this.onSave;
  	}
    const section = this.props.navigation.getParam('section', 'fridge')
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.results}
          renderItem = {({item}) => <Result item={item} onPress={this.displayModal.bind(this)}/>}
          keyExtractor={(item,index) => item.item_id}
        />
        <ResultModal 
        onChangeText={this.onChangeText.bind(this)} 
        display={this.state.display} 
        name={this.state.modal.name}
        category={this.state.modal.category}
        quantity={this.state.modal.quantity}
        exp={this.state.modal.exp}
        owner_id={this.state.modal.owner_id}
        unit={this.state.modal.unit} 
        onDelete={this.onDelete.bind(this)}
        is_owner={this.state.is_owner}
        onSubmit={submit.bind(this)}
        onClose={this.closeModal.bind(this)}/>

      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: 'column',
    }

  }
)

AppRegistry.registerComponent('Results', () => Results);
