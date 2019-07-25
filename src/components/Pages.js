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
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  },
  spotList: { screen: SpotList },
  spotDetail: {
    screen: SpotDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.data.name}`,
    }),
  },
  shopList: { screen: ShopList },
  shopDetail: {
    screen: ShopDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.data.name}`,
    }),
  }

}, {
    initialRouteName: 'Home',
  })

const articleNavigator = createStackNavigator({
  Search: { screen: Search },
  spotList: { screen: SpotList },
  shopList: { screen: ShopList }
}, {
    initialRouteName: 'Search'
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
