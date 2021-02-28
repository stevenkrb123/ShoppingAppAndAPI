import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
/* See list of available icon sets in vector-icons:
   https://github.com/oblador/react-native-vector-icons#bundled-icon-sets
   */

export default class IconMix extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: 'black', justifyContent: 'space-evenly'}}>
        <Ionicons name="md-cloud-circle" size={60} color="white" />
        <Ionicons name="md-card" size={60} color="white" />
        <Ionicons name="md-chatboxes" size={60} color="white" />
        <Ionicons name="md-star-outline" size={60} color="white" />
      </View>
    )
  }
}
