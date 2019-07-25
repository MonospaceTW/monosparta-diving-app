import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons'
import { Accordion } from "native-base";

const width = Dimensions.get('window').width;

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
  accordionStyle: {
    width: width * 0.5
  },
  icon: {
    color: '#0288D1',
    marginRight: 15
  },
})

export default class ShopBusinessHour extends React.Component {


  render() {
    return (
      <View style={styles.detailContainer}>
              <View style={styles.rowFlexDirection}>
                <FontAwesome name="clock-o" size={24} style={styles.icon} />
                <Text style={styles.subTitle}>營業時間</Text>
              </View>
              <View style={{ flexDirection: 'row', bottom: 10 }}>
                <Accordion dataArray={this.props.businessHour} expanded={1} headerStyle={styles.accordionStyle} />
              </View>
            </View>
    );
  }

}
