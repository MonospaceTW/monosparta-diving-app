import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from 'react-native';

import { Content, Card, CardItem } from 'native-base';

import Api from '../config/api'
import Styles from '../config/style';
import Colors from '../config/color';
import ArticleCard from '../components/articleCard';

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray
  }
})

export default class PageTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articleList: [],
      currentPage: 0,
      lastPage: 0,
    }
  }

  componentDidMount = async () => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(Api.url + `article?page=1`);
      let responseJson = await response.json();
      this.setState({
        articleList: responseJson.item.data,
        currentPage: responseJson.item.current_page,
        lastPage: responseJson.item.last_page
      })
    }
    catch (err) {
      navigate('errorPage')
      console.log('err:', err)
    }
  }

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (
      <ArticleCard
        articleInfo={item}
      />
    )
  };

  onGetNextPage = async () => {
    let page = this.state.currentPage + 1
    const { navigate } = this.props.navigation;
    if (page <= this.state.lastPage ) {
      try {
        let response = await fetch(Api.url + `article?page=${page}`);
        let responseJson = await response.json();
        this.setState({
          articleList: this.state.articleList.concat(responseJson.item.data),
          currentPage: responseJson.item.currentPage
        })

        console.log(this.state.articleList)
      }
      catch (err) {
        navigate('errorPage')
        console.log('err:', err)
      }
    }
  }

  render() {
    return (
      <View style={styles.content}>
        <FlatList
          data={this.state.articleList}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          onEndReached={this.onGetNextPage}
        />
      </View>
    )
  }
}


