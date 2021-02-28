import React, { Component, useState } from 'react'
import * as theme from '../theme'
import { Text, View, TextInput, TouchableHighlight, Button, StyleSheet, Dimensions, Image } from 'react-native'
const { width, height } = Dimensions.get('window');
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

const Todos = (props) => {
  const [text, setText] = useState(null);
  const [data, setData] = useState(null);

  function searchByLocation(text) {
      axios.get(props.apiURI + '/products/location/' + text)
      .then(res => {
        console.log(res.data);
        setData(res.data)}
      )
  }

  return (
    <ScrollView style={styles.container}>
   
      <TextInput style={{ fontSize: 24, marginLeft: 15, width: 200, backgroundColor:'red' }} onChangeText={(text) => setText(text)} />
      <Button title="Search" onPress={() => searchByLocation(text)}></Button>
      {
        data == null ?
       props.todos.map(e =>
            <View style={styles.view} key={e.id}>
              <View >
                <Image style={styles.recommendationImage} source={{ uri: e.image }}></Image>
              </View>
              <View style={styles.forPriceandTitle}>
                <Text style={styles.viewText}>{e.title}</Text>
              </View>
              <View style={styles.forWordDescription2}><Text style={styles.textWordDes}>Description</Text></View>
              <View style={styles.forProductInfo}><Text style={styles.textForDes}> - {e.description}</Text></View>
              <View style={styles.forWordDescription2}><Text style={styles.textWordDes}>Category</Text></View>
              <View style={styles.forProductInfo}><Text style={styles.textForDes}> - {e.category}</Text></View>
              <View style={styles.forWordDescription2}><Text style={styles.textWordDes}>Location</Text></View>
              <View style={styles.forProductInfo}><Text style={styles.textForDes}> - {e.location}</Text></View>
              <View style={styles.forWordDescription2}><Text style={styles.textWordDes}>Shipping Type</Text></View>
              <View style={styles.forProductInfo}><Text style={styles.textForDes}> - {e.DeliveryType}</Text></View>
              <View style={styles.forWordDescription2}><Text style={styles.textWordDes}>Date of posting</Text></View>
              <View style={styles.forProductInfo}>
                <Text style={styles.textForDes}>{e.dateOfPosting}</Text>
              </View>
              <View style={styles.forWordDescription2}><Text style={styles.textWordDes}>Price: </Text></View>
              <View>
                <Text style={styles.viewText2}>{e.price}</Text>
              </View>
            </View>
          ) :   data.map(e => 
            <View style={styles.view} key={e.id}>
              <View >
                <Image style={styles.recommendationImage} source={{ uri: e.image }}></Image>
              </View>
              <View style={styles.forPriceandTitle}>
                <Text style={styles.viewText}>{e.title}</Text>
              </View>
              <View style={styles.forWordDescription2}><Text style={styles.textWordDes}>Description</Text></View>
              <View style={styles.forProductInfo}><Text style={styles.textForDes}> - {e.description}</Text></View>
              <View style={styles.forWordDescription2}><Text style={styles.textWordDes}>Category</Text></View>
              <View style={styles.forProductInfo}><Text style={styles.textForDes}> - {e.category}</Text></View>
              <View style={styles.forWordDescription2}><Text style={styles.textWordDes}>Location</Text></View>
              <View style={styles.forProductInfo}><Text style={styles.textForDes}> - {e.location}</Text></View>
              <View style={styles.forWordDescription2}><Text style={styles.textWordDes}>Shipping Type</Text></View>
              <View style={styles.forProductInfo}><Text style={styles.textForDes}> - {e.DeliveryType}</Text></View>
              <View style={styles.forWordDescription2}><Text style={styles.textWordDes}>Date of posting</Text></View>
              <View style={styles.forProductInfo}>
                <Text style={styles.textForDes}>{e.dateOfPosting}</Text>
              </View>
              <View style={styles.forWordDescription2}><Text style={styles.textWordDes}>Price: </Text></View>
              <View>
                <Text style={styles.viewText2}>{e.price}</Text>
              </View>
            </View>
            ) 
      }
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  recommendationImage: {
    width: (width - (theme.sizes.padding * 0.1)) / 1,
    height: (width - (theme.sizes.padding * 0.1)) / 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  container: {
    backgroundColor: '#EBF5FB',
    padding: 5
  },
  view: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#EBF5FB',
    alignSelf: 'center'
  },
  forProductInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    flex: 0.4,
    width: (width - (theme.sizes.padding * 0.1)) / 1,
    marginVertical: 10,
  },
  forPriceandTitle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 0.4,
    width: (width - (theme.sizes.padding * 0.2)) / 1,
    height: 60,
    marginLeft: 11,
    backgroundColor: "#EBF5FB",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 3
  },
  viewText: {
    fontSize: 35,
    marginLeft: 10,
    alignSelf: 'flex-start'
  },
  viewText2: {
    fontSize: 50,
    alignSelf: 'flex-end',
    marginRight: 20
  },
  forWordDescription: {
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  textWordDes: {
    fontSize: 20
  },
  viewWord: {
    fontSize: 20,
    alignContent: 'flex-start'
  },
  forWordDescription2: {
    alignItems: 'flex-start',
    marginLeft: 15
  },
  textForDes: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 15
  }
});

export default Todos




