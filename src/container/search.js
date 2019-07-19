import React, { Component } from 'react'

import {
  View,
  Alert
} from 'react-native'
import {
  Container,
  Tab,
  Tabs
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
          { label: '初階', value: 'easy' },
          { label: '中階', value: 'medium' },
          { label: '高階', value: 'hard' }]
      },
      shop: {
        service: [
          { label: '潛水體驗', value: 'exp' },
          { label: '證照課程', value: 'course' },
          { label: '器材銷售', value: 'sale' },
          { label: '飲食', value: 'food' },
          { label: '住宿', value: 'sleep' }]
      },
      selLocation: '',
      selLevel: '',
      selService: ''

    }
  }

  static navigationOptions = {
    title: 'SearchList',
    headerStyle: {
      backgroundColor: '#3FD2FF'

    },
    headerTitleStyle: {
      flex: 1,
      fontFamily: 'monospace',
      fontSize: 31,
      textAlign: 'center',
      color: '#FFBC02'
    },
    headerLeft:
      (<View/>),
    headerRight:
      (<View/>)
  };

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

  onChangeState = (value) => {
    console.log(value)
    this.setState({
      press: !this.state.press
    })
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

  onChangePage = () => {
    const { navigate } = this.props.navigation
    const url = `http://e03d16df.ngrok.io/api/sites/search/?location=${this.state.selLocation}&level=${this.state.selLevel}`
    if (this.state.selLocation === '' && this.state.selLevel === '') {
      Alert.alert('請至少選擇一個區域或難度')
    } else {
      fetch(url)
        .then((response) => { return response.json()})
        .then((responseValue) => {
          return this.setState({
            responseValue
          })
        })
        .then(() => { navigate('spotList', { data: this.state.responseValue.item }) })
        .catch((error) => {
          console.log(error)
        })
        .done()
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

onChangePage = () => {
  const { navigate } = this.props.navigation
  const url = `http://e03d16df.ngrok.io/api/sites/search/?location=${this.state.selLocation}&level=${this.state.selLevel}`

  fetch(url)
    .then((response) => { return response.json() })
    .then((responseValue) => {
      return this.setState({
        responseValue
      })
    })
    .then(() => { navigate('spotList', { data: this.state.responseValue.item }) })
    .catch((error) => {
      console.log(error)
    })
    .done()
}

