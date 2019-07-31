import React, { Component } from 'react';

import {
  Text,
  View,
} from 'react-native'
import {
  List,
  ListItem
} from 'native-base';

import Api from '../config/api';
import Styles from '../config/style';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  onShowKnowledgeResult = () => {
    if (this.props.knowledgeData === '') {
      return <View />
    } else {
      return this.props.knowledgeData.map((item) => {
        return (
          <ListItem key={item.id} onPress={this.onGetKnowledgeDetail}>
            <Text>{item.title}</Text>
          </ListItem>
        )
      })
    }
  }

  onGetKnowledgeDetail = async (id) => {
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
  
  render() {
    return (
      <View style={Styles.container}>
         {this.onShowKnowledgeResult()}
      </View>
    )
  }
}
