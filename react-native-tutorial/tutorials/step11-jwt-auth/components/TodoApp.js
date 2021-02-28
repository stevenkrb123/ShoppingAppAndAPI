import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import View1 from './todoApp/View1'
import Todos from './todoApp/Todos'
import axios from 'axios'

const Stack = createStackNavigator();

export default class TodoApp extends Component {

  constructor(props) {

    super(props);
    this.state = {
      todos: []
    }    
  }

  componentDidMount() {
    axios.get(this.props.apiURI + '/products')
    .then(res => 
      this.setState({todos: res.data})
    )
  }

  // onTodoAdd = (description, dueDate) => {
  //   fetch(this.props.apiURI + '/todosJWT', {
  //     method: 'POST',
  //     headers: {
  //       "Authorization": "Bearer " + this.props.jwt,
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ description, dueDate })
  //   })
  //   .then(response => {
  //     if (response.ok == false) {
  //       throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
  //     }
  //     return response.json();
  //   })
  //   .then(json => {
  //     console.log("Todos POST successful")
  //     console.log("Received following JSON");
  //     console.log(json);

  //     this.setState({ todos: json})
  //   })
  //   .catch(error => {
  //     console.log("Error message:")
  //     console.log(error.message)
  //   });
  // }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="View1">
          { props => <View1 {...props} onLogout={ this.props.onLogout } userName={this.props.userName}/>}
        </Stack.Screen>
        <Stack.Screen name="Todos" options={{ title: 'Todo List' }} >    
          { props => <Todos {...props} todos={ this.state.todos } apiURI={this.props.apiURI}/>}
        </Stack.Screen>
      </Stack.Navigator>
    )
  }
}
