import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  FlatList
} from 'react-native'
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

export default class ArticleTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingModalVisible: false
    }
  }
  onShowArticleResult = () => {
    if (this.props.articleData.length === 0) {
      return (
        <View style={{ alignItems: 'center', paddingTop: 25 }}>
          <Text style={styles.txt}>找不到結果</Text>
          <Text style={styles.txt}>請調整關鍵字再試試看！</Text>
        </View>
      )
    } else {
      return (
        <FlatList
          data={this.props.articleData}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          onEndReachedThreshold={1}
          onEndReached={this.props.onGetNextArticlePage}
        />
      )
    }
  }

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (

      <ListItem onPress={this.onGetArticleDetail.bind(this, item.id)}>
        <Text>{item.name}</Text>
      </ListItem>
    )
  };

  onGetArticleDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `article/${id}`);
      let responseJson = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseDetail = await navigate('articleDetail', { data: responseJson.item[0] });
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
        {this.onShowArticleResult()}
        <LoadingModal
          loadingModalVisible={this.state.loadingModalVisible}
        />
      </ScrollView>
    )
  }
}
