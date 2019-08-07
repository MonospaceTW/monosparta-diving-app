import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Platform,
  Alert,
  Linking,
  SafeAreaView,
  KeyboardAvoidingView
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
      level: '',
      imgArray: [
        this.props.navigation.state.params.data.img1,
        this.props.navigation.state.params.data.img2,
        this.props.navigation.state.params.data.img3,
        this.props.navigation.state.params.data.img4,
        this.props.navigation.state.params.data.img5,
      ]
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
        level: '初階'
      })
    } else if (this.props.navigation.state.params.data.level === 'medium') {
      this.setState({
        level: '中階'
      })
    } else {
      this.setState({
        level: '高階'
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
        <KeyboardAvoidingView
          behavior='padding'
          keyboardVerticalOffset={80}
        >
          <ScrollView>
            <View style={Styles.container}>

              <DetailSwiper
                img={this.state.imgArray}
              />

              <View style={Styles.bodyContent}>

                <SpotDescription
                  name={this.props.navigation.state.params.data.name}
                  description={this.props.navigation.state.params.data.description}
                />
                <View style={Styles.hr} />

                <SpotLevel level={this.state.level} />
                <View style={Styles.hr} />

                <NearShop
                  nearShop={this.props.navigation.state.params.nearShop}
                  navigation={this.props.navigation}
                />
                <View style={Styles.hr} />

                <SpotLocation
                  county={this.props.navigation.state.params.data.county}
                  district={this.props.navigation.state.params.data.district}
                  latitude={this.props.navigation.state.params.data.latitude}
                  longitude={this.props.navigation.state.params.data.longitude}
                  onGoMap={this.onGoMap}
                />
                <View style={Styles.hr} />

                <SpotRate
                  comment={this.props.navigation.state.params.comment}
                  id={this.props.navigation.state.params.data.id}
                  navigation={this.props.navigation}
                  commentTotal={this.props.navigation.state.params.commentTotal}
                />

              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}
