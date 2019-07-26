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

import Btn from '../components/button'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 25,
  },
  imageWrapper: {
    flex: 1,
  },
  spotImg: {
    height: height * 0.4,
    width: null,
    flex: 1,
    borderRadius: 5,
  },
  articleTxt: {
    fontSize: 20
  },
  btnWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default class ArticleCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      btnTxt: '顯示更多'
    }
  }
  render() {
    return (
      <View style={styles.imageWrapper}>
        <TouchableOpacity>
          <Card style={styles.cardContainer}>
            <CardItem cardBody>
              <Image source={this.props.img} style={styles.spotImg} />
            </CardItem>
            <CardItem>
              <Text style={styles.articleTxt}>{this.props.title}</Text>
            </CardItem>
            <CardItem>
              <Text numberOfLines={2}>{this.props.content}</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>

        <View style={styles.btnWrapper}>
          <Btn
           text={this.state.btnTxt}
           onPress={this.props.onClick}
           select={false}
           />
        </View>
      </View>
    )
  }
}
