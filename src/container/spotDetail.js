import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native'
import Swiper from 'react-native-swiper'
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
    alignItems: 'center'
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
      <ScrollView>
        <View style={styles.container}>
          <Text>實景照片</Text>
          <View style={styles.hr} />
          <Swiper style={styles.wrapper} showsButtons autoplay>
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.spot_img }} />
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.spot_img }} />
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.spot_img }} />
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.spot_img }} />
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.spot_img }} />
          </Swiper>
          <View style={{ flex: 1 }}>
            <Text>潛點介紹</Text>
            <View style={styles.hr} />
            <Text>難度{this.props.navigation.state.params.data.level}{this.props.navigation.state.params.data.viewDescription}</Text>
          </View>
          <View style={{ height: 100 }}>
          <Text>潛點地圖</Text>
          <View style={styles.hr} />
            <Map />
          </View>
          <View style={{ flex: 1 }}>
            <Text>潛店推薦</Text>
            <View style={styles.hr} />

          </View>
        </View>
      </ScrollView>
    )
  }
}
