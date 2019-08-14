import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native'
import {
  ListItem
} from 'native-base';

import Api from '../config/api';
import Styles from '../config/style';
import LoadingModal from './loadingModal';

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    color: '#969696',
    marginBottom:10
  }
  })

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingModalVisible: false
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
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `article/${id}`);
      let responseJson = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseDetail = await navigate('articleDetail', { data: responseJson.item[0] });
    }
    catch (err) {
      this.setLoadingModalVisible(false)
      navigate('errorPage')
      console.log('err:', err)
    }
  }

  setLoadingModalVisible(visible) {
    this.setState({ loadingModalVisible: visible });
  }

  render() {
    return (
      <ScrollView style={Styles.container}>
         {this.onShowKnowledgeResult()}
         <LoadingModal
            loadingModalVisible={this.state.loadingModalVisible}
          />
      </ScrollView>
    )
  }
}
