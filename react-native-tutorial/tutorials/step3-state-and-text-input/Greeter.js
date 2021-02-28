import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

export default class Greeter extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      greeterName: ""
    };
  }

  setName = (name) =>
  {
    this.setState({ greeterName: name });
  }

  render() {
    return (
      <View>
        <Text>What is your name?</Text>
        <TextInput
          placeholder="John Doe"
          onChangeText={ this.setName }
          value={this.state.text}>
        </TextInput>
        { this.state.greeterName == "" ?
          null :
          <Text>Greetings {this.state.greeterName}</Text> }
      </View>
    )
  }
}
