import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
  SafeAreaView
} from 'react-native';
import { WebBrowser } from 'expo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import RoundedBtn from '../components/roundedBtn';

import Colors from '../config/color';
import Styles from '../config/style';
import Images from '../config/images';
import Api from '../config/api'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: Colors.white
  },
  img: {
    width: '100%',
    height: 200,
    marginTop: 20,
    marginBottom: 15
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15
  },
  text: {
    marginBottom: 20
  },
  logo: {
    width: '50%'
  },
  margin: {
    flex: 1,
    marginBottom: 15
  }
})
export default class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: ''
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
    headerRight:
      <View />
  };

  componentDidMount = () => {
    if (this.props.navigation.state.params.data.category === 'travel') {
      this.setState({
        category: '#旅遊'
      })
    } else if (this.props.navigation.state.params.data.category === 'license') {
      this.setState({
        category: '#證照'
      })
    } else {
      this.setState({
        category: '#知識'
      })
    }
  }

  onOpenBTWeb = () => {
    WebBrowser.openBrowserAsync('https://bluetrend.media/');
  }

  onOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(this.props.navigation.state.params.data.url);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={Styles.container}>
          <View style={Styles.bodyContent}>
            <Image source={{ uri: this.props.navigation.state.params.data.img }} style={styles.img} />
            <Text style={Styles.title}>{this.props.navigation.state.params.data.title}</Text>
            <View style={styles.info}>
              <Text>by {this.props.navigation.state.params.data.author}</Text>
              <Text>date:{this.props.navigation.state.params.data.date}</Text>
            </View>
            <View style={Styles.content}>
              <Text style={[Styles.text, styles.text]}>{this.props.navigation.state.params.data.content}</Text>
            </View>

            <View style={styles.margin}>
              <Text>文章分類</Text>
              <RoundedBtn
                text={this.state.category}
              />
            </View>

            <View style={styles.margin}>
              <Text>文章傳送門</Text>
              <View
                style={{ marginTop: 10 }}
                onPress={this.onOpenWithWebBrowser}>
                <FontAwesome name="globe" size={24} style={Styles.icon} />
              </View>

            </View>

            <Text>想看更多？試試這裡吧！</Text>
            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={this.onOpenBTWeb}
            >
              <Image source={Images.BT_logo} />
            </TouchableOpacity>

          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
