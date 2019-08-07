import React, { Component } from 'react';
import { Item, Input, Icon } from 'native-base';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation'

import Home from '../container/home';
import Article from '../container/article';
import ArticleDetail from '../container/articleDetail';
import Search from '../container/search';
import SpotList from '../container/spotList';
import ShopList from '../container/shopList';
import SpotDetail from '../container/spotDetail';
import ShopDetail from '../container/shopDetail';
import ErrorPage from '../container/errorPage'
import Colors from '../config/color';


import PageTest from '../container/pageTest'

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    marginTop: 30,
  },
  inputTxt: {
    paddingLeft: 15
  },
  icon: {
    color: Colors.mainBlue,
    paddingRight: 15
  }
})
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
    navigationOptions: {
      header: null
    }
  },
  search: {
    screen: Search,
    navigationOptions: {
      header: null
     }
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
  articleDetail: {
    screen: ArticleDetail
  },
  errorPage: {
    screen: ErrorPage,
    navigationOptions: {
      header: null
     }
    },
  PageTest: {
    screen: PageTest
  }
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: '#0288D1',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
},
}

)

const articleNavigator = createStackNavigator({
  article: {
    screen: Article,
    navigationOptions: {
      header: null
     }
  },
  articleDetail: {
    screen: ArticleDetail
  },
  errorPage: {
    screen: ErrorPage,
    navigationOptions: {
      header: null
     }
  }
}, {
    initialRouteName: 'article'
  })

const TabNavigator = createBottomTabNavigator({

  Home:
  {
    screen: homeNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '首頁',
      tabBarIcon: ({ focused }) => (
        focused ?
          <Image style={{ width: 30, height: 30 }} source={require('../assets/fishFocus.png')} /> :
          <Image style={{ width: 30, height: 30 }} source={require('../assets/fish.png')} />
      )
    })
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
      activeBackgroundColor: '#E8E7E7',
      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color:Colors.mainBlue,
        padding:3
      },
    },
    
  })


const AppContainer = createAppContainer(TabNavigator)
