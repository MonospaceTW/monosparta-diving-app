import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import ExploreCard from './exploreCard';
import Styles from '../config/style';



export default class ExploreHome extends React.Component {
  render() {
    return (
      <View>
        <Text style={Styles.title}>{this.props.data.title}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ExploreCard info={this.props.data} />
          <ExploreCard info={this.props.data} />
          <ExploreCard info={this.props.data} />
        </ScrollView>
      </View>
    )
  }
}
