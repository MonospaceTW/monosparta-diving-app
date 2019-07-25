import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text
} from 'react-native'
import Color from '../config/color'
import Btn from '../components/button'
import Images from '../config/images'
import ArticleCard from '../components/articleCard'

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
  btnWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
})
export default class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article:
      {
        img: Images.recImg,
        title: '這是一個文章標題',
        content: '這是文章內容，如果超出2行將不顯示，這是文章內容，如果超出2行將不顯示，這是文章內容，如果超出2行將不顯示，'
      },
      title: [
        { label: '旅遊', value: 'trip' },
        { label: '知識', value: 'knowledge' },
        { label: '證照', value: 'license' },
      ]
    }
  }

  static navigationOptions = {
    title: '探險文章',

    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#545454'
    },
  };

  render() {
    return (
      <ScrollView >
        <View style={styles.homeContainer}>

          <View style={styles.btnWrapper}>
            <Btn text={this.state.title[0].label} />
            <Btn text={this.state.title[1].label} />
            <Btn text={this.state.title[2].label} />
          </View>

          <ArticleCard
            img={this.state.article.img}
            title={this.state.article.title}
            content={this.state.article.content}
          />
          <ArticleCard
            img={this.state.article.img}
            title={this.state.article.title}
            content={this.state.article.content}
          />
        </View>
      </ScrollView>
    )
  }
}
