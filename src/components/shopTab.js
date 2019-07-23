import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native'

import GoBtn from '../components/goBtn'



const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    textShadowColor: 'rgba(0,0,0,.16)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
    position: 'relative',
    margin: 15
  },
  hr: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    position: 'absolute',
    left: 50,
    top: 25,
    width: '100%'
  },
  hr2: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    position: 'absolute',
    left: 50,
    top: 195,
    width: '100%'
  },
  btnWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgImg: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray'
  },


})


export default class ShopTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      btnTxt: '出發！'
    }
  }

  render() {
    return (
      <ImageBackground key={this.props.key} style={styles.bgImg} >
        <Text style={styles.title}>區域</Text>
        <View style={styles.hr} />
        <View style={styles.btnWrapper}>{this.props.onGetLocation}</View>
        <Text style={styles.title}>服務</Text>
        <View style={styles.hr2} />
        <View style={styles.btnWrapper}>{this.props.onGetService}</View>
        <GoBtn
          btnTxt={this.state.btnTxt}
          onClick={this.props.onChangePage}
        />
      </ImageBackground>
    )
  }
}
