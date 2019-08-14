import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { Thumbnail } from 'native-base';

import Styles from '../config/style';
import Colors from '../config/color';
import Images from '../config/images';
import Star from '../components/star';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  user: {
    color: Colors.mainBlue,
    fontSize: 15,
    marginBottom: 10
  },
  wrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    width: width * 0.7
  },
  time: {
    fontSize: 10,
    color: Colors.gray,
  },
  text: {
    width:width*0.7
  }
})

export default class App extends React.Component {

  onRenderComment = () => {
    return this.props.comment.map((item) => {
      return (

        <View key={item.id} style={styles.content}>

          <View style={{ width: width * 0.15 }}>
            <Thumbnail source={Images.recImg} />
          </View>

          <View style={{ marginLeft:15 }}>
            <Text style={styles.user}>快樂熱帶魚</Text>
            <View style={styles.wrapper}>
              <Star
                isDisabled
                starCount={item.rating}
                size={15}
                startStyle={{ width: '20%' }}
              />
              <Text style={styles.time}>{item.created_at}</Text>
            </View>
            <Text numberOfLines={13} style={[Styles.text,styles.text]}>{item.comment}</Text>
          </View>

        </View>
      )
    })
  }

  render() {
    return (
      <View>
        {this.onRenderComment()}
      </View>
    )
  }

}





