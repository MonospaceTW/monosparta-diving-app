import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import Styles from '../config/style'

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 15
  },
})

export default class NearShop extends React.Component {


  render() {
    return (
      <View style={Styles.component}>
        <Text style={Styles.title}>附近潛店</Text>
      </View>
    );
  }

}
