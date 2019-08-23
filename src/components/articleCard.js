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

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    width: width * 0.9,
    height: height * 0.5,
    borderRadius: 6,
    borderColor: 'transparent',
    overflow: 'hidden'
  },
  imageWrapper: {
    flex: 1,
  },
  spotImg: {
    height: height * 0.3,
    width: null,
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'cover'

  },
  articleTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    height: 45
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
              <Text numberOfLines={2} style={styles.articleTxt}>{this.props.articleInfo.title}</Text>
            </CardItem>
            <CardItem>
              <Text numberOfLines={1} >{this.props.articleInfo.content}</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    )
  }
}
