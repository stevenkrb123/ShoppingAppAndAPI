import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Ionicons } from 'react-native-vector-icons';


const CalculatorInput = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 40, fontWeight: '700' }}>Calculator Input</Text>
      <View style={ { flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={{ flex:2, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Value 1</Text>
          <TextInput
            style={ { borderWidth: 1, borderColor: 'black', width: '70%', height: 30} }
            placeholder="2"
            onChangeText={ (value) => { props.onValueChange('A', value) }}
            value={ props.valueA }
            keyboardType={'numeric'}
            returnKeyType='done'>
          </TextInput>
        </View>
        <View style={{ flex:1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Ionicons name="ios-add" color={'black'} size={30} />
        </View>
        <View style={{ flex:2, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Value 2</Text>
          <TextInput
            style={ { borderWidth: 1, borderColor: 'black', width: '70%', height: 30} }
            placeholder="5"
            onChangeText={ (value) => { props.onValueChange('B', value) }}
            value={ props.valueB }
            keyboardType={'numeric'}
            returnKeyType='done'>
          </TextInput>
        </View>
      </View>
      <Text style={{ marginTop: 20, color: 'gray' }}>See the output in the output tab</Text>
    </View>
  )
}

export default CalculatorInput
