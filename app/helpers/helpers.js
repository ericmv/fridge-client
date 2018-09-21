import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, AsyncStorage} from 'react-native';
import axios from 'axios';


export async function isLoggedIn() {
  try {
    let id = await AsyncStorage.getItem("session_id");
    if (id == null) {
      console.log("No Session ID stored. Redirecting to Login")
      this.props.navigation.navigate("Login");
    }
    axios({
      method: 'POST',
      url: "http://192.168.1.3:3000/users/validateSession",
      data: {
        session: id
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.data != null) {
        console.log("success");
      }
      else {
        this.props.navigation.navigate("Login")
      }

    })
    .catch((err) => {

      console.log("Could not validate session at this time")
      this.props.navigation.navigate("Login");
    })
  } catch (err) {
    console.log("Error retrieving from store")
    this.props.navigation.navigate("Login");
  }

}

export function request(url, data) {
  console.log("")
}

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}