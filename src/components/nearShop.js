import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import Styles from '../config/style';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ExploreCard from '../components/exploreCard';
import Api from '../config/api';
import LoadingModal from '../components/loadingModal';

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 15
  },
})

export default class NearShop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingModalVisible: false
    }
  }

  renderNearShop = () => {
    return this.props.nearShop.map((item) => {
      return (
        <ExploreCard
          key={item.id}
          data={item}
          onPress={this.onGetShopDetail.bind(this, item.id)}
        />
      )
    })
  }

  onGetShopDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `shop/${id}`);
      let responseJson = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseDetail = await navigate('shopDetail', {
        data: responseJson.item[0],
        comment: responseJson.comment
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
      <View>
        <View style={Styles.component}>
          <View style={{ flexDirection: 'row', alignItems: 'baseline', marginBottom: 15 }}>
            <FontAwesome name="ship" size={18} style={Styles.icon} />
            <Text style={Styles.subtitleGray}>附近潛店</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.renderNearShop()}
        </ScrollView>

        <LoadingModal
          loadingModalVisible={this.state.loadingModalVisible}
        />
      </View>
    );
  }

}
