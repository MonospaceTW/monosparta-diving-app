import React, { Component } from 'react'
import {
  View,
  FlatList
} from 'react-native'


export default class SpotList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []

    }
  }

  componentDidMount() {
    this.getSpot()
  }

  getSpot() {
    return fetch('http://e6d63ea9.ngrok.io/api/sites/search/')
      .then((res) => { return res.json() })
      .then((responseJson) => {
        this.setState({
          data: responseJson.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
      .done()
  }

  renderItem = (item) => {
    return (
      <View>
        <Image
          source/>
        <Text>{item.spotName}{item.spotLevel}</Text>
      </View>
    )
  };

  render() {
    return (

      <View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => { return item.id }}
        />
      </View>
    )
  }
}
