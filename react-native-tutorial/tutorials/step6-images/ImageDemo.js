import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'


export default class ImageDemo extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green', borderWidth: 1}}>
        <Image source={ this.props.image } style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}></Image>
        <View style={{
          position: 'absolute',
          top: 20,
          right: 20,
          padding: 5,
          backgroundColor: 'rgba(255,255,255,0.5)',
          width: 200,
          alignItems: 'center'
        }}>
          <Text style={{ flex: 1, fontSize: 40 }}>{ this.props.text }</Text>
        </View>


      </View>
    )
  }
}
