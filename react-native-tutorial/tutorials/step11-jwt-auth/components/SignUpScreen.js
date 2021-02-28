import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'

const SignUpScreen = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function signupPressed() {
    fetch(props.apiURI + '/registerBasic', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        if (response.ok == false) {
          throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
        }
        return response.json();
      })
      .then(json => {
        props.navigation.reset({
          index: 0,
          routes: [{ name: 'SignupCompleted' }],
        })
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
          value={username}
          placeholder="johndoe"
          onChangeText={value => setUsername(value)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={email}
          placeholder="test@email.com"
          onChangeText={value => setEmail(value)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={password}
          placeholder="password"
          onChangeText={value => setPassword(value)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => signupPressed()}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={
        () => props.navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })
      }>
        <Text style={styles.forgot_button}>Cancel</Text>
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


export default SignUpScreen
