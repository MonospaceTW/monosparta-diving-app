import React, { Component } from 'react';

import {
  SafeAreaView,
  Modal,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import {
  Tab,
  Tabs,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Input
} from 'native-base';

import ShopTab from '../components/shopTab';
import SpotTab from '../components/spotTab';
import KnowledgeTab from '../components/knowledgeTab';
import Api from '../config/api';
import Styles from '../config/style';
import Colors from '../config/color';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      modalVisible: true,
      searchResult: []
    }
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  onTextChange = (text) => {
    this.setState({ text })
  }
  onSearch = async () => {
    // const { navigate } = this.props.navigation;
    const keyword = encodeURIComponent(this.state.text)
    try {
      let response = await fetch(Api.url + `keyword/${keyword}`);
      let responseJson = await response.json();
      this.setState({
        searchResult : responseJson
      })
      console.log(this.state.searchResult.article)
      // let responseDetail = await navigate('shopDetail', { data: responseJson.item[0] });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  changePageHome = () => {
    const { goBack } = this.props.navigation;
    goBack()
  }

  render() {
    return (
      <Modal
        animationType="none"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
        }}
      >
        <View style={{ flex: 1 }}>
          <Header style={{ borderBottomWidth: 0, backgroundColor: 'white' }}>
            <Left>
              <TouchableOpacity onPress={this.changePageHome}>
                <Icon name='arrow-back' />
              </TouchableOpacity>
            </Left>
            <Body>
              <Input
                placeholder='試試野柳？'
                // style={styles.inputTxt}
                value={this.state.text}
                onChangeText={this.onTextChange}
                onSubmitEditing={this.onSearch}
              />
            </Body>
            <Right>
              <TouchableOpacity onPress={this.onSearch}>
                <Icon name='search' />
              </TouchableOpacity>
            </Right>
          </Header>


          <Tabs tabBarUnderlineStyle={{ backgroundColor: Colors.mainBlue }}>
            <Tab
              heading="潛點"
              tabStyle={{ backgroundColor: Colors.white }}
              activeTabStyle={{ backgroundColor: Colors.white }}
              textStyle={{ color: Colors.mainBlue }}
              activeTextStyle={{ color: Colors.mainBlue }}
            >
              <SpotTab
                spotData={this.state.searchResult.spot}
              />
            </Tab>
            <Tab
              heading="潛店"
              tabStyle={{ backgroundColor: Colors.white }}
              activeTabStyle={{ backgroundColor: Colors.white }}
              textStyle={{ color: Colors.mainBlue }}
              activeTextStyle={{ color: Colors.mainBlue }}
            >
              <ShopTab
                shopData={this.state.searchResult.shop}
              />
            </Tab>
            <Tab
              heading="知識"
              tabStyle={{ backgroundColor: Colors.white }}
              activeTabStyle={{ backgroundColor: Colors.white }}
              textStyle={{ color: Colors.mainBlue }}
              activeTextStyle={{ color: Colors.mainBlue }}
            >
              <KnowledgeTab
                articleData={this.state.searchResult.article}
              />
            </Tab>
          </Tabs>

        </View>
      </Modal>
    )
  }
}


