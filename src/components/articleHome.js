import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList
} from 'react-native';

import ArticleCard from './articleCard';
import Styles from '../config/style';



export default class ArticleHome extends React.Component {

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (
      <ArticleCard articleInfo={item} />
    )
  };

  render() {
    return (
      <View>
        <Text style={Styles.title}>{this.props.title}</Text>
        <FlatList
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          horizontal={true}
        />
      </View>
    )
  }
}
