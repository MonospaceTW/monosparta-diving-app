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
  disabledIcon: {
    color: '#BFBFBF',
    marginRight: 10
  },
})

export default class ShopService extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={Styles.component}>

        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <FontAwesome name="ship" size={18} style={Styles.icon} />
          <Text style={Styles.subtitleGray}>提供服務</Text>
        </View>

        <View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={this.props.onShowExploreDiving}>
                <FontAwesome
                  name="child"
                  size={24}
                  style={this.props.service.indexOf('ExploreDiving') < 0 ? styles.disabledIcon : Styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this.props.onShowLicenseCourse}>
                <FontAwesome
                  name="id-card"
                  size={24}
                  style={this.props.service.indexOf('LicenseCourse') < 0 ? styles.disabledIcon : Styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this.props.onShowFood}>
                <FontAwesome
                  name="cutlery"
                  size={24}
                  style={this.props.service.indexOf('Food') < 0 ? styles.disabledIcon : Styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this.props.onShowAccommodation}>
                <FontAwesome
                  name="bed"
                  size={24}
                  style={this.props.service.indexOf('Accommodation') < 0 ? styles.disabledIcon : Styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={this.props.onShowEquipmentSale}>
                <FontAwesome
                  name="shopping-cart"
                  size={24}
                  style={this.props.service.indexOf('EquipmentSale') < 0 ? styles.disabledIcon : Styles.icon}
                />
              </TouchableOpacity>

            </View>


        </View>

      </View>
    );
  }

}
