import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Dimensions1 extends Component {
  render() {
    return (
      <View style={{ height: 400, paddingTop: 20, flexDirection: 'column' }}>
        <Text style={{flex: 1 }}>Flex demo</Text>
        <View style={{flex: 2, backgroundColor: 'green'}}></View>
        <View style={{flex: 3, backgroundColor: 'red'}}></View>
        <View style={{flex: 4, backgroundColor: 'blue'}}></View>
      </View>
    )
  }
}
