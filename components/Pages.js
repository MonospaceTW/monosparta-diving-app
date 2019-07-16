import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/Ionicons'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation'
import Home from '../container/home'
import Search from '../container/search'
import spotList from '../container/spotList'


export default class Pages extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}


const homeNavigator = createStackNavigator({
  Home: { screen: Home }

}, {
  initialRouteName: 'Home'
})


const searchNavigator = createStackNavigator({
  Search: { screen: Search },
  spotList: {screen: spotList}

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

  Search:
    {
      screen: searchNavigator,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ focused }) => {
          return (
                <Icon
                    name={focused ? 'md-search' : 'md-search'}
                    size={24}
                />
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
                <Icon
                    name={focused ? 'md-home' : 'md-home'}
                    size={24}
                />
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
    inactiveTintColor: '#FFFFFF',
    activeTintColor: '#444444',
    labelStyle: {
      fontSize: 12
    },
    activeBackgroundColor: '#E8E7E7'
  }
})


const AppContainer = createAppContainer(TabNavigator)
