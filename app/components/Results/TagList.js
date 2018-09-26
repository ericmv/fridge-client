
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Tag from './Tag';

export default class TagList extends Component {

  render() {
    const tagColors = {
      category: {
        vegetable: "#1dd1a1",
        fruit:"#f6e58d",
        meat:"#f53b57",
        dairy:"#fdcb6e",
        misc:"#dfe6e9",
        seafood:"#00cec9"
      },
      quantity: "#3c6382",
      exp: "#fad390"
    }
    return (
        <FlatList
          horizontal
          data={this.props.data}
          renderItem = {({item}) => {
            const type = item.type;
            let color = "";
            if (type === "category") {
              color = tagColors.category[item.name]
            } else {
              color = tagColors[type]
            }
            return (
              <Tag color={color} text={item.name}/>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
    );
  }
}


const styles = StyleSheet.create(
  {

  }
)

AppRegistry.registerComponent('TagList', () => TagList);
