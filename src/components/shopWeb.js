import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons'


const styles = StyleSheet.create({
  webContainer: {
    marginTop: 25,
  },
  rowFlexDirection: {
    flexDirection: 'row'
  },
  subTitle: {
    fontSize: 15
  },
  icon: {
    color: '#0288D1',
    marginRight: 15
  },
  webTxt: {
    alignItems: 'flex-end'
  },
  linkTxt: {
    color: 'blue',
  },
})

export default class ShopWeb extends React.Component {


  render() {
    return (
      <View style={styles.webContainer}>
        <View style={styles.rowFlexDirection}>
          <FontAwesome name="globe" size={24} style={styles.icon} />
          <Text style={styles.subTitle}>網站連結</Text>
        </View>
        <View style={styles.webTxt}>
          <Text onPress={this.props.onClick} style={styles.linkTxt}>{this.props.web1}</Text>
        </View>
      </View>
    );
  }

}
