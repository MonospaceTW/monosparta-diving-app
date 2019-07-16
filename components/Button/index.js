import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  btn: {   
    margin: 15,
    width: 80,
    height: 30,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnPress: {    
    margin: 15,
    width: 80,
    height: 30,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTxt: {
    color: 'white',
    fontSize: 14
  },
  btnTxtPress: {
    color: '#031F4B',
    fontSize: 14
  }

})

export default class Btn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
      selLocation: '',
      selLevel: '',
      selService: ''
    }
  }

  

  render() {
    return (
      <TouchableHighlight style={this.props.press ? styles.btnPress : styles.btn} onPress={this.props.onChangeState}>
        <Text style={this.props.press ? styles.btnTxtPress : styles.btnTxt}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}
