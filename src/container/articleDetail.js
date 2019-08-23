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
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.gray,
    height: 100,
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
    marginBottom: 10,
    fontSize: 15
  },
  text: {
    marginBottom: 20,
    lineHeight: 30
  },
  logo: {
    width: '50%'
  },
  margin: {
    flex: 1,
    marginBottom: 15
  },
  txt: {
    fontSize: 16,
    marginTop: 10
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


    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#545454'
    },
    headerStyle: {
      backgroundColor: 'white',
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
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.title}>{this.props.navigation.state.params.data.title}</Text>
            </View>
            <View style={styles.info}>
              <Text style={{ fontWeight: 'bold' }}>{this.props.navigation.state.params.data.author}</Text>
              <Text>{this.props.navigation.state.params.data.date}</Text>
            </View>
            <View style={Styles.content}>
              <Text style={[Styles.text, styles.text]}>{this.props.navigation.state.params.data.content}</Text>
            </View>

            <View style={styles.margin}>
              <Text>文章傳送門</Text>
              <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={this.onOpenWithWebBrowser}>
                <FontAwesome name="globe" size={24} style={Styles.icon} />
              </TouchableOpacity>

            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
