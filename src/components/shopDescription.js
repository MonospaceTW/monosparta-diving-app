import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Styles from '../config/style'

const styles = StyleSheet.create({
  txt: {
    fontSize: 15,
    lineHeight: 20
  },
})

export default class ShopDescription extends React.Component {


  render() {
    return (
      <View>
          <Text style={Styles.title}>{this.props.name}</Text>
        <View style={Styles.content}>
          <Text style={styles.txt}>{this.props.description}</Text>
        </View>
      </View>
    );
  }

}
