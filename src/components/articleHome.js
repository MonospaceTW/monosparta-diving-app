import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import ArticleCard from './exploreCard';
import Styles from '../config/style';



export default class ArticleHome extends React.Component {
  render() {
    return (
      <View>
        <Text style={Styles.title}>{this.props.data.title}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ArticleCard info={this.props.data} />
          <ArticleCard info={this.props.data} />
          <ArticleCard info={this.props.data} />
        </ScrollView>
      </View>
    )
  }
}
