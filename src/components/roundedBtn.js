import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

import Colors from '../config/color';


const styles = StyleSheet.create({
  btn: {
    width: '25%',
    height: 40,
    marginTop:10,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTxt: {
    color: Colors.gray,
    fontWeight:'bold',
    fontSize: 16
  }
})
export default class RoundedBtn extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.btn}
      >
        <Text style={styles.btnTxt}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}
