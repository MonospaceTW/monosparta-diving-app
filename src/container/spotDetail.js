import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native'
import Swiper from 'react-native-swiper'
import Images from '../config/images'
import Map from '../components/map'


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  wrapper: {
    height: 200
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
      <ScrollView style={styles.container}>

        <Text>實景照片</Text>
        <View style={styles.hr} />
        <Swiper style={styles.wrapper} showsButtons autoplay>
          <Image style={styles.slide} source={Images.recImg} />
          <Image style={styles.slide} source={Images.recImg} />
          <Image style={styles.slide} source={Images.recImg} />
          <Image style={styles.slide} source={Images.recImg} />
          <Image style={styles.slide} source={Images.recImg} />
        </Swiper>


        <View style={{height: 200}}>
          <Text>潛點介紹</Text>
          <View style={styles.hr} />

        </View>

        <View style={{height: 400}}>
          <Text>{this.props.navigation.state.params.info.viewName}</Text>
          <View style={styles.hr} />
          <Map />
        </View>

        <View style={{height: 200}}>
          <Text>潛點推薦</Text>
          <View style={styles.hr} />
        </View>


      </ScrollView>
    )
  }
}
