import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  WebView
} from 'react-native';

import Api from '../config/api'
import Styles from '../config/style';
import Colors from '../config/color';
import ArticleCard from '../components/articleCard';

const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray
  }
})

export default class ArticleTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      htmlTxt: ''
    }
  }

  componentDidMount = async () => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch('http://99f1ba01.ngrok.io/DivingBackend/public/api/article/1');
      let responseJson = await response.json();
      this.setState({
        htmlTxt: responseJson.item[0].content
      })
      console.log(this.state.htmlTxt)

    }
    catch (err) {
      navigate('errorPage')
      console.log('err:', err)
    }
  }

  keyExtractor = (item, index) => { return index.toString() };

  render() {
    return (
        <WebView
          source={{ uri: 'http://girldive.pixnet.net/blog/post/334541698-%E3%80%90%E5%8F%B0%E7%81%A3%E8%87%AA%E7%94%B1%E6%BD%9B%E6%B0%B4%E6%BD%9B%E9%BB%9E%E4%BB%8B%E7%B4%B9%E3%80%91' }}
        />
    )
  }
}


