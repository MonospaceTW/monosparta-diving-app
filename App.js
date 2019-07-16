import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Pages from './components/Pages'

export default class App extends React.Component {
  render() {
    return (
    <Pages/>
    )
  }
}
