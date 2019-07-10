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

export default class FifthPage extends Component<Props> {
    static navigationOptions = {
        title: 'FifthPage',
        headerTitleStyle : {
          flex : 1,
          textAlign: 'center'
        },
        headerRight: (<View/>)
    };

    render() {
      return(
        <Text style={{padding: 30}}>This is FifthPage</Text>
        
      );
    }
}
