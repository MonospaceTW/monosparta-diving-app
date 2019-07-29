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
      <View style={styles.content}>
        <FontAwesome name="globe" size={24} style={Styles.icon} />
        <Text style={styles.subtitle}>網站連結</Text>
        <View style={{ alignItems: 'flex-end' }}>
          <Text onPress={this.props.onClick} style={styles.web}>網址1</Text>
        </View>
      </View>
    );
  }

}
