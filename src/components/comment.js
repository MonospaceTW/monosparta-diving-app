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

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  onRenderComment = () => {
    return this.props.comment.map((item) => {
      return (
        <View key={item.id} style={{ flexDirection: 'row', marginBottom: 20, width: width*0.8, alignItems: 'center' }}>

          <View style={{ marginRight: 15 }}>
            <Thumbnail source={Images.recImg} />
          </View>

          <View style={{width: width*0.75, }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10,justifyContent:'space-between'}}>
              <Text style={{ marginRight: 10, color: Colors.mainBlue, fontSize: 15 }}>快樂熱帶魚</Text>
              <Star
                isDisabled
                starCount={item.rating}
                size={15}
                startStyle={{ width: '20%' }}
              />
              <Text style={{fontSize:10,color:Colors.gray}}>{item.created_at}</Text>
            </View>
            <Text numberOfLines={15} style={Styles.text}>{item.comment}</Text>
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





