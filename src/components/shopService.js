import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Toast } from 'native-base';
import FontAwesome from '@expo/vector-icons/FontAwesome';



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
  icon: {
    color: '#0288D1',
    marginRight: 15
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
      showToast: false
    };
  }

  render() {
    return (
      <View style={styles.detailContainer}>
        <View style={styles.rowFlexDirection}>
          <FontAwesome name="clock-o" size={24} style={styles.icon} />
          <Text style={styles.subTitle}>提供服務</Text>
        </View>
        <View style={styles.rowFlexDirection}>
          <TouchableOpacity onPress={() => Toast.show({
            text: '潛水體驗',
            buttonText: 'Okay'
          })}>
            <FontAwesome
              name="child"
              size={24}
              style={this.props.service.indexOf('ExploreDiving') < 0 ? styles.disabledIcon : styles.icon}
            />
          </TouchableOpacity>
          <FontAwesome
            name="id-card"
            size={24}
            style={this.props.service.indexOf('LicenseCourse') < 0 ? styles.disabledIcon : styles.icon}
            onPress={() => Toast.show({
              text: '證照課程',
              buttonText: 'Okay'
            })}
          />
          <FontAwesome
            name="cutlery"
            size={24}
            style={this.props.service.indexOf('Food') < 0 ? styles.disabledIcon : styles.icon}
            onPress={() => Toast.show({
              text: '吃吃喝喝',
              buttonText: 'Okay'
            })}
          />
          <FontAwesome
            name="bed"
            size={24}
            style={this.props.service.indexOf('Accommodation') < 0 ? styles.disabledIcon : styles.icon}
            onPress={() => Toast.show({
              text: '提供住宿',
              buttonText: 'Okay'
            })}
          />
          <FontAwesome
            name="shopping-cart"
            size={24}
            style={this.props.service.indexOf('EquipmentSale') < 0 ? styles.disabledIcon : styles.icon}
            onPress={() => Toast.show({
              text: '裝備販售',
              buttonText: 'Okay'
            })} />
        </View>
      </View>
    );
  }

}
