import React, { Component } from 'react';

import {
  Text,
  View,
} from 'react-native'
import {
  List,
  ListItem
} from 'native-base';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  onShowArticleResult = () => {
    if (this.props.articleData === '') {
      return <View />
    } else {
      return this.props.articleData.map((item) => {
        return (
          <ListItem>
            <Text>{item.title}</Text>
          </ListItem>
        )
      })
    }
  }

  render() {
    return (
      <View>
         {this.onShowArticleResult()}
      </View>
    )
  }
}
