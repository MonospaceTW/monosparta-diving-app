import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import {
  Tab,
  Tabs
} from 'native-base';
import Constants from 'expo-constants'

import Colors from '../config/color';
import Styles from '../config/style';
import Api from '../config/api';

import KnowTab from '../components/knowTab';
import TravelTab from '../components/travelTab';
import LicenseTab from '../components/licenseTab';


const styles = StyleSheet.create({
})
export default class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  onGetArticleDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(Api.url + `article/${id}`);
      let responseJson = await response.json();
      let responseDetail = await navigate('articleDetail', { data: responseJson.item });
    }
    catch (err) {
      console.log('err:', err)
    }
  }


  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={Styles.container}>
          <Tabs style={{marginTop: Constants.statusBarHeight}} tabBarUnderlineStyle={{ backgroundColor: Colors.mainBlue }} >
            <Tab
              heading="知識"
              tabStyle={{ backgroundColor: Colors.white }}
              activeTabStyle={{ backgroundColor: Colors.white }}
              textStyle={{ color: Colors.mainBlue }}
              activeTextStyle={{ color: Colors.mainBlue }}
            >
              <KnowTab
                navigation={this.props.navigation}
              />
            </Tab>
            <Tab
              heading="旅遊"
              tabStyle={{ backgroundColor: Colors.white }}
              activeTabStyle={{ backgroundColor: Colors.white }}
              textStyle={{ color: Colors.mainBlue }}
              activeTextStyle={{ color: Colors.mainBlue }}
            >
              <TravelTab
                navigation={this.props.navigation}
              />
            </Tab>
            <Tab
              heading="證照"
              tabStyle={{ backgroundColor: Colors.white }}
              activeTabStyle={{ backgroundColor: Colors.white }}
              textStyle={{ color: Colors.mainBlue }}
              activeTextStyle={{ color: Colors.mainBlue }}
            >
              <LicenseTab
                navigation={this.props.navigation}
              />
            </Tab>
          </Tabs>
        </View>
      </SafeAreaView>
    )
  }
}
