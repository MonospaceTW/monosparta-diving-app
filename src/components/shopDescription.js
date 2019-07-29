import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import Styles from '../config/style'


export default class ShopDescription extends React.Component {


  render() {
    return (
      <View>
          <Text style={Styles.title}>{this.props.name}</Text>
        <View style={Styles.content}>
          <Text>{this.props.description}</Text>
        </View>
      </View>
    );
  }

}
