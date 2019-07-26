import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text
} from 'react-native'
import { Container, Button } from 'native-base';
import Color from '../config/color'
import Images from '../config/images'
import Styles from '../config/style'
import HomeArticleCard from '../components/homeArticleCard'
import ExploreHome from '../components/exploreHome'


const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: 'flex-start',
    paddingLeft: 23,
    backgroundColor: Color.lightGray,
  },
  welcomeTitle: {
    fontSize: 25,
    marginTop: 40
  },
  welcomeTxt: {
    fontSize: 14,
    color: Color.mainBlue
  },
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
        img: Images.recImg,
        title: '這是一個文章標題',
        content: '這是文章內容，如果超出2行將不顯示，這是文章內容，如果超出2行將不顯示，這是文章內容，如果超出2行將不顯示，'
      }
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
      let response = await fetch(`http://8b4e3ab4.ngrok.io/DivingBackend/public/api/sites`);
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
      let response = await fetch(`http://8b4e3ab4.ngrok.io/DivingBackend/public/api/shops`);
      let responseValue = await response.json();
      let responseShop = await navigate('shopList', { data: responseValue.item });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.homeContainer}>

          <StatusBar hidden />
          <Text style={styles.welcomeTitle}>哈囉！想去哪裡潛水？</Text>
          <Text style={styles.welcomeTxt}>蒐集全台最美潛點與優質潛店，發現更多台灣之美！</Text>
          <ExploreHome data={this.state.exploreSpot} onClick={this.onGetAllSpot} />
          <ExploreHome data={this.state.exploreShop} onClick={this.onGetAllShop} />

          <Text style={styles.welcomeTitle}>下水前記得做足準備哦！！</Text>
          <Text style={styles.welcomeTxt}>為您提供精選文章，了解更多潛水小知識！</Text>
          <HomeArticleCard
            img={this.state.article.img}
            title={this.state.article.title}
            content={this.state.article.content}
          />

        </View>
      </ScrollView>
    )
  }
}
