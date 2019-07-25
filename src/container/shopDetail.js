import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Linking
} from 'react-native'
import {
  FontAwesome,
} from '@expo/vector-icons'
import { Container, Header, Content, Accordion } from "native-base";

import Swiper from 'react-native-swiper'
import ShopSwiper from '../components/swiper'
import ShopDescription from '../components/shopDescription'
import ShopBusinessHour from '../components/shopBusinessHour'
import ShopService from '../components/shopService'
import ShopPhone from '../components/shopPhone'
import ShopWeb from '../components/shopWeb'
import ShopLocation from '../components/shopLocation'
import ShopRate from '../components/shopRate'
import Styles from '../config/style'
import Color from '../config/color'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.35
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 12
  },
  subTitle: {
    fontSize: 15
  },
  infoContainer: {
    marginBottom: 30
  },
  detailContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    color: '#0288D1',
    marginRight: 15
  },
  disabledIcon: {
    color: '#BFBFBF',
    marginRight: 15
  },
  rowFlexDirection: {
    flexDirection: 'row'
  },
  webContainer: {
    marginTop: 25,
  },
  webTxt: {
    alignItems: 'flex-end'
  },
  linkTxt: {
    color: 'blue',
  },
  accordionStyle: {
    width: width * 0.5
  }



})


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

          <ShopSwiper img={this.props.navigation.state.params.data.img1} />

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
