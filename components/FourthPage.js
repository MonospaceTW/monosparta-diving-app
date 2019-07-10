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

export default class FourthPage extends Component<Props> {

    render() {

      const { navigate } = this.props.navigation;

      return(
        
        <Text style={{padding: 30}}>This is Fourthpage</Text>
        
      );
    }
  }
