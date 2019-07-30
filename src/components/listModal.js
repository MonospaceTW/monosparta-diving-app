import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';

import SmallBtn from './smallButton';

import Styles from '../config/style';
import Colors from '../config/color';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  outerContainer: {
    width: width * 0.2,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  modalContent: {
    flex: 1,
    backgroundColor: Colors.white,
    width: width * 0.8,
    position: 'relative',
  },
  title: {
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 25
  },
  subtitle: {
    marginLeft: 20,
    marginBottom: 20
  },
  locationBtnWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 20
  },
  btnWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 30,
    left: 60
  },

})

export default class ListModal extends React.Component {

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
        }}
      >
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity style={styles.outerContainer} onPress={this.props.onPress}>
            <View />
          </TouchableOpacity>
          <View style={styles.modalWrapper}>

            <View style={styles.modalContent}>
              <Text style={[Styles.title, styles.title]}>{this.props.title}</Text>

              <Text style={[Styles.title, styles.subtitle]}>{this.props.subtitle1}</Text>
              <View style={styles.locationBtnWrapper}>{this.props.onGetFirstBtn}</View>

              <Text style={[Styles.title, styles.subtitle]}>{this.props.subtitle2}</Text>
              <View style={styles.locationBtnWrapper}>{this.props.onGetSecondBtn}</View>

              <View style={styles.btnWrapper}>
                <SmallBtn
                  select={false}
                  onPress={this.props.onPressReset}
                  text={this.props.btnTxt1}
                />
                <SmallBtn
                  onPress={this.props.onPressSubmit}
                  text={this.props.btnTxt2}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}


