import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Pages from './src/components/Pages'


export default class App extends React.Component {
  render() {
    return (
    <Pages/>
    )
  }
}
