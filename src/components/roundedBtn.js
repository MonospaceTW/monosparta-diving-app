import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

import Styles from '../config/style';
import Colors from '../config/color';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View } from 'native-base';


const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 40,
    marginTop: 10,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  btnTxt: {
    color: Colors.gray,
    fontSize: 14,
    padding: 10
  },
  btnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
export default class RoundedBtn extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.btn} onPress={this.props.onPressBtn}>
        <View style={styles.btnWrapper}>
          <Text style={styles.btnTxt}>{this.props.text}</Text>
          <FontAwesome name="search" size={16} style={Styles.icon} />
        </View>
      </TouchableOpacity>
    )
  }
}
