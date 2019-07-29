import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { Accordion } from "native-base";
import Styles from '../config/style';


const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  content: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  subtitle: {
    fontSize: 15
  }
})

export default class ShopBusinessHour extends React.Component {


  render() {
    return (
      <View style={styles.content}>

        <View style={styles.titleWrapper}>
          <FontAwesome name="clock-o" size={24} style={Styles.icon} />
          <Text style={styles.subtitle}>營業時間</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
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
