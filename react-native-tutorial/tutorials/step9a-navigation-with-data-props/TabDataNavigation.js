import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainView from './components/MainView'
import CalculatorInput from './components/CalculatorInput'
import CalculatorOutput from './components/CalculatorOutput'
import { Ionicons } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default class TabDataNavigation extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      name: "",
      calculatorA: 0,
      calculatorB: 0,
      isNameSaved: false
    }

  }

  onNameChange = newName => {
    this.setState({ name: newName })
  }

  onSaveName = () => {
    this.setState({ isNameSaved: !this.state.isNameSaved })
  }

  setCalculatorValue = (name, value) => {
    this.setState({
      ['calculator' + name]: parseInt(value)
    });
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Main"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" color={color} size={size} />)
            }}
          >
            { props => <MainView
                          {...props}
                          name={ this.state.name }
                          onNameChange={ this.onNameChange }
                          onSaveName={ this.onSaveName }
                          isNameSaved={ this.state.isNameSaved }
                        />}
          </Tab.Screen>
          <Tab.Screen
            name="Calculator Input"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-calculator" color={color} size={size} />)
            }}
          >
            { props => <CalculatorInput
                          onValueChange={ this.setCalculatorValue }
                          valueA={ this.state.calculatorA }
                          valueB={ this.state.calculatorB }
                        />
            }
          </Tab.Screen>
          <Tab.Screen
            name="Calculator Output"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="md-grid" color={color} size={size} />)
            }}
          >
            { props => <CalculatorOutput
                          valueA={ this.state.calculatorA }
                          valueB={ this.state.calculatorB }
                        />
            }
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
