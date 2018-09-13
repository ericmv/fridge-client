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
            <Text style={styles.text}>Meat/Poultry</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity ref='etc' style={styles.seafood} onPress={this.handlePress.bind(this, 'seafood')}>
          <View>
            <Text style={styles.text}>Seafood</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity ref='etc' style={styles.dairy} onPress={this.handlePress.bind(this, 'dairy')}>
          <View>
            <Text style={styles.text}>Dairy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity ref='vegetable' style={styles.vegetables} onPress={this.handlePress.bind(this, 'vegetable')}>
          <View>
            <Text style={styles.text}>Vegetables</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity ref='fruit' style={styles.fruits} onPress={this.handlePress.bind(this, 'fruit')}>
          <View>
            <Text style={styles.text}>Fruits</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity ref='etc' style={styles.misc} onPress={this.handlePress.bind(this, 'misc')}>
          <View>
            <Text style={styles.text}>Misc</Text>
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
      backgroundColor: '#f53b57',
      alignItems: 'center',
      justifyContent: 'center',
    },
    seafood: {
      flex: 1,
      backgroundColor: '#00cec9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    vegetables: {
      flex: 1,
      backgroundColor: '#1dd1a1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fruits: {
      flex: 1,
      backgroundColor: '#f6e58d',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dairy: {
      flex: 1,
      backgroundColor: '#fdcb6e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    misc: {
      flex: 1,
      backgroundColor: "#dfe6e9",
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 20
    }

  }
)

AppRegistry.registerComponent('BrowseCategory', () => BrowseCategory);
