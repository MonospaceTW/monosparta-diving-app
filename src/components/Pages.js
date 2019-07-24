import React, { Component } from 'react'

import {
  FontAwesome,
} from '@expo/vector-icons'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation'

import Home from '../container/home'
import Search from '../container/search'
import SpotList from '../container/spotList'
import ShopList from '../container/shopList'
import SpotDetail from '../container/spotDetail'
import ShopDetail from '../container/shopDetail'


export default class Pages extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

const homeNavigator = createStackNavigator({
  Home: { screen: Home },
  spotList: { screen: SpotList },
  shopList: {screen: ShopList}
}, {
    initialRouteName: 'Home'
  })


const searchNavigator = createStackNavigator({
  Search: { screen: Search },
  spotList: { screen: SpotList },

  spotDetail: {screen: SpotDetail},
  shopList: {screen: ShopList},
  shopDetail: {screen: ShopDetail}

}, {
    initialRouteName: 'Search',
  })


const TabNavigator = createBottomTabNavigator({
  // page1:
  // {
  //   screen: FirstPage,
  //   navigationOptions: {
  //     tabBarLabel: "People",
  //     tabBarIcon: ({focused, tintColor}) => (
  //              <Icon
  //                  name={focused? 'md-people' : 'md-people' }
  //                  size={24}
  //              />
  //          ),
  //   }
  // },

  Search:
  {
    screen: searchNavigator,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ focused }) => {
        return (
          <FontAwesome name="home" size={24} style={{color : '#0288D1'}} />

        )
      }
    }
  },

  Home:
  {
    screen: homeNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => {
        return (
          <FontAwesome name="book" size={24} style={{color : '#0288D1'}} />
        )
      }
    }
  }

  // page4:
  // {
  //   screen: FourthPage,
  //   navigationOptions: {
  //     tabBarLabel: "Notifications",
  //     tabBarIcon: ({focused, tintColor}) => (
  //              <Icon
  //                  name={focused? 'md-notifications' : 'md-notifications' }
  //                  size={24}
  //              />
  //          ),
  //   }
  // },

  // page5:
  // {
  //   screen: FifthPage,
  //   navigationOptions: {
  //     tabBarLabel: "Person",
  //     tabBarIcon: ({focused, tintColor}) => (
  //              <Icon
  //                  name={focused? 'md-person' : 'md-person' }
  //                  size={24}
  //              />
  //          ),
  //   }
  // },

}, {
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: '#E8E7E7'
    }
  })


const AppContainer = createAppContainer(TabNavigator)
