
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, AsyncStorage} from 'react-native';
import TagList from './TagList'
import Tag from './Tag'
import InitialLabel from '../Labels/InitialLabel'

var moment = require('moment')

export default class Result extends Component {

  onPress = () => {
    AsyncStorage.getItem("user_id")
    .then((id) => {
      console.log(id, this.props.item.owner_id)
      if (id == this.props.item.owner_id) {
        this.props.onPress(this.props.item, true);
      }
      else {
       this.props.onPress(this.props.item, false); 
      }
    })
    .catch((err) => {
      console.log("could not retrieve id")
    })

  }
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
       url: "http://192.168.1.3:3000/insert/item",
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
    let tagListData = [];
    for (let key in this.props.item) {
      if (key === "category" || key === "quantity") {
        if (this.props.item[key] !== "") {
          if (key === "quantity" && this.props.item.unit) {
            tagListData.push({type:key, name:this.props.item[key] + " " + this.props.item.unit});
          }
          else {
            tagListData.push({type:key, name:this.props.item[key]});
          }
          
        }
      }
    }
    const today = moment();
    const expiration = moment(this.props.item.exp);

    const isExpired = expiration.diff(today, "days");
    let expTagColor = "#f6e58d"
    let expText = ""
    if (isExpired < 0) {
      expTagColor = "red"
      expText = "Expired"
    }
    else {
      expText = today.from(expiration, true)
    }
    return (
      <View style={styles.container}>
       <View style={styles.left}>
            <InitialLabel text={this.props.item.owner_name.charAt(0)}/>
        </View>
        <View style={styles.info}>
          <View style={styles.name}><Text style={styles.nameText}>{this.props.item.name}</Text></View>
          <View style={styles.name}><TagList data={tagListData}/></View>
        </View>
        <View style={styles.options}>
          <View style={styles.name}><Tag text={expText} color={expTagColor} marginRight={0}/></View>
          <TouchableOpacity style={styles.name} onPress={this.onPress}><Text style={styles.more}>...</Text></TouchableOpacity>
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
    alignItems: "center",
    marginTop: 5,
    marginHorizontal: 10
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
