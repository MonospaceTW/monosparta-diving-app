import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Styles from '../config/style';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 20
  },
  title: {
    marginBottom: 20
  },
  text: {
    marginBottom: 10,
    lineHeight: 25
  }
})

export default class ShopDescription extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={[Styles.title, styles.title]}>{this.props.name}</Text>
        <Text style={[Styles.text, styles.text]}>{this.props.description}</Text>
      </View>
    );
  }

}
