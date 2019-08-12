import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Linking,
} from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Styles from '../config/style';
import Colors from '../config/color';


const styles = StyleSheet.create({
  linkTxt: {
    color: Colors.mainBlue
  },
})

export default class ShopPhone extends React.Component {

  onTelCall = () => {
    Linking.openURL(`tel:${this.props.phone1}`)
  }

  onMobileCall = () => {
    Linking.openURL(`tel:${this.props.phone2}`)
  }

  onShowTelPhone = () => {
    if (this.props.phone1 !== '') {
      return (
        <Text
          style={styles.linkTxt}
          onPress={this.onTelCall}>
          {this.props.phone1}
        </Text>
      )
    }
  }

  onShowPhone = () => {
    if (this.props.phone2 !== '') {
      return (
        <Text style={styles.linkTxt}
          onPress={this.onMobileCall}>
          {this.props.phone2}
        </Text>)
    }
  }

  render() {
    return (
      <View style={Styles.component}>

        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <FontAwesome name="phone" size={24} style={Styles.icon} />
          <Text style={Styles.subtitleGray}>聯絡電話</Text>
        </View>

          {this.onShowTelPhone()}
          {this.onShowPhone()}
      

      </View>
    );
  }

}
