import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Linking,
  Platform,
  Alert,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView
} from 'react-native';
import { Root, Toast, Item } from 'native-base';
import { WebBrowser } from 'expo';

import DetailSwiper from '../components/swiper';
import ShopDescription from '../components/shopDescription';
import ShopBusinessHour from '../components/shopBusinessHour';
import ShopService from '../components/shopService';
import ShopPhone from '../components/shopPhone';
import ShopWeb from '../components/shopWeb';
import ShopLocation from '../components/shopLocation';
import ShopRate from '../components/shopRate';

import Styles from '../config/style';
import Color from '../config/color';

const styles = StyleSheet.create({
  toast: {
    width: 100,
    alignSelf: 'center',
    borderRadius: 30,
  },
  toastTxt: {
    textAlign: 'center',
    fontSize: 18,
  }
})



export default class SpotDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArray: [
        this.props.navigation.state.params.data.img1,
        this.props.navigation.state.params.data.img2,
        this.props.navigation.state.params.data.img3,
        this.props.navigation.state.params.data.img4,
        this.props.navigation.state.params.data.img5,
      ],
      businessHour: [
        { title: '查看詳細資訊', content: this.props.navigation.state.params.data.bh }
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
    headerStyle: {
      backgroundColor: 'white',
    },
    headerRight: <View />
  };

  onGoWeb1 = () => {
    if (this.props.navigation.state.params.data.web1 === null) {
      return
    }

    WebBrowser.openBrowserAsync(this.props.navigation.state.params.data.web1);
  }

  onGoWeb2 = () => {
    if (this.props.navigation.state.params.data.web2 === null) {
      return
    }

    WebBrowser.openBrowserAsync(this.props.navigation.state.params.data.web2);
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

  onShowExploreDiving = () => {
    Toast.show({
      text: '潛水體驗',
      style: {
        ...styles.toast
      },
      textStyle: {
        ...styles.toastTxt
      }
    })
  }

  onShowLicenseCourse = () => {
    Toast.show({
      text: '證照課程',
      style: {
        ...styles.toast
      },
      textStyle: {
        ...styles.toastTxt
      }
    })
  }

  onShowFood = () => {
    Toast.show({
      text: '飲食',
      style: {
        ...styles.toast
      },
      textStyle: {
        ...styles.toastTxt
      }
    })
  }

  onShowAccommodation = () => {
    Toast.show({
      text: '住宿',
      style: {
        ...styles.toast
      },
      textStyle: {
        ...styles.toastTxt
      }
    })
  }

  onShowEquipmentSale = () => {
    Toast.show({
      text: '器材銷售',
      style: {
        ...styles.toast
      },
      textStyle: {
        ...styles.toastTxt
      }
    })
  }

  render() {

    return (
      <Root>
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
                    onShowExploreDiving={this.onShowExploreDiving}
                    onShowLicenseCourse={this.onShowLicenseCourse}
                    onShowFood={this.onShowFood}
                    onShowAccommodation={this.onShowAccommodation}
                    onShowEquipmentSale={this.onShowEquipmentSale}
                  />


                  <View style={Styles.hr} />

                  <ShopPhone
                    phone1={this.props.navigation.state.params.data.phone1}
                  />

                  <View style={Styles.hr} />

                  <ShopWeb
                    web1={this.props.navigation.state.params.data.web1}
                    web2={this.props.navigation.state.params.data.web2}
                    onGoWeb1={this.onGoWeb1}
                    onGoWeb2={this.onGoWeb2}
                  />

                  <View style={Styles.hr} />

                  <ShopLocation
                    county={this.props.navigation.state.params.data.county}
                    district={this.props.navigation.state.params.data.district}
                    address={this.props.navigation.state.params.data.address}
                    latitude={this.props.navigation.state.params.data.latitude}
                    longitude={this.props.navigation.state.params.data.longitude}
                    onGoMap={this.onGoMap}
                  />

                  <View style={Styles.hr} />

                  <ShopRate
                    comment={this.props.navigation.state.params.comment}
                    id={this.props.navigation.state.params.data.id}
                    avg={this.props.navigation.state.params.data.avg_rate}
                    commentTotal={this.props.navigation.state.params.commentTotal}                
                  />

                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Root>
    )
  }
}
