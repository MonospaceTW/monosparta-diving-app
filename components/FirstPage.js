import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    Linking,
} from 'react-native';

export default class FirstPage extends Component<Props> {
    static navigationOptions = {
        title: 'FirstPage',
        headerTitleStyle : {
          flex : 1,
          textAlign: 'center'
        },
        headerRight: (<View/>)
    };

    render() {
      return(
        
        <Text style={{padding: 30}}>This is FirstPage</Text>
        
      );
    }
  }
