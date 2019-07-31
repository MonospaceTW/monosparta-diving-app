import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  List,
  ListItem
} from 'native-base';

import Color from '../config/color'

const styles = StyleSheet.create({
txt: {
  fontSize: 16,
  color: '#969696'
}
})


export default class SpotTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  onShowSpotResult = () => {
    if (this.props.spotData.length === 0) {
      return (
        <View style={{ alignItems: 'center'}}>
          <Text style={styles.txt}>找不到結果</Text>
          <Text style={styles.txt}>請調整關鍵字再試試看！</Text>
        </View>
      )
    } else {
      return this.props.spotData.map((item) => {
        return (
          <ListItem key={item.id}>
            <Text>{item.name}</Text>
          </ListItem>
        )
      })
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: Color.lightGray, flex:1, alignItems: 'center', paddingTop:25}}>
        {this.onShowSpotResult()}
      </View>
    )
  }
}
