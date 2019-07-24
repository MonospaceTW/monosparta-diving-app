import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import {
  Card,
  CardItem
} from 'native-base';

import { Container, Button } from 'native-base';
import Color from '../config/color'
import Styles from '../config/style'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardContainer:{
    marginRight: 25,
  },
  imageWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  spotImg: {
    width: width * 0.75,
    height: height * 0.3,
    borderRadius: 6
  },
})

export default class ExploreCard extends React.Component {
  render() {
    return (
      <View style={styles.imageWrapper}>
        <TouchableOpacity>
          <Card style={styles.cardContainer}>
            <CardItem cardBody>
              <Image source={this.props.info.img1} style={styles.spotImg} />
            </CardItem>
            <CardItem>
              <Text>{this.props.info.name1}</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    )
  }
}
