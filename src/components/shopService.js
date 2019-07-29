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
    super(props)
  }

  

  render() {
    return (
      <View style={styles.content}>

        <View style={styles.titleWrapper}>
          <FontAwesome name="clock-o" size={24} style={Styles.icon} />
          <Text style={styles.subtitle}>提供服務</Text>
        </View>
        
        <View> 
          <Root>
          <View style={{flexDirection: 'row',}}>
            <TouchableOpacity onPress={() => {
              Toast.show({
                text: '潛水體驗',
                position: "bottom"
              })
            }}>
              <FontAwesome
                name="child"
                size={24}
                style={this.props.service.indexOf('ExploreDiving') < 0 ? styles.disabledIcon : Styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              Toast.show({
                text: '證照課程',
                position: "bottom"
              })
            }}>
              <FontAwesome
                name="id-card"
                size={24}
                style={this.props.service.indexOf('LicenseCourse') < 0 ? styles.disabledIcon : Styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              Toast.show({
                text: '吃吃喝喝',
                position: "bottom"
              })
            }}>
              <FontAwesome
                name="cutlery"
                size={24}
                style={this.props.service.indexOf('Food') < 0 ? styles.disabledIcon : Styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              Toast.show({
                text: '住宿服務',
                position: "bottom"
              })
            }}>
              <FontAwesome
                name="bed"
                size={24}
                style={this.props.service.indexOf('Accommodation') < 0 ? styles.disabledIcon : Styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              Toast.show({
                text: '裝備販售',
                position: "bottom"
              })
            }}>
              <FontAwesome
                name="shopping-cart"
                size={24}
                style={this.props.service.indexOf('EquipmentSale') < 0 ? styles.disabledIcon : Styles.icon}
              />
            </TouchableOpacity>
            </View>
          </Root>

        </View>

      </View>
    );
  }

}
