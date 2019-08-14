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
  cardContainer: {
    marginRight: 25,
    width: width * 0.75,
    borderRadius: 6,
    borderColor: 'transparent',
    overflow: 'hidden'
  },
  imageWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  spotImg: {
    width: width * 0.75,
    height: height * 0.3,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  titleTxt: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default class ExploreCard extends React.Component {
  render() {
    return (
      <View style={styles.imageWrapper}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Card style={styles.cardContainer}>
            <CardItem cardBody>
              <Image source={{ uri: this.props.data.img1 }} style={styles.spotImg} />
            </CardItem>
            <CardItem>
              <Text style={styles.titleTxt}>{this.props.data.name}　</Text>
              <Text style={{fontSize:16}}>{this.props.data.county}{this.props.data.district}</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    )
  }
}
