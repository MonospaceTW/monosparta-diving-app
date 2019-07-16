import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity

} from 'react-native'

import {
 Container, Header, Content, Tab, Tabs 
} from 'native-base'

import Btn from '../components/button/index'
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
      press: false,
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
        text={this.state.spot.location[i].label}
        onChangeState={this.onLocationChange.bind(this, this.state.spot.location[i].value)}
        press={this.state.press}
      />)
    }
    return array
  }

  onGetLevel = () => {
    const array = []
    const levelLength = this.state.spot.level.length

    for (let i = 0; i < levelLength; i += 1) {
      array.push(<Btn
        text={this.state.spot.level[i].label}
        onChangeState={this.onLevelChange.bind(this, this.state.spot.level[i].value)}
        press={this.state.press}
      />)
    }
    return array
  }

  onGetService = () => {
    const array = []
    const serviceLength = this.state.shop.service.length

    for (let i = 0; i < serviceLength; i += 1) {
      array.push(<Btn
        text={this.state.shop.service[i].label}
        onChangeState={this.onServiceChange.bind(this, this.state.shop.service[i].value)}
        press={this.state.press}
      />)
    }
    return array
  }

  onChangeState = (value) => {
    console.log(value)
    this.setState({
      press: !this.state.press
    })
  }

  onLocationChange = (value) => {
    console.log(value)
    this.setState({
      selLocation: value
    })
  }

  onLevelChange = (value) => {
    console.log(value)
    this.setState({
      selLevel: value
    })
  }

  onServiceChange = (value) => {
    console.log(value)
    this.setState({
      selService: value
    })
  }

  onChangePage = () => {
    const { navigate } = this.props.navigation;
    const url = `http://e03d16df.ngrok.io/api/sites/search/?location=${this.state.selLocation}&level=${this.state.selLevel}`
    fetch(url)
      .then((response) => { return response.json() })
      .then((responseValue) =>
      {
        return this.setState({
          responseValue
        })
      }
      )
      // .then(()=> console.log(this.state.responseValue))
      .then(() => { navigate('spotList', { data: this.state.responseValue.item }) })
      .catch((error) => {
        console.log(error)
      })
      .done()
    // fetch('http://e03d16df.ngrok.io/api/sites/search/' + resultSelect[0])
    //   .then((response) => { return response.json() })
    //   .then((users) =>
    //   {
    //     return this.setState({
    //       users
    //     })
    //   }
    //   )
    //   // .then(() => { return console.log(this.state.users.item[0].viewName) })
    //   .then(() => { navigate('spotList', { data: this.state.users.item }) })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    //   .done()

  }

  render() {
    return (

      <Container>
        <Tabs>
          <Tab heading="找潛點">
            <SpotTab
              onGetLocation={this.onGetLocation()}
              onGetLevel={this.onGetLevel()}
              selLocation={this.state.selLocation}
              selLevel={this.state.selLevel}
              onChangePage={this.onChangePage}
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
