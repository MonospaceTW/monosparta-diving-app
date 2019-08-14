import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import Colors from '../config/color';
import { View } from 'native-base';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  btn: {
    margin: 15,
    width: width *0.95,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.mainBlue,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnPress: {
    margin: 15,
    width: width * 0.8,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.mainBlue,
    backgroundColor: Colors.mainBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTxt: {
    color: Colors.mainBlue,
    fontSize: 15
  },
  btnTxtPress: {
    color: Colors.white,
    fontSize: 15
  }

})

export default class Btn extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center',justifyContent: 'center'}}>
      <TouchableOpacity
        style={this.props.select === this.props.value ? styles.btnPress : styles.btn}
        onPress={this.props.onPress}
      >
        <Text style={this.props.select === this.props.value ? styles.btnTxtPress : styles.btnTxt}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
      </View>
    )
  }
}
