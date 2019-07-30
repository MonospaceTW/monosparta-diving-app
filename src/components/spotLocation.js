import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

import Map from '../components/map';
import Styles from '../config/style';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mapSize: {
    height: height * 0.35
  },
  subtitle: {
    marginBottom: 10
  },
  text: {
    marginBottom: 20
  }
})

export default class SpotLocation extends React.Component {


  render() {
    return (
      <View>

        <View style={Styles.component}>
          <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <FontAwesome name="map-marker" size={24} style={Styles.icon} />
            <Text style={[Styles.subtitleGray, styles.subtitle]}>所在位置</Text>
          </View>
        </View>
        <Text style={[Styles.text, styles.text]}>       {this.props.county}{this.props.district}</Text>

        <View style={styles.mapSize}>
          <Map
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            onPress={this.props.onGoMap}
          />
        </View>

      </View >
    );
  }

}
