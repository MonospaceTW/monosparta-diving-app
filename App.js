import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, Navigator } from 'react-native';
import Home from './components/hSpot/index';
import Pages from './components/Pages';
import SildeShow from './components/sildeShow/index'
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class App extends React.Component {

  render () {
    return (
      <Pages/>
      // <SildeShow/>
    );
  }

}
