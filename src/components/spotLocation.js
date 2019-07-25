import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native'

import Map from '../components/map'
import Styles from '../config/style'

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  detailContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowFlexDirection: {
    flexDirection: 'row'
  },
  subTitle: {
    fontSize: 15
  },
  mapSize: {
    height: height * 0.35
  }
})

export default class SpotLocation extends React.Component {


  render() {
    return (
      <View>
        <View style={styles.detailContainer}>
          <View style={styles.rowFlexDirection}>
            <Text style={Styles.title}>所在位置</Text>
          </View>
          <View>
            <Text>{this.props.county}　{this.props.district}</Text>
          </View>
        </View>
        <View style={styles.mapSize}>
          <Map
            latitude={this.props.latitude}
            longitude={this.props.longitude}
          />
        </View>
      </View >
    );
  }

}
