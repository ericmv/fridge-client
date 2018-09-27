
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {capitalize} from '../../helpers/helpers'
import axios from 'axios'

export default class BrowseUser extends Component {
  static navigationOptions = {
    title: "Owners"
  }
  constructor() {
    super();
    this.state = {
      owners: ''
    }
  }

  componentWillMount() {
    const id = this.props.navigation.getParam('id');
    axios({
        method: 'POST',
        url: "http://192.168.1.3:3000/browse/owners",
        data: {
          id: id
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.data != null) {
          console.log(res.data)
          this.setState({owners: res.data})
        }
        else {
          console.log("Could not find owners")
        }

      })
      .catch((err) => {
        console.log("Error processing query")
      })
  }
  handlePress = (id, name) => {
    this.props.navigation.navigate('Results', {type: "owner", id: id, title: name})
  }
  render() {
    return (
      this.state.owners ?
        <FlatList
        style={styles.container}
        data = {this.state.owners}
        keyExtractor={(item,index) => index.toString()}
        renderItem = {({item}) => {
          const name = item.name
          const id = item.user_id
          console.log(id)
          return (
            <TouchableOpacity onPress={this.handlePress.bind(this, id, name)} style={styles.section}>
              <Text style={styles.sectionText}>{item.name}</Text>
            </TouchableOpacity>
          )

        }

        }
        />

      : null
    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
      flexDirection: 'column',
      flex: 1,
      display:'flex'
    },
    section: {
      flex: 1,
      backgroundColor: '#535c68',
      height: 150,
      marginVertical: 5,
      marginHorizontal: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionText: {
      color: 'white',
      fontSize: 20
    }


  }
)

AppRegistry.registerComponent('BrowseUser', () => BrowseUser);
