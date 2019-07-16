import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  btn: {
    flexWrap: 'wrap',
    flexDirection: 'row',
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
    flexWrap: 'wrap',
    flexDirection: 'row',
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
      press: false
    }
  }

  onChangeState = () => {
    this.setState({
      press: !this.state.press
    })
  }

  render() {
    return (
      <TouchableHighlight style={this.state.press ? styles.btnPress : styles.btn} onPress={this.onChangeState}>
        <Text style={this.state.press ? styles.btnTxtPress : styles.btnTxt}>{this.props.label}</Text>
      </TouchableHighlight>
    )
  }
}
