import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  List,
  ListItem
} from 'native-base';

import Api from '../config/api';
import Styles from '../config/style';

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    color: '#969696'
  }
  })

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  onShowKnowledgeResult = () => {
    if (this.props.knowledgeData.length === 0) {
      return (
        <View style={{ alignItems: 'center', paddingTop:25}}>
          <Text style={styles.txt}>找不到結果</Text>
          <Text style={styles.txt}>請調整關鍵字再試試看！</Text>
        </View>
      )
    } else {
      return this.props.knowledgeData.map((item) => {
        return (
          <ListItem key={item.id} onPress={this.onGetKnowledgeDetail.bind(this, item.id)}>
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
      navigate('errorPage')
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
