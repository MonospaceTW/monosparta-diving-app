import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Thumbnail } from 'native-base';

import Styles from '../config/style';
import Colors from '../config/color';
import Images from '../config/images';
import Star from '../components/star';

const styles = StyleSheet.create({
  text: {

  }
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  onRenderComment = () => {
    return this.props.comment.map((item) => {
      return (
        <View key={item.id} style={{ flexDirection: 'row', marginBottom: 20, width: '80%', alignItems: 'center' }}>
          <View style={{ marginRight: 15 }}>
            <Thumbnail source={Images.recImg} />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <Text style={{ marginRight: 10, color: Colors.mainBlue, fontSize: 15 }}></Text>
              <Star
                isDisabled
                starCount={item.rating}
                size={15}
                startStyle={{ width: '20%' }}
              />
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

// componentDidMount = () => {


// }

// onGetArticleDetail = async (id) => {
//   try {
//     let response = await fetch(Api.url + `comment`);
//     let responseJson = await response.json();
//     // let responseDetail = await navigate('articleDetail', { data: responseJson.item });
//     console.log(responseJson)
//   }
//   catch (err) {
//     console.log('err:', err)
//   }
// }
// http://0a157e71.ngrok.io/DivingBackend/public/api/comment
