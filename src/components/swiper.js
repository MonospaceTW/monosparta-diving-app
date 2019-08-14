import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Button
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
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  onRenderImage = () => {
    let showImg = this.props.img.filter((String) => { return String })
    return showImg.map((item) => {
      return (
        <Image
          style={styles.slide}
          key={item}
          source={{ uri: item }} />
      )
    })
  }

  render() {
    return (
      <View>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          dot={
            <View style={{backgroundColor:'white', width: 5, height: 5,borderRadius: 4, marginLeft: 4, marginRight: 4, marginTop: 4, marginBottom:4}}/>
          }
        >
          {this.onRenderImage()}
        </Swiper>
      </View>
    );
  }
}
