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


export default class ShopTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  onShowShopResult = () => {
    if (this.props.shopData === '') {
      return <View />
    } else {
      return this.props.shopData.map((item) => {
        return (
          <ListItem key={item.id} onPress={this.onGetShopDetail}>
            <Text>{item.name}</Text>
          </ListItem>
        )
      })
    }
  }
  onGetShopDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(Api.url + `shop/${id}`);
      let responseJson = await response.json();
      let responseDetail = await navigate('shopDetail', { data: responseJson.item[0] });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        {this.onShowShopResult()}
      </View>
    )
  }
}
