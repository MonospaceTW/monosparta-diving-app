import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  container: {

  },
  swiper: {
    borderColor: 'red',
    borderWidth: 5,
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.3,
    justifyContent: 'space-evenly'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
})

export default class SpotDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>實景照片</Text>
        <View style={styles.hr} />
        <Swiper style={styles.swiper} showsButtons={true} autoplay={true}>
          <Image style={styles.slide} source={require('../assets/1.png')} />
          <Image style={styles.slide} source={require('../assets/1.png')} />
          <Image style={styles.slide} source={require('../assets/1.png')} />
        </Swiper>
        <Text>潛點介紹</Text>
        <View style={styles.hr} />
      </View>
    )
  }
}
