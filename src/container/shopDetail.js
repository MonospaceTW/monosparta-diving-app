import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
import Styles from '../config/style'
import Map from '../components/map'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {
    height: height*0.35
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
        <View style={Styles.container}>
          <Swiper style={styles.wrapper} showsButtons={false} dotColor="#F5F5F5" activeDotColor="white">
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.img1 }} />
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.img1 }} />
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.img1 }} />
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.img1 }} />
            <Image style={styles.slide} source={{ uri: this.props.navigation.state.params.data.img1 }} />
          </Swiper>

          <View>
            <Text>{this.props.navigation.state.params.data.name}</Text>
          </View>

          <View style={Styles.bodyContent}>
            <View style={Styles.component}>
              <Text style={Styles.title}>服務</Text>
              <Text style={Styles.content}>{this.props.navigation.state.params.data.service}</Text>
              <View style={Styles.hr} />
            </View>

            <View style={Styles.component}>
              <Text style={Styles.title}>地址</Text>
              <Text style={Styles.content}>{this.props.navigation.state.params.data.address}</Text>
              <View style={Styles.map}>
              <Map />
              </View>
              <View style={Styles.hr} />
            </View>

            <View style={Styles.component}>
              <Text style={Styles.title}>附近潛店</Text>
              <View style={Styles.hr} />
            </View>

            <View style={Styles.component}>
              <Text style={Styles.title}>評論</Text>
            </View>

          </View>
        </View>
      </ScrollView>
    )
  }
}
