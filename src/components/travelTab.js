import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Text
} from 'react-native';
import {
  Card,
  CardItem,
  Tab,
  Tabs
} from 'native-base';
import ArticleCard from './articleCard';
import Api from '../config/api'

const styles = StyleSheet.create({
  cardListContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default class TravelTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount = async () => {
    try {
      let response = await fetch(Api.url + `article/category/travel`);
      let responseValue = await response.json();

      this.setState({
        responseValue: responseValue.item
      })
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  onGetArticleDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(Api.url + `article/${id}`);
      let responseJson = await response.json();
      let responseDetail = await navigate('articleDetail', { data: responseJson.item[0] });
    }
    catch (err) {
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
      <View style={styles.cardListContainer}>
        <FlatList
          data={this.state.responseValue}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }
}
