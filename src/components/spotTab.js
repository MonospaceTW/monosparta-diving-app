import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList
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
    marginBottom: 10
  }
})


export default class SpotTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingModalVisible: false
    }
  }
  onShowSpotResult = () => {
    if (this.props.spotData.length === 0) {
      return (
        <View style={{ alignItems: 'center', paddingTop: 25 }}>
          <Text style={styles.txt}>找不到結果</Text>
          <Text style={styles.txt}>請調整關鍵字再試試看！</Text>
        </View>
      )
    } else {
      return (
        <FlatList
          data={this.props.spotData}
          extraData={this.props}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          onEndReachedThreshold={1}
          onEndReached={this.props.onGetNextSpotPage}
        />
      )
    }
  }

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (

      <ListItem onPress={this.onGetSpotDetail.bind(this, item.id)}>
        <Text>{item.name}</Text>
      </ListItem>
    )
  };

  onGetSpotDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `spot/${id}`);
      let responseJson = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseDetail = await navigate('spotDetail', {
        data: responseJson.item[0],
        comment: responseJson.comment,
        nearShop: responseJson.Nearby,
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
        {this.onShowSpotResult()}
        <LoadingModal
          loadingModalVisible={this.state.loadingModalVisible}
        />
      </ScrollView>

    )
  }
}
