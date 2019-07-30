import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Textarea, Form } from "native-base";

import Styles from '../config/style';

import SmallBtn from '../components/smallButton'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row'
  }
})
export default class ShopRate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      starCount: 1
    }
  }

  onStarRatingPress = (rating) => {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View>
        <View style={styles.content}>
          <FontAwesome name="star" size={24} style={Styles.icon} />
          <Text style={Styles.subtitleGray}>評論</Text>
        </View>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          emptyStarColor='#0288D1'
          fullStarColor='#0288D1'
          halfStarEnabled
          starSize={30}
          containerStyle={{width:'50%'}}
        />
        <Form style={{ marginTop: 20, marginBottom: 20 }}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="太棒了～"
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text} />
        </Form>
        <View style={{ flexDirection: 'row' ,justifyContent:'space-between'}}>
          <SmallBtn
            text="先不要"
            select={false}
          />
          <SmallBtn text="寫好了" />
        </View>

      </View>
    );
  }

}
