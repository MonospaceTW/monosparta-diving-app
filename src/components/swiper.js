import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'

import Swiper from 'react-native-swiper'
import Color from '../config/color'

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.35
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default class DetailSwiper extends React.Component {


  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} dotColor={Color.white} activeDotColor={Color.mainBlue}>
            <Image style={styles.slide} source={{ uri: this.props.img }} />
            <Image style={styles.slide} source={{ uri: this.props.img }} />
            <Image style={styles.slide} source={{ uri: this.props.img }} />
            <Image style={styles.slide} source={{ uri: this.props.img }} />
            <Image style={styles.slide} source={{ uri: this.props.img }} />
      </Swiper>
    );
  }

}
