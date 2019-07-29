import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Linking,
  Platform,
  Alert
} from 'react-native'

import DetailSwiper from '../components/swiper'
import ShopDescription from '../components/shopDescription'
import ShopBusinessHour from '../components/shopBusinessHour'
import ShopService from '../components/shopService'
import ShopPhone from '../components/shopPhone'
import ShopWeb from '../components/shopWeb'
import ShopLocation from '../components/shopLocation'
import ShopRate from '../components/shopRate'
import Styles from '../config/style'
import Color from '../config/color'

export default class SpotDetail extends React.Component {
  static navigationOptions = {

    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: Color.gray
    },
    headerRight: <View />
  };

  constructor(props) {
    super(props)
    this.state = {
      businessHour: [
        { title: '查看詳細資訊', content: this.props.navigation.state.params.shopDetailData.bh }
      ]
    }
  }

  onGoWeb = () => {
    const {shopDetailData} = this.props.navigation.state.params
    Linking.openURL(shopDetailData.web1);
  }
  onGoMap = () => {
    const {shopDetailData} = this.props.navigation.state.params
    var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    var url = scheme + `${shopDetailData.latitude},${shopDetailData.longitude}`;
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
    const {shopDetailData} = this.props.navigation.state.params
    return (
      <ScrollView>
        <View style={Styles.container}>

          <DetailSwiper img={shopDetailData.img1} />

          <View style={Styles.bodyContent}>

            <ShopDescription
              name={shopDetailData.name}
              description={shopDetailData.description}
            />

            <ShopBusinessHour
              businessHour={this.state.businessHour}
            />

            <View style={Styles.hr} />

            <ShopService
              service={shopDetailData.service}
            />

            <View style={Styles.hr} />

            <ShopPhone
              phone1={shopDetailData.phone1}
            />

            <View style={Styles.hr} />

            <ShopWeb
              web1={shopDetailData.web1}
              onClick={this.onGoWeb}
            />

            <View style={Styles.hr} />

            <ShopLocation
              county={shopDetailData.county}
              district={shopDetailData.district}
              address={shopDetailData.address}
              latitude={shopDetailData.latitude}
              longitude={shopDetailData.longitude}
              onGoMap={this.onGoMap}
            />

            <View style={Styles.hr} />

            <ShopRate />
          </View>
        </View>
      </ScrollView>
    )
  }
}
