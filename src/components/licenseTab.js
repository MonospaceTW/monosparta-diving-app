import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';


import ArticleCard from './articleCard';
import Api from '../config/api';
import Colors  from '../config/color';


const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.lightGray
  }
})

export default class TravelTab extends React.Component {
  constructor(props) {
    super(props)
  }

  onGetArticleDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(Api.url + `article/${id}`);
      let responseJson = await response.json();
      let responseDetail = await navigate('articleDetail', { data: responseJson.item[0] });
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
        onPress={this.onGetArticleDetail.bind(this, item.id)}
      />
    )
  };


  render() {
    return (
      <View style={styles.content}>
        <FlatList
          data={this.props.articleResult}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }
}
