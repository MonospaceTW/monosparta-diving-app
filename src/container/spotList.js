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

import FontAwesome from '@expo/vector-icons';
import { Content, Card, CardItem, Button } from 'native-base';

import Location from '../components/searchLoc';
import Level from '../components/searchLevel';

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

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  //header
  static navigationOptions = {
    title: '探索潛點',

    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#545454'
    }
  }


  onGetSpotList = async () => {
    const { navigate } = this.props.navigation
    const url = `http://57c64a59.ngrok.io/DivingBackend/public/api/sites/search?location=${this.state.selLocation}&level=${this.state.selLevel}`
    if (this.state.selLocation === '' && this.state.selLevel === '') {
      Alert.alert('請至少選擇一個區域或難度')
    } else {
      try {
        let response = await fetch(url);
        let responseValue = await response.json();
        let resultList = await navigate('spotList', { data: responseValue.item })
      } catch (err) {
        console.log(err)
      }
    }
  }


  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.listContainer} onPress={this.onGetSpotDetail.bind(this, item.id)}>
        <Card>
          <CardItem cardBody>
            <Image source={{ uri: item.img1 }} style={styles.spotImg} />
          </CardItem>
          <CardItem>
            <Text>{item.name} {item.county}{item.district}</Text>
          </CardItem>
        </Card>
      </TouchableOpacity>

    )
  };

  onGetSpotDetail = async (id) => {
    const { navigate } = this.props.navigation;
    try {
      let response = await fetch(`http://57c64a59.ngrok.io/DivingBackend/public/api/sites/${id}`);
      let responseJson = await response.json();
      let responseDetail = await navigate('spotDetail', { data: responseJson.item[0] });
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
          <View style={{ flex: 1 }}>
            <View style={{ marginTop: 100, flex: 1 }}>
              <Location />
              <Level />

              <Button bordered>
                <Text>重設</Text>
              </Button>

              <Button onPress={this.onGetSpotList}>
                <Text>確定</Text>
              </Button>

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