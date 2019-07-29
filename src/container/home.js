import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Linking,
  SafeAreaView
} from 'react-native';
import { Item, Input, Icon } from 'native-base';

import Colors from '../config/color';
import Styles from '../config/style';
import Api from '../config/api';
import Images from '../config/images';
import Btn from '../components/button';
import ArticleHome from '../components/articleHome';
import ExploreHome from '../components/exploreHome';



const styles = StyleSheet.create({
  h1: {
    fontSize: 25,
    marginTop: 40
  },
  input: {
    borderColor: Colors.mainBlue,
    marginTop: 30,
  },
  inputTxt: {
    paddingLeft: 15
  },
  icon: {
    color: Colors.mainBlue,
    paddingRight: 15
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.gray,
    marginTop: 20,
    marginBottom: 20
  }
})
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exploreSpot:
      {
        title: '探索潛點',
        img1: Images.recImg,
        img2: Images.recImg,
        img3: Images.recImg,
        name1: '貓鼻頭'
      },
      exploreShop:
      {
        title: '探索潛店',
        img1: Images.recImg,
        img2: Images.recImg,
        img3: Images.recImg,
        name1: '藍波潛水'
      },
      article:
      {
        title: '探索知識',
        img1: Images.recImg,
        img2: Images.recImg,
        img3: Images.recImg,
        name1: '這是一個文章標題',
        content1: '這是文章內容，如果超出2行將不顯示，這是文章內容，如果超出2行將不顯示，這是文章內容，如果超出2行將不顯示，'
      },
      btnTxt: '顯示更多',
      text: ''    
    }
  }

  static navigationOptions = {
    title: 'LOGO',
    headerStyle: {
      backgroundColor: '#3FD2FF'
    },
    headerTitleStyle: {
      flex: 1,
      fontSize: 31,
      textAlign: 'center',
      color: '#FFBC02'
    },
    headerLeft:
      (<View />),
    headerRight:
      (<View />)
  };

  onGetAllSpot = async () => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(Api.url + `spot`);
      let responseValue = await response.json();
      let responseSpot = await navigate('spotList', { data: responseValue.item });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  onGetAllShop = async () => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(Api.url + `shop`);
      let responseValue = await response.json();
      let responseShop = await navigate('shopList', { data: responseValue.item });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  onGetAllArticle = async () => {
    const { navigate } = this.props.navigation;
    try {
      let responseArticle = await navigate('article');
    }
    catch (err) {
      console.log('err:', err)
    }
  }
  onTextChange = (text) => {
    this.setState({ text })
  }
  clear = () => {
    this.setState({ text: '' })
  }

  render() {
    return (
      <SafeAreaView  style={{flex: 1}}>
      <ScrollView style={Styles.container}>
        <View style={Styles.bodyContent}>
          <Item rounded style={styles.input}>
            <Input
              placeholder='試試野柳？'
              style={styles.inputTxt}
              value={this.state.text}
              onChangeText={this.onTextChange}
            />
            <Icon name='search' style={styles.icon} onPress={this.clear} />
          </Item>
          <Text style={[Styles.title, styles.h1]}>哈囉！想去哪裡潛水？</Text>
          <Text style={Styles.subtitle}>蒐集全台最美潛點與優質潛店，發現更多台灣之美！</Text>
          <ExploreHome data={this.state.exploreSpot} />
          <Btn
            text={this.state.btnTxt}
            onPress={this.onGetAllSpot}
            select={false}
          />

          <ExploreHome data={this.state.exploreShop} />
          <Btn
            text={this.state.btnTxt}
            onPress={this.onGetAllShop}
            select={false}
          />

          <Text style={[Styles.title, styles.h1]}>下水前記得做足準備哦！！</Text>
          <Text style={Styles.subtitle}>為您提供精選文章，了解更多潛水小知識！</Text>
          <ArticleHome data={this.state.article} />
          <Btn
            text={this.state.btnTxt}
            onPress={this.onGetAllArticle}
            select={false}
          />

          <View style={styles.footer}>
            <Text onPress={() => Linking.openURL('mailto:monosparta1.0@gmail.com')} style={{marginBottom:10}}>monosparta1.0@gmail.com</Text>
            <Text>APP版本V1.0</Text>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    )
  }
}

