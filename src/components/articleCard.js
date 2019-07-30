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
    marginTop: 20,
    width: width * 0.9,
    height: height * 0.5,
    borderRadius: 5
  },
  imageWrapper: {
    flex: 1,
  },
  spotImg: {
    height: height * 0.3,
    width: null,
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5

  },
  articleTxt: {
    fontSize: 20
  }
})

export default class ArticleCard extends React.Component {

  render() {
    return (
      <View style={styles.imageWrapper}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Card style={styles.cardContainer}>
            <CardItem cardBody>
              <Image source={{ uri: this.props.articleInfo.img }} style={styles.spotImg} />
            </CardItem>
            <CardItem>
              <Text style={styles.articleTxt}>{this.props.articleInfo.title}</Text>
            </CardItem>
            <CardItem style={{marginTop: -5}}>
              <Text numberOfLines={1}>{this.props.articleInfo.content}</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    )
  }
}
