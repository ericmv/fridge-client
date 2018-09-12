/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class BrowseCategory extends Component {

  handlePress = (category) => {
    this.props.navigation.navigate("Results", {category: category})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity ref='meat' style={styles.meats} onPress={this.handlePress.bind(this, 'meat')}>
          <View>
            <Text>Meat/Poultry</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity ref='etc' style={styles.etc} onPress={this.handlePress.bind(this, 'seafood')}>
          <View>
            <Text>Seafood</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity ref='vegetable' style={styles.vegetables} onPress={this.handlePress.bind(this, 'vegetable')}>
          <View>
            <Text>Vegetables</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity ref='fruit' style={styles.fruits} onPress={this.handlePress.bind(this, 'fruit')}>
          <View>
            <Text>Fruits</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity ref='etc' style={styles.etc} onPress={this.handlePress.bind(this, 'dairy')}>
          <View>
            <Text>Dairy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity ref='etc' style={styles.etc} onPress={this.handlePress.bind(this, 'misc')}>
          <View>
            <Text>Misc</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    meats: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center'
    },
    vegetables: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center'
    },
    fruits: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center'
    },
    etc: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }

  }
)

AppRegistry.registerComponent('BrowseCategory', () => BrowseCategory);
