import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
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
    marginRight: 25,
    width: width * 0.75,
    height: height * 0.4,
    borderRadius: 6,
    borderColor:'transparent',
    overflow: 'hidden'
  },
  imageWrapper: {
    flex: 1,
  },
  spotImg: {
    height: height * 0.3,
    width: null,
    flex: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  articleTxt: {
    fontSize: 16,
    fontWeight:'bold'
  }
})

export default class ArticleCard extends React.Component {

  render() {
    return (
      <View style={styles.imageWrapper}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Card style={styles.cardContainer}>
              <CardItem cardBody>
                <Image source={{uri: this.props.data.img}} style={styles.spotImg} />
              </CardItem>
              <CardItem>
                <Text style={styles.articleTxt}>{this.props.data.title}</Text>
              </CardItem>
            </Card>
          </TouchableOpacity>
      </View>
    )
  }
}
