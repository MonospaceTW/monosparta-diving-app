import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons'


import Map from '../components/map'

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
        <View style={{ height: 300 }}>
          <Map
            latitude={this.props.latitude}
            longitude={this.props.longitude}
          />
        </View>
      </View >
    );
  }

}
