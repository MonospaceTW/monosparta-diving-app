import React, { Component } from 'react';

import {
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Platform
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
import Constants from 'expo-constants';

import SpotTab from '../components/spotTab';
import ShopTab from '../components/shopTab';
import ArticleTab from '../components/articleTab';
import LoadingModal from '../components/loadingModal';
import Api from '../config/api';
import Colors from '../config/color';

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: Colors.mainBlue,
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
      articleResult: this.props.navigation.state.params.articleResult,
      spotTotal: this.props.navigation.state.params.spotTotal,
      shopTotal: this.props.navigation.state.params.shopTotal,
      articleTotal: this.props.navigation.state.params.articleTotal,
      shopCurrentPage: this.props.navigation.state.params.shopCurrentPage,
      shopLastPage: this.props.navigation.state.params.shopLastPage,
      shopNextPage: this.props.navigation.state.params.shopNextPage,
      spotCurrentPage: this.props.navigation.state.params.spotCurrentPage,
      spotLastPage: this.props.navigation.state.params.spotLastPage,
      spotNextPage: this.props.navigation.state.params.spotNextPage,
      articleCurrentPage: this.props.navigation.state.params.articleCurrentPage,
      articleLastPage: this.props.navigation.state.params.articleLastPage,
      articleNextPage: this.props.navigation.state.params.articleNextPage,

      loadingModalVisible: false
    }
  }

  onTextChange = (text) => {
    this.setState({ text })
  }
  onSearch = async () => {
    const { navigate } = this.props.navigation;
    const keyword = encodeURIComponent(this.state.text.trim())
    if (keyword.length === 0) {
      return
    } else {
      try {
        this.setState({
          spotResult: [],
          shopResult: [],
          articleResult: []
        })
        let showLoading = this.setLoadingModalVisible(true);
        let response = await fetch(Api.url + `keyword/${keyword}`);
        let responseJson = await response.json();
        let cancelLoading = this.setLoadingModalVisible(false);
        this.setState({
          spotResult: responseJson.spot.data,
          shopResult: responseJson.shop.data,
          articleResult: responseJson.article.data,
          spotTotal: responseJson.spot.total,
          shopTotal: responseJson.shop.total,
          articleTotal: responseJson.article.total,
          shopCurrentPage: responseJson.shop.current_page,
          shopLastPage: responseJson.shop.last_page,
          shopNextPage: responseJson.shop.next_page_url,
          spotCurrentPage: responseJson.spot.current_page,
          spotLastPage: responseJson.spot.last_page,
          spotNextPage: responseJson.spot.next_page_url,
          articleCurrentPage: responseJson.article.current_page,
          articleLastPage: responseJson.article.last_page,
          articleNextPage: responseJson.article.next_page_url,
        })
      }
      catch (err) {
        this.setLoadingModalVisible(false);
        navigate('errorPage')
        console.log('err:', err)
      }
    }
  }

  onClose = () => {
    this.setState({ text: '' })
  }

  changePageHome = () => {
    const { goBack } = this.props.navigation;
    goBack()
  }

  setLoadingModalVisible(visible) {
    this.setState({ loadingModalVisible: visible });
  }

  onGetNextSpotPage = async () => {
    let page = this.state.spotCurrentPage + 1
    const { navigate } = this.props.navigation;
    if (page <= this.state.spotLastPage) {
      try {
        if (this.state.spotNextPage !== '') {
          let response = await fetch(this.state.spotNextPage);
          let responseJson = await response.json();
          this.setState({
            spotResult: this.state.spotResult.concat(responseJson.spot.data),
            spotCurrentPage: responseJson.spot.current_page,
            spotNextPage: responseJson.spot.next_page_url
          })
        }
      }
      catch (err) {
        navigate('errorPage')
        console.log('err:', err)
      }
    }
  }

  onGetNextShopPage = async () => {
    let page = this.state.shopCurrentPage + 1
    const { navigate } = this.props.navigation;
    if (page <= this.state.shopLastPage) {
      try {
        if (this.state.shopNextPage !== '') {
          let response = await fetch(this.state.shopNextPage);
          let responseJson = await response.json();
          this.setState({
            shopResult: this.state.shopResult.concat(responseJson.shop.data),
            shopCurrentPage: responseJson.shop.current_page,
            shopNextPage: responseJson.shop.next_page_url
          })
        }
      }
      catch (err) {
        navigate('errorPage')
        console.log('err:', err)
      }
    }
  }

  onGetNextArticlePage = async () => {
    let page = this.state.articleCurrentPage + 1
    const { navigate } = this.props.navigation;
    if (page <= this.state.articleLastPage) {
      try {
        if (this.state.articleNextPage !== '') {
          let response = await fetch(this.state.articleNextPage);
          let responseJson = await response.json();
          this.setState({
            articleResult: this.state.articleResult.concat(responseJson.article.data),
            articleCurrentPage: responseJson.article.current_page,
            articleNextPage: responseJson.article.next_page_url
          })
        }
      }
      catch (err) {
        navigate('errorPage')
        console.log('err:', err)
      }
    }
  }

  render() {
    return (

      <SafeAreaView style={{ flex: 1 }}>
        <Header
          style={{
            backgroundColor: 'white',
            elevation: 0,
            marginTop: Platform.OS === 'ios' ? -10 : Constants.statusBarHeight
          }}
        >
          <Left>
            <TouchableOpacity onPress={this.changePageHome}>
              <Icon ios='ios-arrow-back' android="md-arrow-back" style={styles.icon} />
            </TouchableOpacity>
          </Left>
          <Body style={{ marginLeft: 0 }}>
            <Input
              placeholder='試試野柳？'
              value={this.state.text}
              onChangeText={this.onTextChange}
              onSubmitEditing={this.onSearch}
              returnKeyType={'search'}
              style={{ width: '100%' }}
            />
          </Body>
          <Right>
            <TouchableOpacity onPress={this.onClose} style={{ elevation: 0 }}>
              <Icon name='close' style={styles.icon} />
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
              onGetNextSpotPage={this.onGetNextSpotPage}
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
              onGetNextShopPage={this.onGetNextShopPage}
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
            <ArticleTab
              articleData={this.state.articleResult}
              navigation={this.props.navigation}
              onGetNextArticlePage={this.onGetNextArticlePage}
            />
          </Tab>
        </Tabs>

        <LoadingModal
          loadingModalVisible={this.state.loadingModalVisible}
        />

      </SafeAreaView>
    )
  }
}


