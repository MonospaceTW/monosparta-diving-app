import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import Styles from '../config/style'

const styles = StyleSheet.create({
  infoContainer: {
    marginBottom: 30
  },
})

export default class ShopDescription extends React.Component {


  render() {
    return (
      <View>
        <View>
          <Text style={Styles.title}>{this.props.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{this.props.description}</Text>
        </View>
      </View>
    );
  }

}
