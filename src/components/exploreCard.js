import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
  Card,
  CardItem
} from 'native-base';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardContainer:{
    marginRight: 25,
    width: width * 0.75,
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
