import React, { Component } from 'react'

import FontAwesome from '@expo/vector-icons/FontAwesome'

import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation'

import Home from '../container/home';
import Article from '../container/article';
import ArticleDetail from '../container/articleDetail';
import SpotList from '../container/spotList';
import ShopList from '../container/shopList';
import SpotDetail from '../container/spotDetail';
import ShopDetail from '../container/shopDetail';
import Colors from '../config/color';


export default class Pages extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

const homeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  },
  spotList: {
    screen: SpotList,
    navigationOptions: ({ navigation }) => ({
      headerRight:
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => navigation.state.params.showModal()}
        >
          <FontAwesome
            name="filter"
            size={30}
            style={{ color: Colors.mainBlue }}
          />
        </TouchableOpacity>
    })
  },
  spotDetail: {
    screen: SpotDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.data.name}`
    }),
  },
  shopList: {
    screen: ShopList,
    navigationOptions: ({ navigation }) => ({
      headerRight:
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => navigation.state.params.showModal()}
        >
          <FontAwesome
            name="filter"
            size={30}
            style={{ color: Colors.mainBlue }}
          />
        </TouchableOpacity>
    })
  },
  shopDetail: {
    screen: ShopDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.data.name}`,
    }),
  },
}, {
    initialRouteName: 'Home',
  })

const articleNavigator = createStackNavigator({
  // article: {
  //   screen: Article
  // },
  articleDetail: {
    screen: ArticleDetail
  }
}, {
    initialRouteName: 'articleDetail'
  })

const TabNavigator = createBottomTabNavigator({

  Home:
  {
    screen: homeNavigator,
    navigationOptions: {
      tabBarLabel: '首頁',
      tabBarIcon: ({ focused }) => (
        focused ?
          <Image style={{ width: 30, height: 30 }} source={require('../assets/fishFocus.png')} /> :
          <Image style={{ width: 30, height: 30 }} source={require('../assets/fish.png')} />
      )
    }
  },

  Article:
  {
    screen: articleNavigator,
    navigationOptions: {
      tabBarLabel: '知識',
      tabBarIcon: ({ focused }) => (
        focused ?
          <Image style={{ width: 30, height: 30 }} source={require('../assets/bookFocus.png')} /> :
          <Image style={{ width: 30, height: 30 }} source={require('../assets/book.png')} />
      )
    }
  }
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeBackgroundColor: '#E8E7E7'
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold'
    },
  })


const AppContainer = createAppContainer(TabNavigator)
