import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal
} from 'react-native';


import { FontAwesome } from '@expo/vector-icons';
import { Content, Card, CardItem } from 'native-base';

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

      shop: {
        location: [
          { label: '北部', value: 'north' },
          { label: '中部', value: 'mid' },
          { label: '南部', value: 'south' },
          { label: '東部', value: 'east' },
          { label: '離島', value: 'outer' }],
        service: [
          { label: '潛水體驗', value: 'ExploreDiving' },
          { label: '證照課程', value: 'LicenseCourse' },
          { label: '器材銷售', value: 'EquipmentSale' },
          { label: '飲食', value: 'Food' },
          { label: '住宿', value: 'Accommodation' }]
      },
      selService: '',
      btnTxt1:'重設',
      btnTxt2:'確認'
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
    // headerRight:
    //   (<FontAwesome name="filter" size={24} style={{ color: '#0288D1' }} />)
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  onGetLocationBtn = () => {
    const {
      shop: { location },
      selLocation,
    } = this.state;

    return location.map((item, i) => (
      <Btn
        key={location[i].value}
        text={location[i].label}
        onPress={this.onLocationChange(location[i].value)}
        select={selLocation}
        value={location[i].value}
      />
    ));
  }
  onLocationChange = (value) => () => {
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
  onGetShopList = async () => {
    const { navigate } = this.props.navigation
    const url = `http://e2509bef.ngrok.io/DivingBackend/public/api/shops/search?location=${this.state.selLocation}&service=${this.state.selService}`
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
      let response = await fetch(`http://e2509bef.ngrok.io/DivingBackend/public/api/shops/${id}`);
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
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1}}>
            <View style={{ marginTop: 100, flex: 1  }}>
            {this.onGetLocationBtn()}

            <Btn 
              select={false}
              text={this.state.btnTxt1}
            />
            <Btn 
              onPress={this.onGetSpotList} 
              text={this.state.btnTxt2}
            />
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableOpacity>

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
