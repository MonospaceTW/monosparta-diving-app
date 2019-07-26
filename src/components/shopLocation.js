import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'


import Map from '../components/map'

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
  icon: {
    color: '#0288D1',
    marginRight: 15
  },
  mapSize: {
    height: height * 0.35
  }
})

export default class ShopLocation extends React.Component {


  render() {
    return (
      <View>
        <View style={styles.detailContainer}>
          <View style={styles.rowFlexDirection}>
            <FontAwesome name="map-marker" size={24} style={styles.icon} />
            <Text style={styles.subTitle}>所在位置</Text>
          </View>
          <View>
            <Text>{this.props.county}{this.props.district}{this.props.address}</Text>
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
