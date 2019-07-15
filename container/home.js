import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  Button,
  StyleSheet,
  ImageBackground
} from 'react-native'

import homeSpot from '../components/image'


export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Object: [
        {
          title: '熱門潛點',
          img1: homeSpot.recImg,
          img2: homeSpot.recImg,
          img3: homeSpot.recImg,
          name1: '貓鼻頭'
        },
        {
          title: '熱門潛店',
          img1: homeSpot.recImg,
          img2: homeSpot.recImg,
          img3: homeSpot.recImg,
          name1: '藍波潛水'
        },
        
      ]


    }
  }

  render() {
    return (
        <ImageBackground source={require('../assets/homeBg.png')} style={styles.bgImg}>
          {this.state.Object.map((value) => {
            return <View>
              <Text style={styles.title}>{value.title}</Text>
              <View style={styles.hr} />
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.imageWrapper}>
                <Image style={styles.image} source={value.img1} />
                <Text style={styles.name}>{value.name1}</Text>
                <Image style={styles.image} source={value.img2} />
                <Text style={styles.name}>{value.name1}</Text>
                <Image style={styles.image} source={value.img3} />
                <Text style={styles.name}>{value.name1}</Text>
              </View>
              </ScrollView>
              </View>
          })}
          <Button style={styles.btn} title='想去哪裡?' />
        </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    textShadowColor: 'rgba(0,0,0,.16)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
    position: 'relative',
    margin: 15
  },
  imageWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    width: 200,
    height: 100,
    shadowColor: 'rgba(0,0,0,.35)',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    borderRadius: 20,
    marginLeft: 30,
    marginBottom: 10,
    position: 'relative'
  },
  name: {
    position: 'absolute',
    color: 'white',
    fontSize: 14,
    bottom: 20,
    left: 45
  },
  hr: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    position: 'absolute',
    left: 80,
    top: 22,
    width: '100%'
  },
  btn: {
    width: 150,
    height: 40,
    backgroundColor: '#FF9100',
    shadowColor: 'rgba(0,0,0,.16)',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    borderRadius: 24,
    marginBottom: 10
  },
  bgImg: {
    width: '100%',
    height: '100%'
  }
})
