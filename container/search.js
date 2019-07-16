import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity

} from 'react-native'

import { Container, Header, Content, Tab, Tabs } from 'native-base';

import SearchBtn from '../components/searchBtn/index'
import ShopTab from '../components/shopTab/index'
import SpotTab from '../components/spotTab/index'

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
          { label: '高階', value: 'hard' },
          { label: '中階', value: 'medium' },
          { label: '低階', value: 'easy' }]
      },
      shop: {
        service: [
          { label: '潛水體驗', value: 'exp' },
          { label: '證照課程', value: 'course' },
          { label: '器材銷售', value: 'sale' },
          { label: '飲食', value: 'food' },
          { label: '住宿', value: 'sleep' }]
      },
      selLocation: [],
      selLvl: []

    }
  }

  onGetLocation = () => {
    const array = []
    const locationLength = this.state.spot.location.length

    for (let i = 0; i < locationLength; i += 1) {
      array.push(<SearchBtn text={this.state.spot.location[i].label} />)
    }
    return array
  }

  onGetLevel = () => {
    const array = []
    const levelLength = this.state.spot.level.length

    for (let i = 0; i < levelLength; i += 1) {
      array.push(<SearchBtn text={this.state.spot.level[i].label} />)
    }
    return array
  }

  onGetService = () => {
    const array = []
    const serviceLength = this.state.shop.service.length

    for (let i = 0; i < serviceLength; i += 1) {
      array.push(<SearchBtn text={this.state.shop.service[i].label} />)
    }
    return array
  }

  render() {
    return (

      <Container>
        <Tabs>
          <Tab heading="找潛點">
            <SpotTab
              onGetLocation={this.onGetLocation()}
              onGetLevel={this.onGetLevel()}
            />
          </Tab>
          <Tab heading="找潛店">
            <ShopTab
              onGetLocation={this.onGetLocation()}
              onGetService={this.onGetService()}
            />
          </Tab>
        </Tabs>
      </Container>    

    )
  }
}