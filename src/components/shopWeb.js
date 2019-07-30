import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Styles from '../config/style';
import Colors from '../config/color';


const styles = StyleSheet.create({
  content: {
    marginTop: 20,

    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  subtitle: {
    fontSize: 15
  },
  web: {
    color: Colors.mainBlue
  }
})

export default class ShopWeb extends React.Component {


  render() {
    return (
      <View style={Styles.component}>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <FontAwesome name="globe" size={24} style={Styles.icon} />
          <Text style={Styles.subtitleGray}>網站連結</Text>
        </View>
        <View>
          <Text onPress={this.props.onClick} style={styles.web}>網址</Text>
        </View>
      </View>
    );
  }

}
