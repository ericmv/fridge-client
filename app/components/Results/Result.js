
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TagList from './TagList'
import Tag from './Tag'

export default class Result extends Component {




  render() {
    let tagListData = [];
    for (let key in this.props.item) {
      if (key === "category" || key === "owner_name") {
        if (key !== "") {
          tagListData.push({type:key, name:this.props.item[key]});
        }
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Text style={styles.name}>{this.props.item.name}</Text>
          <View style={{marginTop: 5, marginRight: 5}} ><Tag color="#0be881" text="4 days"/></View>
        </View>
        <View style={styles.bottomRow}>
          <View>
            <TagList data={tagListData} />
          </View>
          <View><Text style={styles.qty}>Qty: {this.props.item.quantity} {this.props.item.unit} </Text></View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      height: 100,
      backgroundColor: "#636e72",
      justifyContent: 'space-between',
      borderBottomWidth: .5
    },
    topRow: {
      flexDirection: 'row',
      paddingTop: 5,
      justifyContent: 'space-between'
    },
    bottomRow: {
      flexDirection: 'row',
      paddingBottom: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    name: {
      color: 'white',
      fontSize: 24,
      paddingLeft:10
    },
    qty: {
      color: 'white',
      fontSize: 16,
      paddingRight:5
    }
  }
)

AppRegistry.registerComponent('Result', () => Result);
