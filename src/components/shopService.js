import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Root, Toast } from 'native-base';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Styles from '../config/style';



const styles = StyleSheet.create({
  content: {
    marginTop: 20,
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
  disabledIcon: {
    color: '#BFBFBF',
    marginRight: 15
  },
})

export default class ShopService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnTxt: '我要評論'
    }
  }
  showToast = () => {

    Toast.show({
      text: '潛水體驗'
    })
  }

  render() {
    return (
      <View style={styles.content}>

        <View style={styles.titleWrapper}>
          <FontAwesome name="clock-o" size={24} style={Styles.icon} />
          <Text style={styles.subtitle}>提供服務</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Root>
            <TouchableOpacity onPress={this.showToast}>
              <FontAwesome
                name="child"
                size={24}
                style={this.props.service.indexOf('ExploreDiving') < 0 ? styles.disabledIcon : styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.showToast}>
              <FontAwesome
                name="id-card"
                size={24}
                style={this.props.service.indexOf('LicenseCourse') < 0 ? styles.disabledIcon : styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.showToast}>
              <FontAwesome
                name="cutlery"
                size={24}
                style={this.props.service.indexOf('Food') < 0 ? styles.disabledIcon : styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.showToast}>
              <FontAwesome
                name="bed"
                size={24}
                style={this.props.service.indexOf('Accommodation') < 0 ? styles.disabledIcon : styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={this.showToast}>
              <FontAwesome
                name="shopping-cart"
                size={24}
                style={this.props.service.indexOf('EquipmentSale') < 0 ? styles.disabledIcon : styles.icon}
              />
            </TouchableOpacity>
          </Root>

        </View>

      </View>
    );
  }

}
