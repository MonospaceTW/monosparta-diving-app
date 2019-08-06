import React, { Component } from 'react';

import {
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native'
import {
  Tab,
  Tabs,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Input,
  TabHeading
} from 'native-base';

import SpotTab from '../components/spotTab';
import ShopTab from '../components/shopTab';
import KnowledgeTab from '../components/knowledgeTab';
import Api from '../config/api';
import Colors from '../config/color';
const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: Colors.gray,
    padding: 10
  },
  activeBadge: {
    width: 19,
    height: 19,
    backgroundColor: Colors.mainBlue,
    borderRadius: 9.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  activeText: {
    color: Colors.white,
    fontSize: 10
  },
  badge: {
    width: 19,
    height: 19,
    backgroundColor: '#969696',
    borderRadius: 9.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  badgeText: {
    color: Colors.white,
    fontSize: 10
  }
})

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.navigation.state.params.txt,
      spotResult: this.props.navigation.state.params.spotResult,
      shopResult: this.props.navigation.state.params.shopResult,
      knowledgeResult: this.props.navigation.state.params.knowledgeResult,
      spotTotal: this.props.navigation.state.params.spotTotal,
      shopTotal: this.props.navigation.state.params.shopTotal,
      articleTotal: this.props.navigation.state.params.articleTotal
    }
  }

  onTextChange = (text) => {
    this.setState({ text })
  }
  onSearch = async () => {
    const keyword = encodeURIComponent(this.state.text)
    if (this.state.text === '') {
      return
    } else {
      try {
        let response = await fetch(Api.url + `keyword/${keyword}`);
        let responseJson = await response.json();
        this.setState({
          spotResult: responseJson.spot,
          shopResult: responseJson.shop,
          knowledgeResult: responseJson.article,
          spotTotal: responseJson.spotTotal,
          shopTotal: responseJson.shopTotal,
          articleTotal: responseJson.articleTotal
        })
      }
      catch (err) {
        console.log('err:', err)
      }
    }
  }

  changePageHome = () => {
    const { goBack } = this.props.navigation;
    goBack()
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (

      <SafeAreaView style={{ flex: 1 }}>
        <Header
          style={{
            marginTop: 15,
            backgroundColor: 'white',
            elevation: 0,
          }}
        >
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
              style={{ width: '100%' }}
            />
          </Body>
          <Right>
            <TouchableOpacity onPress={this.onSearch} style={{ elevation: 0 }}>
              <Icon name='search' style={styles.icon} />
            </TouchableOpacity>
          </Right>
        </Header>

        <Tabs
          tabBarUnderlineStyle={{ backgroundColor: Colors.mainBlue }}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: Colors.white }}>
                <Text style={{ color: Colors.mainBlue, fontSize: 17 }}>潛點</Text>
                <View style={this.state.spotTotal > 0 ? styles.activeBadge : styles.badge}>
                  <Text style={this.state.spotTotal > 0 ? styles.activeText : styles.badgeText}>{this.state.spotTotal > 99 ? '99+' : this.state.spotTotal}</Text>
                </View>
              </TabHeading>
            }
            tabStyle={{ backgroundColor: Colors.white }}
            activeTextStyle={{ color: Colors.mainBlue }}
          >
            <SpotTab
              spotData={this.state.spotResult}
              navigation={this.props.navigation}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: Colors.white }}>
                <Text style={{ color: Colors.mainBlue, fontSize: 17 }}>潛店</Text>
                <View style={this.state.shopTotal > 0 ? styles.activeBadge : styles.badge}>
                  <Text style={this.state.shopTotal > 0 ? styles.activeText : styles.badgeText}>{this.state.shopTotal > 99 ? '99+' : this.state.shopTotal}</Text>
                </View>
              </TabHeading>
            }
            tabStyle={{ backgroundColor: Colors.white }}
            activeTextStyle={{ color: Colors.mainBlue }}
          >
            <ShopTab
              shopData={this.state.shopResult}
              navigation={this.props.navigation}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: Colors.white }}>
                <Text style={{ color: Colors.mainBlue, fontSize: 17 }}>知識</Text>
                <View style={this.state.articleTotal > 0 ? styles.activeBadge : styles.badge}>
                  <Text style={this.state.articleTotal > 0 ? styles.activeText : styles.badgeText}>{this.state.articleTotal > 99 ? '99+' : this.state.articleTotal}</Text>
                </View>
              </TabHeading>
            }
            tabStyle={{ backgroundColor: Colors.white }}
            activeTextStyle={{ color: Colors.mainBlue }}
          >
            <KnowledgeTab
              knowledgeData={this.state.knowledgeResult}
              navigation={this.props.navigation}
            />
          </Tab>
        </Tabs>

      </SafeAreaView>
    )
  }
}


