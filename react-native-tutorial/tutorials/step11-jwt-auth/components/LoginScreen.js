import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Base64 } from 'js-base64'



const LoginScreen = (props) => {
  const [userName, setUserName] = useState("tester");
  const [password, setPassword] = useState("testerpassword");

  function loginClick() {
    fetch(props.apiURI + '/loginForJWT', {
      method: 'GET',
      headers: {
        "Authorization": "Basic " + Base64.encode(userName + ":" + password)
      }
    })
      .then(response => {
        if (response.ok == false) {
          throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
        }
        return response.json();
      })
      .then(json => {
        console.log("Login successful")
        console.log("Received following JSON");
        console.log(json);

        props.onLoginReceiveJWT(json.token);
        props.onGetUserName(userName);
      })
      .catch(error => {
        console.log("Error message:")
        console.log(error.message)
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={ value => setUserName(value)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={ value => setPassword(value)}
        />
      </View>

      <TouchableOpacity onPress={ () => props.navigation.navigate('Signup') }>
        <Text style={styles.forgot_button}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={ () => loginClick() }>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});

export default LoginScreen
