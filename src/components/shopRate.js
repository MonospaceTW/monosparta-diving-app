import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Styles from '../config/style';
import Color from '../config/color';
import Btn from '../components/button';
import StarRating from 'react-native-star-rating';

onStarRatingPress=(rating)=>{
  this.setState({
    starCount: rating
  });
}
const styles = StyleSheet.create({
  content: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  subtitle: {
    fontSize: 15
  },
  icon: {
    color: '#0288D1',
    marginRight: 15
  },
})

export default class ShopRate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      btnTxt: '我要評論',
      starCount: 3.5
    }
  }
  render() {
    return (
      <View>
        <View style={styles.content}>
          <View style={styles.titleWrapper}>
            <FontAwesome name="star" size={24} style={Styles.icon} />
            <Text style={styles.subtitle}>評論</Text>
          </View>
        </View>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
        <Btn
          text={this.state.btnTxt}
          onPress={this.onGetAllSpot}
          style={{ marginBottom: 20 }}
        />
      </View>
    );
  }

}
