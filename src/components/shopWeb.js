import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
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
  },
  disabledIcon: {
    color: '#BFBFBF',
    marginRight: 15
  },
})

export default class ShopWeb extends React.Component {
  render() {
    return (
      <View style={Styles.component}>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <FontAwesome name="globe" size={24} style={Styles.icon} />
          <Text style={Styles.subtitleGray}>網站連結</Text>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <TouchableOpacity onPress={this.props.onGoWeb}>
            <FontAwesome
              name="external-link"
              size={24}
              style={this.props.url === '' ? styles.disabledIcon : Styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.onGoFb}>
            <FontAwesome
              name="facebook-square"
              size={24}
              style={this.props.fb === '' ? styles.disabledIcon : Styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}
