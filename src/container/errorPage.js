import React, { Component } from 'react'
import {
  ImageBackground,
  StyleSheet
} from 'react-native'

export default class ErrorPage extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../assets/errorPage.jpg')} style={{ width: '100%', height: '100%' }} />
    );
  }
}
