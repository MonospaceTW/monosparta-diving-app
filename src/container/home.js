import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Linking,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { Input, Icon } from 'native-base';

import Colors from '../config/color';
import Styles from '../config/style';
import Api from '../config/api';
import Images from '../config/images';

import Btn from '../components/button';
import ArticleHome from '../components/articleHome';
import ExploreCard from '../components/exploreCard';
import LoadingModal from '../components/loadingModal';


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
    color: Colors.gray,
    paddingRight: 15
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.gray,
    marginTop: 20,
    marginBottom: 20
  },
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 40
  }
})
export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exploreSpotTitle: '探索潛點',
      exploreShopTitle: '探索潛店',
      articleTitle: '探索知識',
      btnTxt: '顯示更多',
      randomSpot: [],
      randomShop: [],
      randomArticle: [],
      text: '',
      spotResult: [],
      shopResult: [],
      knowledgeResult: [],
      spotTotal: 0,
      shopTotal: 0,
      articleTotal: 0,
      loadingModalVisible: false
    }
  }

  static navigationOptions = {
    title: 'LOGO',
    headerStyle: {
      backgroundColor: 'white'
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

  componentDidMount = async () => {
    try {
      let responseSpot = await fetch(Api.url + `spot/random`);
      let randomSpot = await responseSpot.json();
      let responseShop = await fetch(Api.url + `shop/random`);
      let randomShop = await responseShop.json();
      let responseArticle = await fetch(Api.url + `article/random`);
      let randomArticle = await responseArticle.json();
      this.setState({
        randomSpot: randomSpot.item,
        randomShop: randomShop.item,
        randomArticle: randomArticle.item
      })
    }
    catch (err) {
      navigate('errorPage')
      console.log('err:', err)
    }
  }

  onGetAllSpot = async () => {
    const { navigate } = this.props.navigation;
    try {
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `spot`);
      let responseValue = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseSpot = await navigate('spotList', {
        spotData: responseValue.item.data,
        spotCurrentPage: responseValue.item.current_page,
        spotLastPage: responseValue.item.last_page,
        spotNextPage: responseValue.item.next_page_url
      });
    }
    catch (err) {
      this.setLoadingModalVisible(false);
      navigate('errorPage')
      console.log('err:', err)
    }
  }

  onGetAllShop = async () => {
    const { navigate } = this.props.navigation;
    try {
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `shop`);
      let responseValue = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseShop = await navigate('shopList', {
        shopData: responseValue.item.data,
        shopCurrentPage: responseValue.item.current_page,
        shopLastPage: responseValue.item.last_page,
        shopNextPage: responseValue.item.next_page_url
      });
    }
    catch (err) {
      this.setLoadingModalVisible(false);
      navigate('errorPage')
      console.log('err:', err)
    }
  }

  onGetAllArticle = async () => {
    const { navigate } = this.props.navigation;
    try {
      let responseArticle = await navigate('article');
    }
    catch (err) {
      navigate('errorPage')
      console.log('err:', err)
    }
  }

  onGetSpotDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `spot/${id}`);
      let responseJson = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseDetail = await navigate('spotDetail', {
        data: responseJson.item[0],
        comment: responseJson.comment,
        nearShop: responseJson.Nearby,
        commentTotal: responseJson.commentTotal
      });
    }
    catch (err) {
      this.setLoadingModalVisible(false);
      navigate('errorPage')
      console.log('err:', err)
    }
  }

  onGetShopDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `shop/${id}`);
      let responseJson = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseDetail = await navigate('shopDetail', {
        data: responseJson.item[0],
        comment: responseJson.comment,
        commentTotal: responseJson.commentTotal
      });
    }
    catch (err) {
      this.setLoadingModalVisible(false);
      navigate('errorPage')
      console.log('err:', err)
    }
  }

  onGetArticleDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `article/${id}`);
      let responseJson = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseDetail = await navigate('articleDetail', { data: responseJson.item[0] });
    }
    catch (err) {
      this.setLoadingModalVisible(false);
      navigate('errorPage')
      console.log('err:', err)
    }
  }

  renderSpotRandom() {
    return this.state.randomSpot.map((item) => {
      return (
        <ExploreCard
          key={item.id}
          data={item}
          onPress={this.onGetSpotDetail.bind(this, item.id)}
        />
      )
    })
  }

  renderShopRandom() {
    return this.state.randomShop.map((item) => {
      return (
        <ExploreCard
          key={item.id}
          data={item}
          onPress={this.onGetShopDetail.bind(this, item.id)}
        />
      )
    })
  }

  renderArticleRandom() {
    return this.state.randomArticle.map((item) => {
      return (
        <ArticleHome
          key={item.id}
          data={item}
          onPress={this.onGetArticleDetail.bind(this, item.id)}
        />
      )
    })
  }

  onTextChange = (text) => {
    this.setState({ text })
  }

  onSearch = async () => {
    const { navigate } = this.props.navigation;
    const keyword = encodeURIComponent(this.state.text.trim())
    if (keyword.length === 0) {
      return
    } else {
      try {
        let showLoading = this.setLoadingModalVisible(true);
        let response = await fetch(Api.url + `keyword/${keyword}`);
        let responseJson = await response.json();
        this.setState({
          spotResult: responseJson.spot,
          shopResult: responseJson.shop,
          knowledgeResult: responseJson.article,
          spotTotal: responseJson.spotTotal,
          shopTotal: responseJson.shopTotal,
          articleTotal: responseJson.articleTotal
        })
        let cancelLoading = this.setLoadingModalVisible(false);
        let responseSearch = await navigate('search', {
          txt: this.state.text,
          spotResult: this.state.spotResult,
          shopResult: this.state.shopResult,
          knowledgeResult: this.state.knowledgeResult,
          spotTotal: this.state.spotTotal,
          shopTotal: this.state.shopTotal,
          articleTotal: this.state.articleTotal
        });
      }
      catch (err) {
        this.setLoadingModalVisible(false);
        navigate('errorPage')
        console.log('err:', err)
      }
    }
  }

  onPrepareHome = () => {
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      if (this.state.randomSpot.length === 0) {
        navigate('errorPage')
      }
    }, 7000);
  }

  setLoadingModalVisible(visible) {
    this.setState({ loadingModalVisible: visible });
  }

  render() {
    if (this.state.randomSpot.length === 0) {
      return (
        <View style={styles.loadContainer}>
          <Image style={{ height: 125, width: 125 }} source={Images.loading} />
          {this.onPrepareHome()}
        </View>

      )
    }
    return (

      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lightGray }}>
        <ScrollView style={Styles.container}>
          <View style={Styles.bodyContent}>
            <View style={styles.searchBar}>
              <Input
                placeholder='試試野柳？'
                value={this.state.text}
                onChangeText={this.onTextChange}
                onSubmitEditing={this.onSearch}
                returnKeyType={'search'}
                style={{
                  width: '100%',
                  marginLeft: 15
                }}
              />
              <TouchableOpacity onPress={this.onSearch} style={{ elevation: 0 }}>
                <Icon name='search' style={styles.icon} />
              </TouchableOpacity>
            </View>

            <Text style={[Styles.title, styles.h1]}>哈囉！想去哪裡潛水？</Text>
            <Text style={Styles.subtitle}>蒐集全台最美潛點與優質潛店，發現更多台灣之美！</Text>

            <Text style={Styles.title}>{this.state.exploreSpotTitle}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {this.renderSpotRandom()}
            </ScrollView>

            <Btn
              text={this.state.btnTxt}
              onPress={this.onGetAllSpot}
              select={false}
            />

            <Text style={Styles.title}>{this.state.exploreShopTitle}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {this.renderShopRandom()}
            </ScrollView>

            <Btn
              text={this.state.btnTxt}
              onPress={this.onGetAllShop}
              select={false}
            />

            <Text style={[Styles.title, styles.h1]}>下水前記得做足準備哦！！</Text>
            <Text style={Styles.subtitle}>為您提供精選文章，了解更多潛水小知識！</Text>

            <Text style={Styles.title}>{this.state.articleTitle}</Text>
            {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {this.renderArticleRandom()}
            </ScrollView> */}

            <Btn
              text={this.state.btnTxt}
              onPress={this.onGetAllArticle}
              select={false}
            />

            <View style={styles.footer}>
              <Text style={{ marginBottom: 10 }}>APP版本V1.0</Text>
              <Text onPress={() => Linking.openURL('mailto:monosparta1.0@gmail.com')} style={{ textDecorationLine: 'underline' }}>聯絡我們</Text>
            </View>
          </View>

          <LoadingModal
            loadingModalVisible={this.state.loadingModalVisible}
          />
          
        </ScrollView>
      </SafeAreaView>
    )
  }
}

