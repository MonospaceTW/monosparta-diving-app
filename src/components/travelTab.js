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
      console.log(this.state.responseValue)
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
      />
    )
  };


  render() {
    return (
      <FlatList
        data={this.state.responseValue}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}
