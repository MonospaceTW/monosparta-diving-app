import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';


import ArticleCard from './articleCard';
import Api from '../config/api';
import Colors from '../config/color';
import Styles from '../config/style';
import LoadingModal from '../components/loadingModal';

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray
  },
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 16,
    color: '#969696',
    marginBottom: 10
  }
})

export default class TravelTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingModalVisible: false
    }
  }

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

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (
      <ArticleCard
        articleInfo={item}
        onPress={this.onGetArticleDetail.bind(this, item.id)}
      />
    )
  };

  setLoadingModalVisible(visible) {
    this.setState({ loadingModalVisible: visible });
  }


  render() {
    if (this.props.articleResult.length === 0) {
      return (
        <View style={Styles.container}>
          <View style={{ alignItems: 'center', paddingTop: 25 }}>
            <Text style={styles.txt}>找不到結果</Text>
            <Text style={styles.txt}>請調整篩選條件再試試看！</Text>
          </View>
        </View>
      )
    }
    return (
      <View style={styles.content}>
        <FlatList
          data={this.props.articleResult}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
        <LoadingModal
          loadingModalVisible={this.state.loadingModalVisible}
        />
      </View>
    )
  }
}
