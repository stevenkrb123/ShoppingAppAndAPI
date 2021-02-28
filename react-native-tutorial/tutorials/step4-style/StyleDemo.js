import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class StyleDemo extends Component {
  render() {
    return (
      <View>
        <Text style={ { color: 'green', fontSize: 36 } }>
          Inline styled text
        </Text>
        <Text style={ styles.exampleStyle }>
          Stylesheet styled text
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  exampleStyle: {
    color: 'red',
    borderWidth: 1,
    borderColor: 'black'
  }
});