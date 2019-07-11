import React, { Component } from 'react';
import Home from './hSpot/index';

import SearchPage from '../Page/Search/index';

import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View} from 'react-native';
import {
    createStackNavigator, createAppContainer, createBottomTabNavigator,
} from 'react-navigation';
export default class Pages extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(

            <AppContainer/>

        )
    }
}


const HomeNavigator = createStackNavigator({
    Home: {screen: Home},

},{
     initialRouteName: 'Home',
 })
;

const SearchNavigator = createStackNavigator({
    SearchPage: {screen: SearchPage},
      
},{
     initialRouteName: 'SearchPage',
 })
;

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
      screen: SearchNavigator,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({focused, tintColor}) => (
                 <Icon
                     name={focused? 'md-search' : 'md-search' }
                     size={24}
                 />
             ),
      }
    },

    Home:
    {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({focused, tintColor}) => (
                 <Icon
                     name={focused? 'md-home' : 'md-home' }
                     size={24}
                 />
             ),
      }
    },

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

},{
     initialRouteName: 'Home',
     tabBarOptions: {
          inactiveTintColor: "#FFFFFF",
          activeTintColor: "#444444",
          labelStyle: {
             fontSize: 12,
          },
          activeBackgroundColor: '#E8E7E7'
       }
 })
;

const AppContainer = createAppContainer(TabNavigator);
