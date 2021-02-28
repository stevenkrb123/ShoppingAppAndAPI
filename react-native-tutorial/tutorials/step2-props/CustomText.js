import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function CustomText(props) {
    return (
      <View>
        <Text>{ props.value }</Text>
      </View>
    )
}
