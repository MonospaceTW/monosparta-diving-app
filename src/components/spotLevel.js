import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native';

import Styles from '../config/style';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default class SpotDescription extends React.Component {


  render() {
    return (
      <View style={Styles.component}>

        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <FontAwesome name="anchor" size={24} style={Styles.icon} />
          <Text style={Styles.subtitleGray}>難度</Text>
        </View>

        <View>
          <Text style={Styles.text}>{this.props.level}</Text>
        </View>

      </View>
    );
  }

}
