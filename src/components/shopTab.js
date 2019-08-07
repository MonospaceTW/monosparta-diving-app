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
  txt: {
    fontSize: 16,
    color: '#969696'
  }
  })


export default class ShopTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  onShowShopResult = () => {
    if (this.props.shopData.length === 0) {
      return (
        <View style={{ alignItems: 'center', paddingTop:25}}>
          <Text style={styles.txt}>找不到結果</Text>
          <Text style={styles.txt}>請調整關鍵字再試試看！</Text>
        </View>
      )
    } else {
      return this.props.shopData.map((item) => {
        return (
          <ListItem key={item.id} onPress={this.onGetShopDetail.bind(this, item.id)}>
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
      let responseDetail = await navigate('shopDetail', { data: responseJson.item[0],
        comment: responseJson.comment });
    }
    catch (err) {
      navigate('errorPage')
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
