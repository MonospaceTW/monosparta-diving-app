import React, { Component } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Text
} from 'react-native';
import {
  Card,
  CardItem,
  Tab,
  Tabs
} from 'native-base';

import Colors from '../config/color';
import Styles from '../config/style';

import Images from '../config/images'
import Api from '../config/api'

import ArticleCard from '../components/articleCard'

import KnowTab from '../components/knowTab';
import TravelTab from '../components/travelTab';
import LicenseTab from '../components/licenseTab';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({


  tabs: {
    backgroundColor: Colors.white
  }
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
      }
    }
  }

  static navigationOptions = {
    title: '探索知識',

    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#545454'
    },
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(Api.url + `article`);
      let responseValue = await response.json();
      this.setState({
        responseValue: responseValue.item
      })
    }
    catch (err) {
      console.log('err:', err)
    }
  }

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
      <ScrollView style={Styles.container}>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: Colors.mainBlue }} >
          <Tab
            heading="知識"
            tabStyle={{ backgroundColor: Colors.white }}
            activeTabStyle={{ backgroundColor: Colors.white }}
            textStyle={{ color: Colors.mainBlue }}
            activeTextStyle={{ color: Colors.mainBlue }}>
            <KnowTab />
          </Tab>
          <Tab
            heading="旅遊"
            tabStyle={{ backgroundColor: Colors.white }}
            activeTabStyle={{ backgroundColor: Colors.white }}
            textStyle={{ color: Colors.mainBlue }}
            activeTextStyle={{ color: Colors.mainBlue }}>
            <TravelTab />
          </Tab>
          <Tab
            heading="證照"
            tabStyle={{ backgroundColor: Colors.white }}
            activeTabStyle={{ backgroundColor: Colors.white }}
            textStyle={{ color: Colors.mainBlue }}
            activeTextStyle={{ color: Colors.mainBlue }}>
            <LicenseTab />
          </Tab>
        </Tabs>
        <View style={Styles.bodyContent}>

          <FlatList
            data={this.state.responseValue}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />

        </View>
      </ScrollView>
    )
  }
}
