import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Alert
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
      loadingModalVisible: false,
      commentTotal: this.props.commentTotal,
      newComment: []
    }
  }

  onStarRatingPress = (rating) => {
    this.setState({
      starCount: rating
    });
  }

  addComment = async (id) => {
    const { navigate } = this.props.navigation;
    let commentTxt = this.state.text.trim()
    if (commentTxt.length !== 0) {
      try {
        let showLoading = this.setLoadingModalVisible(true);
        let response = await fetch(Api.url + `comment`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "comment": commentTxt,
            "rating": this.state.starCount,
            "user_id": "",
            "shop_id": id
          }),
        });
        let responseJson = await response.json();
        this.setState({
          newComment: [responseJson.comment]
        })
        let cancelLoading = this.setLoadingModalVisible(false);
        this.setState({
          text: '',
          starCount: 4,
          commentResult: this.state.newComment.concat(this.state.commentResult),
          commentTotal: this.state.commentTotal + 1
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

  onReport = () => {
    Alert.alert(
      '確定要檢舉這則留言？',
      '',
      [
        { text: '取消', style: 'cancel' },
        { text: '確定' },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View>
        <View style={Styles.component}>
          <View style={styles.content}>
            <FontAwesome name="star" size={24} style={Styles.icon} />
            <Text style={Styles.subtitleGray}>評論(共{this.state.commentTotal}筆)</Text>
          </View>
          <View>
            <Text>平均 <Text style={{ color: Colors.mainBlue }}>{this.props.avg}</Text></Text>
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
            placeholder="喜歡這裡嗎？快來留言分享吧！"
            placeholderTextColor="#BFBFBF"
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text} />
        </Form>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 30,
          display: this.state.text.length === 0 ? 'none' : 'flex'
        }}>
          <SmallBtn
            text="取消"
            select={false}
            onPress={this.clearComment}
          />
          <SmallBtn text="送出" onPress={this.addComment.bind(this, this.props.id)} />
        </View>
        <Comment
          comment={this.state.commentResult}
          onReport={this.onReport}
        />

        <LoadingModal
          loadingModalVisible={this.state.loadingModalVisible}
        />
      </View>
    );
  }

}
