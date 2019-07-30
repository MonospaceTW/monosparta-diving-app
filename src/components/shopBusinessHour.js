import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { Accordion } from "native-base";
import Styles from '../config/style';


const width = Dimensions.get('window').width;

export default class ShopBusinessHour extends React.Component {


  render() {
    return (
      <View style={Styles.component}>

        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <FontAwesome name="clock-o" size={24} style={Styles.icon} />
          <Text style={Styles.subtitleGray}>營業時間</Text>
        </View>

        <View>
          <Accordion
            dataArray={this.props.businessHour}
            expanded={1}
            headerStyle={{ width: width * 0.5, borderWidth: 0 }}
            style={{ borderWidth: 0 }}
          />
        </View>

      </View>
    );
  }

}
