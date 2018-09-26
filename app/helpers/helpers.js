import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, AsyncStorage} from 'react-native';
import axios from 'axios';
import Expo from 'expo'


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
        this.props.navigation.navigate("App")
      }
      else {
        this.props.navigation.navigate("Auth")
      }

    })
    .catch((err) => {

      console.log("Could not validate session at this time")
      this.props.navigation.navigate("Auth");
    })
  } catch (err) {
    console.log("Error retrieving from store")
    this.props.navigation.navigate("Auth");
  }

}

export function request(url, data) {
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
        console.log("request success");
      }
      else {
        console.log("error retrieving data from", url)
      }
    })
    .catch((err) => {
      console.log(err.message)
      console.log("Could not POST")
    })
}

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function register () {
  const {status} = await Expo.Permissions.askAsync(Expo.Permissions.NOTIFICATIONS)
  if (status !== 'granted') {
    alert('You need to enable permissions')
  }
  const token = await Expo.Notifications.getExpoPushTokenAsync();
  console.log(token);
  AsyncStorage.getItem("user_id")
  .then((id) => {
    const data = {
      id: id,
      token: token
    }
    request('http://192.168.1.3:3000/notifications/token', data)
  })
  .catch((err) => {
    console.log("could not retrieve user id to register token for push notifications")
  })
  return
}

export function logout() {
  AsyncStorage.getItem("session_id")
  .then((id) => {
    const data = {session: id}
    console.log(id)
    request("http://192.168.1.3:3000/users/logout", data)
    this.props.navigation.navigate("Auth")
  })
  .catch((err) => {
    this.props.navigation.navigate("Auth")
  }) 
}