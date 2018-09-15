
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
       <View style={styles.left}>
            <View style={styles.ownerContainer}><Text style={styles.ownerLabel}>E</Text></View>
        </View>
        <View style={styles.info}>
          <View style={styles.name}><Text style={styles.nameText}>{this.props.item.name}</Text></View>
          <View style={styles.name}><TagList data={tagListData}/></View>
        </View>
        <View style={styles.options}>
          <View style={styles.name}><Tag text="7 days" color="#f6e58d" marginRight={0}/></View>
          <View style={styles.name}><Text style={styles.more}>...</Text></View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
    flexDirection: 'row',
    borderBottomWidth: .5,
    height: 80,
    backgroundColor: "#fcfcfc",
    alignItems: "center"
  },
  left: {
    flex: 1,
    alignItems: "center"

  },
  ownerContainer: {
    
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#40739e",
    borderWidth: 0
  },
  ownerLabel: {
    margin: "auto",
    color: "#FFF",
    fontSize: 32,
  },
  info: {
    flex: 2,
    justifyContent: "space-around",
    flexDirection: "column",
  },
  options: {
    paddingRight: 10,
    alignItems: "flex-end",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  name: {
  },
  nameText: {
    marginBottom: 7,
    fontFamily: "PingFangHK-Light",
    fontSize: 24,
    fontWeight: "700"
  },
  category: {
    fontWeight: "600",
    fontFamily: "PingFangHK-Light",
    fontSize: 14,
  },
  exp: {
    marginBottom: 15,
    fontFamily: "PingFangHK-Light",
    fontSize: 10,
  },
  more: {
    fontWeight: "700",
    fontSize: 16,
    marginTop: 15
  }
  }
)

AppRegistry.registerComponent('Result', () => Result);
