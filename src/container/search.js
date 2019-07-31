import React, { Component } from 'react';

import {
  Modal,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native'
import {
  Tab,
  Tabs,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Input
} from 'native-base';

import SpotTab from '../components/spotTab';
import ShopTab from '../components/shopTab';
import KnowledgeTab from '../components/knowledgeTab';
import Api from '../config/api';
import Styles from '../config/style';
import Colors from '../config/color';
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: Colors.gray,
    padding: 10
  }
})

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      modalVisible: true,
      spotResult: [],
      shopResult: [],
      knowledgeResult: [],
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
        spotResult: responseJson.spot,
        shopResult: responseJson.shop,
        knowledgeResult: responseJson.article,
        text:''
      })
      
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
                <Icon ios='ios-arrow-back' android="md-arrow-back" style={styles.icon} />
              </TouchableOpacity>
            </Left>
            <Body>
              <Input
                placeholder='試試野柳？'
                value={this.state.text}
                onChangeText={this.onTextChange}
                onSubmitEditing={this.onSearch}
                style={{width:'100%'}}
              />
            </Body>
            <Right>
              <TouchableOpacity onPress={this.onSearch}>
                <Icon name='search' style={styles.icon}/>
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
                spotData={this.state.spotResult}
                navigation={this.props.navigation}
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
                shopData={this.state.shopResult}
                navigation={this.props.navigation}
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
                knowledgeData={this.state.knowledgeResult}
                navigation={this.props.navigation}
              />
            </Tab>
          </Tabs>

        </View>
      </Modal>
    )
  }
}


