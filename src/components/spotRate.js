import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

import Styles from '../config/style'


export default class ShopRate extends React.Component {


  render() {
    return (
      <View style={Styles.component}>
        <Text style={Styles.title}>評論</Text>
      </View>
    );
  }

}
