import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Modal,
  Image,
  ActivityIndicator
} from 'react-native';

import Colors from '../config/color';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)'
  }
})

export default class LoadingModal extends React.Component {

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.loadingModalVisible}
      >
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colors.white} />
        </View>
      </Modal>

    )
  }
}


