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
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
})
const title1 = '實景照片'
const title2 = '潛點介紹'

export default class ShopDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (

      <View>
        <Text>{title1}</Text>
        <View style={ styles.hr }/>
        <Swiper showsButtons={true} autoplay={true}>
          <Image style={styles.slide} source={require('../assets/1.png')} />
          <Image style={styles.slide} source={require('../assets/1.png')} />
          <Image style={styles.slide} source={require('../assets/1.png')} />
        </Swiper>
        <Text>{title2}</Text>
        <View style={ styles.hr }/>
        />
        <Text/>
      </View>
    )
  }
}
