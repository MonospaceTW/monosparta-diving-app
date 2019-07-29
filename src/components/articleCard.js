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
import Btn from '../components/button'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 25,
    width: width * 0.75
  },
  imageWrapper: {
    flex: 1,
  },
  spotImg: {
    height: height * 0.3,
    width: null,
    flex: 1,
    borderRadius: 6,
  },
  articleTxt: {
    fontSize: 20
  }
})

export default class ArticleCard extends React.Component {

  render() {
    return (
      <View style={styles.imageWrapper}>
          <TouchableOpacity>
            <Card style={styles.cardContainer}>
              <CardItem cardBody>
                <Image source={this.props.info.img1} style={styles.spotImg} />
              </CardItem>
              <CardItem>
                <Text style={styles.articleTxt}>{this.props.info.name1}</Text>
              </CardItem>
              <CardItem>
                <Text numberOfLines={2}>{this.props.info.content1}</Text>
              </CardItem>
            </Card>
          </TouchableOpacity>
      </View>
    )
  }
}
