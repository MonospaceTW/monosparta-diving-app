import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Button
} from 'react-native'

import { Container,  } from 'native-base';
import ExploreCard from './exploreCard'
import Color from '../config/color'
import Styles from '../config/style'
import Btn from '../components/button'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 20,
    textShadowColor: 'rgba(0,0,0,.16)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
    position: 'relative',
    marginTop: 15
  },
  btnWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default class ExploreHome extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      btnTxt: '顯示更多'
    }
  }
  render() {
    return (
      <View>
        <View style={styles.exploreContainer}>
          <Text style={styles.title}>{this.props.data.title}</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ExploreCard info={this.props.data} />
            <ExploreCard info={this.props.data} />
            <ExploreCard info={this.props.data} />
          </ScrollView>
        </View>
      </View>
    )
  }
}
