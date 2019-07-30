import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Styles from '../config/style';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 15
  },
})

export default class NearShop extends React.Component {


  render() {
    return (
      <View style={Styles.component}>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <FontAwesome name="ship" size={18} style={Styles.icon} />
          <Text style={Styles.subtitleGray}>附近潛店</Text>
        </View>
      </View>
    );
  }

}
