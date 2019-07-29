import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import Colors from '../config/color';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  btn: {

    marginBottom: 10,
    width: width * 0.5,
    height: 35,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.mainBlue,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnPress: {
    marginBottom: 10,
    width: width * 0.5,
    height: 35,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.mainBlue,
    backgroundColor: Colors.mainBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTxt: {
    color: Colors.mainBlue,
    fontSize: 14
  },
  btnTxtPress: {
    color: Colors.white,
    fontSize: 14
  }

})

export default class SmallBtn extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={this.props.select === this.props.value ? styles.btnPress : styles.btn}
        onPress={this.props.onPress}
      >
        <Text style={this.props.select === this.props.value ? styles.btnTxtPress : styles.btnTxt}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}
