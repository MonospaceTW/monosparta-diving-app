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
  Modal,
  Alert

} from 'react-native';

import FontAwesome from '@expo/vector-icons';
import { Content, Card, CardItem, Button } from 'native-base';

import Btn from '../components/button';


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
      modalVisible: false,
      spot: {
        location: [
          { label: '北部', value: 'north' },
          { label: '中部', value: 'mid' },
          { label: '南部', value: 'south' },
          { label: '東部', value: 'east' },
          { label: '離島', value: 'outer' }],
        level: [
          { label: '初階', value: 'easy' },
          { label: '中階', value: 'medium' },
          { label: '高階', value: 'hard' }]
      },
      shop: {
        service: [
          { label: '潛水體驗', value: 'ExploreDiving' },
          { label: '證照課程', value: 'LicenseCourse' },
          { label: '器材銷售', value: 'EquipmentSale' },
          { label: '飲食', value: 'Food' },
          { label: '住宿', value: 'Accommodation' }]
      },
      selLocation: '',
      selLevel: '',
      selService: ''

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
  onGetLocation = () => {
    const array = []
    const locationLength = this.state.spot.location.length

    for (let i = 0; i < locationLength; i += 1) {
      array.push(<Btn
        key={this.state.spot.location[i].value}
        text={this.state.spot.location[i].label}
        onChangeState={this.onLocationChange.bind(this, this.state.spot.location[i].value)}
        select={this.state.selLocation}
        value={this.state.spot.location[i].value}
      />)
    }
    return array
  }


  onGetLevel = () => {
    const array = []
    const levelLength = this.state.spot.level.length

    for (let i = 0; i < levelLength; i += 1) {
      array.push(<Btn
        key={this.state.spot.level[i].value}
        text={this.state.spot.level[i].label}
        onChangeState={this.onLevelChange.bind(this, this.state.spot.level[i].value)}
        select={this.state.selLevel}
        value={this.state.spot.level[i].value}
      />)
    }
    return array
  }


  onLocationChange = (value) => {
    if (this.state.selLocation === value) {
      this.setState({
        selLocation: ''
      })
    } else {
      this.setState({
        selLocation: value
      })
    }
  }
  onLevelChange = (value) => {
    if (this.state.selLevel === value) {
      this.setState({
        selLevel: ''
      })
    } else {
      this.setState({
        selLevel: value
      })
    }
  }

  onGetSpotList = async () => {
    const { navigate } = this.props.navigation
    const url = `http://e2509bef.ngrok.io/DivingBackend/public/api/sites/search?location=${this.state.selLocation}&level=${this.state.selLevel}`
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
  test(){
    console.log("123")
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
      let response = await fetch(`http://e2509bef.ngrok.io/DivingBackend/public/api/sites/${id}`);
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
          onShow={this.onGetLocation()}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{ marginTop: 100, flex: 1 }}
            >

              <View>
              <Text>123</Text>
              <Button onPress={this.test}>
              <Text>123</Text>
              </Button>
              </View>
                
              
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