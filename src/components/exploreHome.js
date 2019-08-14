import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import ExploreCard from './exploreCard';
import Styles from '../config/style';



export default class ExploreHome extends React.Component {

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (
      <ExploreCard
        data={item}
        onPress={this.props.onPress}
      />
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
