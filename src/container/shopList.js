import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  Modal
} from 'react-native';


import { FontAwesome } from '@expo/vector-icons';
import { Content, Card, CardItem } from 'native-base';

import Location from '../components/searchLoc';
import Service from '../components/searchService';

import Colors from '../config/color';
import Styles from '../config/style';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  spotImg: {
    width: width * 0.85,
    height: height * 0.4,
    borderRadius: 6
  },

})



export default class SpotList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  static navigationOptions = {
    title: '探險潛店',

    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#545454'
    },
    headerRight:
      (<FontAwesome name="filter" size={24} style={{ color: '#0288D1' }} />)
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onGetShopList = async () => {
    const { navigate } = this.props.navigation
    const url = `http://57c64a59.ngrok.io/DivingBackend/public/api/shops/search?location=${this.state.selLocation}&service=${this.state.selService}`
    if (this.state.selLocation === '' && this.state.selService === '') {
      Alert.alert('請至少選擇一個區域或服務')
    } else {
      try {
        let response = await fetch(url);
        let responseValue = await response.json();
        console.log(responseValue)
        let resultList = await navigate('shopList', { data: responseValue.item })
      } catch (err) {
        console.log(err)
      }
    }
  };

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (

      <TouchableOpacity style={styles.listContainer} onPress={this.onGetShopDetail.bind(this, item.id)}>
        <Card>
          <CardItem cardBody>
            <Image
              source={{ uri: item.img1 }}
              style={styles.spotImg} />
          </CardItem>
          <CardItem>
            <Text>{item.name} {item.county} {item.district}</Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )
  };



  onGetShopDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(`http://57c64a59.ngrok.io/DivingBackend/public/api/shops/${id}`);
      let responseJson = await response.json();
      let responseDetail = await navigate('shopDetail', { data: responseJson.item[0] });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  render() {
    return (

      <Content style={Styles.bodyContent}>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1, backgroundColor: "#000000" }}>
            <View style={{ marginTop: 50, backgroundColor: "red", flex: 1 }}>
              <Location />
              <Service />
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>

            </View>
          </View>
        </Modal>

        <FlatList
          data={this.props.navigation.state.params.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />

      </Content>
    )
  }
}
