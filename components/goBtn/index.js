import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'


export default class GoBtn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.btnWrapper}>
      <TouchableOpacity
        style={styles.goBtn}
        disabled={(this.props.selLocation == '' && this.props.selLvl == '')}
      >
        <Text style={styles.btnTxt}>{this.props.btnTxt}</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  goBtn: {
    width: 150,
    height: 40,
    backgroundColor: '#FF9100',
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: 'rgba(0,0,0,.16)',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    borderRadius: 24,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTxt: {
    fontSize: 15,
    color: 'white'
  },
  btnWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

})
