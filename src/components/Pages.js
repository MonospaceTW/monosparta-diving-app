import React, { Component } from 'react'

import FontAwesome from '@expo/vector-icons/FontAwesome'

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
import { TouchableOpacity } from 'react-native-gesture-handler';
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
            style={ {color:Colors.mainBlue}}
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
            style={ {color:Colors.mainBlue}}
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
  article: { 
    screen: Article 
  },
  articleDetail: {
    screen: ArticleDetail
  }
}, {
    initialRouteName: 'article'
  })

const TabNavigator = createBottomTabNavigator({

  Home:
  {
    screen: homeNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => {
        return (
          <FontAwesome name="home" size={24} style={{ color: '#0288D1' }} />

        )
      }
    }
  },

  Article:
  {
    screen: articleNavigator,
    navigationOptions: {
      tabBarLabel: 'Article',
      tabBarIcon: ({ focused }) => {
        return (
          <FontAwesome name="book" size={24} style={{ color: '#0288D1' }} />
        )
      }
    }
  }


}, {
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: '#E8E7E7'
    }
  })


const AppContainer = createAppContainer(TabNavigator)
