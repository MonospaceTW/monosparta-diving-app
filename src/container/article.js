import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform
} from 'react-native';
import {
  Tab,
  Tabs,
  TabHeading
} from 'native-base';
import Constants from 'expo-constants'

import Colors from '../config/color';
import Styles from '../config/style';
import Api from '../config/api';

import KnowTab from '../components/knowTab';
import TravelTab from '../components/travelTab';
import LicenseTab from '../components/licenseTab';
import LoadingModal from '../components/loadingModal';



const styles = StyleSheet.create({
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
export default class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      knowledgeArticleTotal: 0,
      travelArticleTotal: 0,
      licenseArticleTotal: 0,
      knowledgeArticleResult: [],
      travelArticleResult: [],
      licenseArticleResult: [],

      travelCurrentPage: 0,
      travelNextPage: '',
      travelLastPage: 0,
      knowCurrentPage: 0,
      knowNextPage: '',
      knowLastPage: 0,
      licenseCurrentPage: 0,
      licenseNextPage: '',
      licenseLastPage: 0,

      loadingModalVisible: false
    }
  }

  componentDidMount = async () => {
    const { navigate } = this.props.navigation;
    try {
      let showLoading = this.setLoadingModalVisible(true);
      let responseKnowledgeArticle = await fetch(Api.url + `article/category/knowledge`);
      let knowledgeArticleResult = await responseKnowledgeArticle.json();
      let responseTravelArticle = await fetch(Api.url + `article/category/travel`);
      let travelArticleResult = await responseTravelArticle.json();
      let responseLicenseArticle = await fetch(Api.url + `article/category/license`);
      let licenseArticleResult = await responseLicenseArticle.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      this.setState({
        knowledgeArticleResult: knowledgeArticleResult.item.data,
        travelArticleResult: travelArticleResult.item.data,
        licenseArticleResult: licenseArticleResult.item.data,
        knowledgeArticleTotal: knowledgeArticleResult.item.total,
        travelArticleTotal: travelArticleResult.item.total,
        licenseArticleTotal: licenseArticleResult.item.total,
        travelCurrentPage: travelArticleResult.item.current_page,
        travelNextPage: travelArticleResult.item.next_page_url,
        travelLastPage: travelArticleResult.item.last_page,
        knowCurrentPage: knowledgeArticleResult.item.current_page,
        knowNextPage: knowledgeArticleResult.item.next_page_url,
        knowLastPage: knowledgeArticleResult.item.last_page,
        licenseCurrentPage: licenseArticleResult.item.current_page,
        licenseNextPage: licenseArticleResult.item.next_page_url,
        licenseLastPage: licenseArticleResult.item.last_page
      })
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

  onGetNextTravelPage = async () => {
    let page = this.state.travelCurrentPage + 1
    if (page <= this.state.travelLastPage) {
      try {
        if (this.state.travelNextPage !== '') {
          let response = await fetch(this.state.travelNextPage);
          let responseJson = await response.json();
          this.setState({
            travelArticleResult: this.state.travelArticleResult.concat(responseJson.item.data),
            travelCurrentPage: responseJson.item.current_page,
            travelNextPage: responseJson.item.next_page_url
          })
        }
      }
      catch (err) {
        navigate('errorPage')
        console.log('err:', err)
      }
    }
  }

  onGetNextKnowPage = async () => {
    let page = this.state.knowCurrentPage + 1
    if (page <= this.state.knowLastPage) {
      try {
        if (this.state.knowNextPage !== '') {
          let response = await fetch(this.state.knowNextPage);
          let responseJson = await response.json();
          this.setState({
            knowledgeArticleResult: this.state.knowledgeArticleResult.concat(responseJson.item.data),
            knowCurrentPage: responseJson.item.current_page,
            knowNextPage: responseJson.item.next_page_url
          })
        }
      }
      catch (err) {
        navigate('errorPage')
        console.log('err:', err)
      }
    }
  }

  onGetNextLicensePage = async () => {
    let page = this.state.licenseCurrentPage + 1
    if (page <= this.state.licenseLastPage) {
      try {
        if (this.state.licenseNextPage !== '') {
          let response = await fetch(this.state.licenseNextPage);
          let responseJson = await response.json();
          this.setState({
            licenseArticleResult: this.state.licenseArticleResult.concat(responseJson.item.data),
            licenseCurrentPage: responseJson.item.current_page,
            licenseNextPage: responseJson.item.next_page_url
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
        <View style={Styles.container}>
          <Tabs
            style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}
            tabBarUnderlineStyle={{ backgroundColor: Colors.mainBlue }}
          >
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: Colors.white }}>
                  <Text style={{ color: Colors.mainBlue, fontSize: 17 }}>知識</Text>
                  <View style={this.state.knowledgeArticleTotal > 0 ? styles.activeBadge : styles.badge}>
                    <Text style={this.state.knowledgeArticleTotal > 0 ? styles.activeText : styles.badgeText}>{this.state.knowledgeArticleTotal > 99 ? '99+' : this.state.knowledgeArticleTotal}</Text>
                  </View>
                </TabHeading>
              }
              tabStyle={{ backgroundColor: Colors.white }}
              activeTabStyle={{ backgroundColor: Colors.white }}
            >
              <KnowTab
                navigation={this.props.navigation}
                articleResult={this.state.knowledgeArticleResult}
                onGetNextKnowPage={this.onGetNextKnowPage}
              />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: Colors.white }}>
                  <Text style={{ color: Colors.mainBlue, fontSize: 17 }}>旅遊</Text>
                  <View style={this.state.travelArticleTotal > 0 ? styles.activeBadge : styles.badge}>
                    <Text style={this.state.travelArticleTotal > 0 ? styles.activeText : styles.badgeText}>{this.state.travelArticleTotal > 99 ? '99+' : this.state.travelArticleTotal}</Text>
                  </View>
                </TabHeading>
              }
              tabStyle={{ backgroundColor: Colors.white }}
              activeTabStyle={{ backgroundColor: Colors.white }}
            >
              <TravelTab
                navigation={this.props.navigation}
                articleResult={this.state.travelArticleResult}
                onGetNextTravelPage={this.onGetNextTravelPage}
              />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: Colors.white }}>
                  <Text style={{ color: Colors.mainBlue, fontSize: 17 }}>證照</Text>
                  <View style={this.state.licenseArticleTotal > 0 ? styles.activeBadge : styles.badge}>
                    <Text style={this.state.licenseArticleTotal > 0 ? styles.activeText : styles.badgeText}>{this.state.licenseArticleTotal > 99 ? '99+' : this.state.licenseArticleTotal}</Text>
                  </View>
                </TabHeading>
              }
              tabStyle={{ backgroundColor: Colors.white }}
              activeTabStyle={{ backgroundColor: Colors.white }}
            >
              <LicenseTab
                navigation={this.props.navigation}
                articleResult={this.state.licenseArticleResult}
                onGetNextLicensePage={this.onGetNextLicensePage}
              />
            </Tab>
          </Tabs>
        </View>
        <LoadingModal
          loadingModalVisible={this.state.loadingModalVisible}
        />
      </SafeAreaView>
    )
  }
}