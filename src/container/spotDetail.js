import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Platform,
  Alert,
  Linking
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
    var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    var url = scheme + `${this.props.navigation.state.params.data.latitude},${this.props.navigation.state.params.data.longitude}`;
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
    return (
      <ScrollView>
        <View style={Styles.container}>

          <DetailSwiper img={this.props.navigation.state.params.data.img1} />

          <View style={Styles.bodyContent}>

            <SpotDescription
              name={this.props.navigation.state.params.data.name}
              level={this.props.navigation.state.params.data.level}
              description={this.props.navigation.state.params.data.description}
            />

            <View style={Styles.hr} />

            <NearShop />

            <View style={Styles.hr} />

            <SpotLocation
              county={this.props.navigation.state.params.data.county}
              district={this.props.navigation.state.params.data.district}
              latitude={this.props.navigation.state.params.data.latitude}
              longitude={this.props.navigation.state.params.data.longitude}
              onGoMap={this.onGoMap}
            />

            <View style={Styles.hr} />

            <SpotRate />

          </View>
        </View>
      </ScrollView>
    )
  }
}
