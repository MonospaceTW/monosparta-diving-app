import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Styles from '../config/style';
import Colors from '../config/color';


import Map from '../components/map'

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  content: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  subtitle: {
    fontSize: 15
  },
  icon: {
    color: '#0288D1',
    marginRight: 15
  },
  mapSize: {
    height: height * 0.35,
    marginTop: 10
  }
})

export default class ShopLocation extends React.Component {


  render() {
    return (
      <View style={styles.content}>

        <View>
          <View style={styles.titleWrapper}>
            <FontAwesome name="map-marker" size={24} style={Styles.icon} />
            <Text style={styles.subtitle}>所在位置</Text>
          </View>
          <Text>{this.props.county}{this.props.district}{this.props.address}</Text>
        </View>

        <View style={styles.mapSize}>
          <Map
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            onPress={this.props.onGoMap}
          />
        </View>

      </View>
    );
  }

}
