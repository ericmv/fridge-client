import React from 'react'
import { Modal, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DisplayModal = (props) => (
  <Modal visible={ props.display } animationType = "slide" 
         onRequestClose={ () => console.log('closed') }>>
    <View style={styles.modal}>
      <Text style = { styles.text }>
        { props.modal.name }
      </Text>
      <TouchableOpacity onPress={props.onClose}><Text style = {styles.text}>Close Modal</Text></TouchableOpacity>
    </View>
  </Modal>
)

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    marginLeft: 90,
    height: 200,
    width: 200
  },
  text: {
    fontSize: 20,
    marginLeft: 150
  },
  modal: {
    flex: 1,
    marginTop: 100,
    backgroundColor: 'rgba(85, 239, 196,1.0)'
  }
})

export default DisplayModal;