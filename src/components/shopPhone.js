import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Linking,
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'



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
  linkTxt: {
    color: 'blue',
  },
})

export default class ShopPhone extends React.Component {

  onPhoneCall = () => {
    Linking.openURL(`tel:${this.props.phone1}`)
  }

  render() {
    return (
      <View style={styles.detailContainer}>
        <View style={styles.rowFlexDirection}>
          <FontAwesome name="phone" size={24} style={styles.icon} />
          <Text style={styles.subTitle}>聯絡電話</Text>
        </View>
        <View>
          <Text
            style={styles.linkTxt}
            onPress={this.onPhoneCall}
          >
            {this.props.phone1}</Text>
        </View>
      </View>
    );
  }

}
