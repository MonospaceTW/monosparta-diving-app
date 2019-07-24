import React, { Component } from 'react'

import {
  View,
  Alert
} from 'react-native'
import {
  Container,
  Tab,
  Tabs
} from 'native-base';

import Btn from '../components/button'
import ShopTab from '../components/shopTab'
import SpotTab from '../components/spotTab'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      spot: {
        location: [
          { label: '北部', value: 'north' },
          { label: '中部', value: 'mid' },
          { label: '南部', value: 'south' },
          { label: '東部', value: 'east' },
          { label: '離島', value: 'outer' }],
        level: [
          { label: '初階', value: 'easy' },
          { label: '中階', value: 'medium' },
          { label: '高階', value: 'hard' }]
      },
      shop: {
        service: [
          { label: '潛水體驗', value: 'ExploreDiving' },
          { label: '證照課程', value: 'LicenseCourse' },
          { label: '器材銷售', value: 'EquipmentSale' },
          { label: '飲食', value: 'Food' },
          { label: '住宿', value: 'Accommodation' }]
      },
      selLocation: '',
      selLevel: '',
      selService: ''

    }
  }


  onGetLocation = () => {
    const array = []
    const locationLength = this.state.spot.location.length

    for (let i = 0; i < locationLength; i += 1) {
      array.push(<Btn
        key={this.state.spot.location[i].value}
        text={this.state.spot.location[i].label}
        onChangeState={this.onLocationChange.bind(this, this.state.spot.location[i].value)}
        select={this.state.selLocation}
        value={this.state.spot.location[i].value}
      />)
    }
    return array
  }

  onGetLevel = () => {
    const array = []
    const levelLength = this.state.spot.level.length

    for (let i = 0; i < levelLength; i += 1) {
      array.push(<Btn
        key={this.state.spot.level[i].value}
        text={this.state.spot.level[i].label}
        onChangeState={this.onLevelChange.bind(this, this.state.spot.level[i].value)}
        select={this.state.selLevel}
        value={this.state.spot.level[i].value}
      />)
    }
    return array
  }

  onGetService = () => {
    const array = []
    const serviceLength = this.state.shop.service.length

    for (let i = 0; i < serviceLength; i += 1) {
      array.push(<Btn
        key={this.state.shop.service[i].value}
        text={this.state.shop.service[i].label}
        onChangeState={this.onServiceChange.bind(this, this.state.shop.service[i].value)}
        select={this.state.selService}
        value={this.state.shop.service[i].value}

      />)
    }
    return array
  }

  onLocationChange = (value) => {
    if (this.state.selLocation === value) {
      this.setState({
        selLocation: ''
      })
    } else {
      this.setState({
        selLocation: value
      })
    }
  }

  onLevelChange = (value) => {
    if (this.state.selLevel === value) {
      this.setState({
        selLevel: ''
      })
    } else {
      this.setState({
        selLevel: value
      })
    }
  }

  onServiceChange = (value) => {
    if (this.state.selService === value) {
      this.setState({
        selService: ''
      })
    } else {
      this.setState({
        selService: value
      })
    }
  }

  onGetSpotList = async () => {
    const { navigate } = this.props.navigation
    const url = `http://51457f91.ngrok.io/DivingBackend/public/api/sites/search?location=${this.state.selLocation}&level=${this.state.selLevel}`
    if (this.state.selLocation === '' && this.state.selLevel === '') {
      Alert.alert('請至少選擇一個區域或難度')
    } else {
      try {
        let response = await fetch(url);
        let responseValue = await response.json();
        let resultList = await navigate('spotList', { data: responseValue.item })
      }catch (err) {
        console.log(err)
      }
    }
  }

  onGetShopList = async () => {
    const { navigate } = this.props.navigation
    const url = `http://51457f91.ngrok.io/DivingBackend/public/api/shops/search?location=${this.state.selLocation}&service=${this.state.selService}`
    if (this.state.selLocation === '' && this.state.selService === '') {
      Alert.alert('請至少選擇一個區域或服務')
    } else {
      try {
        let response = await fetch(url);
        let responseValue = await response.json();
        console.log(responseValue)
        let resultList = await navigate('shopList', { data: responseValue.item })
      }catch (err) {
        console.log(err)
      }
    }
  }


  render() {
    return (

      <Container>
        <Tabs>
          <Tab heading="找潛點">
            <SpotTab
              onGetLocation={this.onGetLocation()}
              onGetLevel={this.onGetLevel()}
              onChangePage={this.onGetSpotList}
            />
          </Tab>
          <Tab heading="找潛店">
            <ShopTab
              onGetLocation={this.onGetLocation()}
              onGetService={this.onGetService()}
              onChangePage={this.onGetShopList}
            />
          </Tab>
        </Tabs>
      </Container>

    )
  }
}
