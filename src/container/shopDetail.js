import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Linking
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
        { title: '查看詳細資訊', content: this.props.navigation.state.params.data.bh }
      ]
    }
  }

  onGoWeb = () => {
    Linking.openURL(this.props.navigation.state.params.data.web1);
  }

  render() {
    return (
      <ScrollView>
        <View style={Styles.container}>

          <DetailSwiper img={this.props.navigation.state.params.data.img1} />

          <View style={Styles.bodyContent}>

            <ShopDescription
              name={this.props.navigation.state.params.data.name}
              description={this.props.navigation.state.params.data.description}
            />

            <ShopBusinessHour
              businessHour={this.state.businessHour}
            />

            <View style={Styles.hr} />

            <ShopService
              service={this.props.navigation.state.params.data.service}
            />

            <View style={Styles.hr} />

            <ShopPhone
              phone1={this.props.navigation.state.params.data.phone1}
            />

            <View style={Styles.hr} />

            <ShopWeb
              web1={this.props.navigation.state.params.data.web1}
              onClick={this.onGoWeb}
            />

            <View style={Styles.hr} />

            <ShopLocation
              county={this.props.navigation.state.params.data.county}
              district={this.props.navigation.state.params.data.district}
              address={this.props.navigation.state.params.data.address}
              latitude={this.props.navigation.state.params.data.latitude}
              longitude={this.props.navigation.state.params.data.longitude}
            />

            <View style={Styles.hr} />

            <ShopRate />
          </View>
        </View>
      </ScrollView>
    )
  }
}
