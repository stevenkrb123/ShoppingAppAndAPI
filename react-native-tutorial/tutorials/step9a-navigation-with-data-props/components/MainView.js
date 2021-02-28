import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const MainView = (props) => {


  let output;
  if(props.isNameSaved)
  {
    output = (
      <View>
        <Text>Hello { props.name }</Text>
      </View>
    );
  }
  else
  {
    output = (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={ { borderWidth: 1, borderColor: 'black', width: '70%', height: 30} }
          placeholder="Your name"
          onChangeText={ (value) => { props.onNameChange(value) }}
          value={ props.name }>
        </TextInput>
        <Button
          title="Save"
          onPress={ props.onSaveName }
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Main View</Text>
      <Text>Please enter your name</Text>
      { output }
    </View>

  )
}

export default MainView
