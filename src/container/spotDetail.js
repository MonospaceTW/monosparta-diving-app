import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Platform,
  Alert,
  Linking,
  SafeAreaView
} from 'react-native'
import DetailSwiper from '../components/swiper';
import SpotDescription from '../components/spotDescription';
import SpotLevel from '../components/spotLevel';
import NearShop from '../components/nearShop';
import SpotLocation from '../components/spotLocation';
import SpotRate from '../components/spotRate';

import Styles from '../config/style';
import Color from '../config/color';

export default class SpotDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: ''
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

  componentDidMount = () => {
    if (this.props.navigation.state.params.data.level === 'easy') {
      this.setState({
        level : '初階'
      })
    } else if (this.props.navigation.state.params.data.level === 'medium') {
      this.setState({
        level : '中階'
      })
    } else {
      this.setState({
        level : '高階'
      })
    }
  }

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
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={Styles.container}>

            <DetailSwiper img={this.props.navigation.state.params.data.img1} />

            <View style={Styles.bodyContent}>

              <SpotDescription
                name={this.props.navigation.state.params.data.name}
                description={this.props.navigation.state.params.data.description}
              />
              <View style={Styles.hr} />

              <SpotLevel level={this.state.level} />
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
      </SafeAreaView>
    )
  }
}
