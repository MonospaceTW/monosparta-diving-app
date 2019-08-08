import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Modal,
  Image
} from 'react-native';

import Images from '../config/images';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  loadingBody: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 20,
    backgroundColor: 'white'
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
          <View style={styles.loadingBody}>
            <Image style={{ height: 125, width: 125 }} source={Images.loading} />
          </View>
        </View>
      </Modal>

    )
  }
}


