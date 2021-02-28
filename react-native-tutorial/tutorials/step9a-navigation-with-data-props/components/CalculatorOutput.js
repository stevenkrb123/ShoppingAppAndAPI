import React from 'react'
import { View, Text } from 'react-native'

const CalculatorOutput = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 40, fontWeight: '700' }}>Calculator Output</Text>
      <Text>Result { props.valueA } + { props.valueB } = { props.valueA + props.valueB }</Text>
    </View>
  )
}

export default CalculatorOutput
