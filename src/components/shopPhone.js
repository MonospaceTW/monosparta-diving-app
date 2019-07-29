import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Linking,
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Styles from '../config/style';


const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  subtitle: {
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
      <View style={styles.content}>

        <View style={styles.titleWrapper}>
          <FontAwesome name="phone" size={24} style={Styles.icon} />
          <Text style={styles.subtitle}>聯絡電話</Text>
        </View>

        <Text
          style={styles.linkTxt}
          onPress={this.onPhoneCall}
        >
          {this.props.phone1}
        </Text>

      </View>
    );
  }

}
