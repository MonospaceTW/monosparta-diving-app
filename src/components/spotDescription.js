import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

import Styles from '../config/style'

export default class SpotDescription extends React.Component {


  render() {
    return (
      <View style={Styles.component}>
        <Text style={Styles.title}>{this.props.name}　{this.props.level}</Text>
        <Text style={Styles.content}>{this.props.description}</Text>
      </View>
    );
  }

}
