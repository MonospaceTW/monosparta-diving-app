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
  detailContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
})

export default class ShopRate extends React.Component {


  render() {
    return (
      <View style={styles.detailContainer}>
              <View style={styles.rowFlexDirection}>
                <FontAwesome name="star" size={24} style={styles.icon} />
                <Text style={styles.subTitle}>評論</Text>
              </View>
            </View>
    );
  }

}
