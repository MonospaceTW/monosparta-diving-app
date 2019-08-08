import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Textarea, Form } from "native-base";

import Styles from '../config/style';

import Comment from './comment';
import Api from '../config/api';
import Colors from '../config/color';
import SmallBtn from '../components/smallButton';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Star from '../components/star';
import LoadingModal from '../components/loadingModal';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'baseline'
  }
})
export default class ShopRate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      starCount: 4,
      commentResult: [...this.props.comment],
      loadingModalVisible: false
    }
  }

  onStarRatingPress = (rating) => {
    this.setState({
      starCount: rating
    });
  }

  addComment = async (id) => {
    const { navigate } = this.props.navigation;
    if (this.state.text !== '') {
      try {
        let showLoading = this.setLoadingModalVisible(true);
        let response = await fetch(Api.url + `comment`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "comment": this.state.text,
            "rating": this.state.starCount,
            "commentable_id": id,
            "commentable_type": "App\\Shop"
          }),
        });
        let responseJson = await response.json();
        let cancelLoading = this.setLoadingModalVisible(false);
        this.setState({
          text: '',
          starCount: 4,
          commentResult: this.state.commentResult.concat(responseJson.comment)
        })
      }
      catch (err) {
        this.setLoadingModalVisible(false)
        navigate('errorPage')
        console.log('err:', err)
      }
    }
  }

  clearComment = () => {
    this.setState({ text: '', starCount: 4 })
  }

  setLoadingModalVisible(visible) {
    this.setState({ loadingModalVisible: visible });
  }

  render() {
    return (
      <View>
        <View style={Styles.component}>
          <View style={styles.content}>
            <FontAwesome name="star" size={24} style={Styles.icon} />
            <Text style={Styles.subtitleGray}>評論(共{this.props.commentTotal}筆)</Text>
          </View>
          <View>
            <Text>平均<Text style={{ color: Colors.mainBlue }}>{this.props.avg}</Text></Text>
          </View>
        </View>
        <Star
          isDisabled={false}
          starCount={this.state.starCount}
          size={30}
          onStarRatingPress={(rating) => this.onStarRatingPress(rating)}
          startStyle={{ width: '70%' }}
        />
        <Form style={{ marginTop: 20, marginBottom: 20 }}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="太棒了～"
            placeholderTextColor="#BFBFBF"
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text} />
        </Form>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
          <SmallBtn
            text="先不要"
            select={false}
            onPress={this.clearComment}
          />
          <SmallBtn text="寫好了" onPress={this.addComment.bind(this, this.props.id)} />
        </View>
        <Comment
          comment={this.state.commentResult} />

<LoadingModal
          loadingModalVisible={this.state.loadingModalVisible}
        />
      </View>
    );
  }

}
