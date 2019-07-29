import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Platform,
  Alert,
  Linking,
  SafeAreaView
} from 'react-native'
import DetailSwiper from '../components/swiper'
import SpotDescription from '../components/spotDescription';
import NearShop from '../components/nearShop'
import SpotLocation from '../components/spotLocation'
import SpotRate from '../components/spotRate'
import Styles from '../config/style'
import Color from '../config/color'

export default class SpotDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static navigationOptions = {
    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: Color.gray
    },
    headerRight: <View />
  };

  onGoMap = () => {
    const {spotDetailData} = this.props.navigation.state.params
    var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    var url = scheme + `${spotDetailData.latitude},${spotDetailData.longitude}`;
    Alert.alert(
      '開啟地圖',
      '',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => Linking.openURL(url) },
      ],
      { cancelable: false }
    )
  }

  render() {
    const {spotDetailData} = this.props.navigation.state.params
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={Styles.container}>

          <DetailSwiper img={spotDetailData.img1} />

            <View style={Styles.bodyContent}>

            <SpotDescription
              name={spotDetailData.name}
              level={spotDetailData.level}
              description={spotDetailData.description}
            />

              <View style={Styles.hr} />

              <NearShop />

              <View style={Styles.hr} />

            <SpotLocation
              county={spotDetailData.county}
              district={spotDetailData.district}
              latitude={spotDetailData.latitude}
              longitude={spotDetailData.longitude}
              onGoMap={this.onGoMap}
            />

              <View style={Styles.hr} />

              <SpotRate />

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
