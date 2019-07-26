import React, { Component } from 'react'
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Text
} from 'react-native'
import {
  Card,
  CardItem
} from 'native-base';

import Color from '../config/color'
import Btn from '../components/button'
import Images from '../config/images'
import ArticleCard from '../components/articleCard'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  homeContainer: {
    justifyContent: 'center',
    backgroundColor: Color.lightGray,
  },
  btnWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    marginBottom: 20,
  },
  articleTxt: {
    fontSize: 20
  },
  spotImg: {
    height: height * 0.4,
    width: null,
    flex: 1,
    borderRadius: 6


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
    title: '探索文章',

    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#545454'
    },
    headerRight:
      (<View />)
  };

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (

        <TouchableOpacity style={styles.cardContainer}>
          <Card>
            <CardItem cardBody>
              <Image source={{ uri: item.imgs }} style={styles.spotImg} />
            </CardItem>
            <CardItem>
              <Text style={styles.articleTxt}>{item.title}</Text>
            </CardItem>
            <CardItem>
              <Text numberOfLines={2}>{item.content}</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>

    )
  };

  render() {
    return (
      <ScrollView >
        <View style={styles.homeContainer}>

          <View style={styles.btnWrapper}>
            <Btn text={this.state.title[0].label} select={false} />
            <Btn text={this.state.title[1].label} select={false} />
            <Btn text={this.state.title[2].label} select={false} />
          </View>

          <FlatList
            data={this.props.navigation.state.params.data}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />

        </View>
      </ScrollView>
    )
  }
}
