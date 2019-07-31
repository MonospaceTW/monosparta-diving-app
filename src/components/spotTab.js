import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ListItem
} from 'native-base';

import Api from '../config/api';
import Styles from '../config/style';


const styles = StyleSheet.create({

})


export default class SpotTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  onShowSpotResult = () => {
    if (this.props.spotData === '') {
      return <View />
    } else {
      return this.props.spotData.map((item) => {
        return (
          <ListItem key={item.id} onPress={this.onGetSpotDetail}>
            <Text>{item.name}</Text>
          </ListItem>
        )
      })
    }
  }

  onGetSpotDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(Api.url + `spot/${id}`);
      let responseJson = await response.json();
      let responseDetail = await navigate('spotDetail', { data: responseJson.item[0] });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        {this.onShowSpotResult()}
      </View>
    )
  }
}
