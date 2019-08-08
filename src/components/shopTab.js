import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import {
  ListItem
} from 'native-base';

import Api from '../config/api';
import Styles from '../config/style';
import LoadingModal from './loadingModal';


const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    color: '#969696',
    marginBottom:10
  }
  })


export default class ShopTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingModalVisible: false
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
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `shop/${id}`);
      let responseJson = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseDetail = await navigate('shopDetail', { data: responseJson.item[0],
        comment: responseJson.comment,
        commentTotal: responseJson.commentTotal
       });
    }
    catch (err) {
      this.setLoadingModalVisible(false)
      navigate('errorPage')
      console.log('err:', err)
    }
  }

  setLoadingModalVisible(visible) {
    this.setState({ loadingModalVisible: visible });
  }

  render() {
    return (
      <ScrollView style={Styles.container}>
        {this.onShowShopResult()}
        <LoadingModal
            loadingModalVisible={this.state.loadingModalVisible}
          />
      </ScrollView>
    )
  }
}
