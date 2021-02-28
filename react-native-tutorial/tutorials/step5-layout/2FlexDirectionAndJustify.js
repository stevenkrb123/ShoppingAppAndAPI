import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class FlexDirectionAndJustify extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 20,
        flexDirection: 'column', // MAIN AXIS
        justifyContent: 'space-evenly', // MAIN AXIS - Test out all the values
        alignItems: 'baseline' // CROSS AXIS
      }}>
        <Text style={{  width: '100%', borderWidth: 1, borderColor: 'black' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nulla elementum, molestie turpis at, consectetur elit. Aliquam elementum, urna id bibendum vulputate, nulla quam vehicula purus, sit amet pharetra nisi nulla quis ante. Vivamus mattis porttitor augue sed scelerisque. Nunc sodales, mi non molestie feugiat, nisl odio efficitur quam, condimentum condimentum augue nunc sit amet augue. Etiam pulvinar aliquet est, tempus pharetra magna suscipit at.
        </Text>
        <View style={[ styles.box, { backgroundColor: 'green' }]}></View>
        <View style={[ styles.box, { backgroundColor: 'red' }]}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    height: 80,
    width: 80
  }
})