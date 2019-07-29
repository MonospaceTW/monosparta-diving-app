import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  SafeAreaView
} from 'react-native';

import { Content, Card, CardItem } from 'native-base';

import SmallBtn from '../components/smallButton';
import Api from '../config/api'

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
  outerContainer: {
    width: width * 0.2,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  modalContent: {
    flex: 1,
    backgroundColor: Colors.white,
    width: width * 0.8,
    position: 'relative',
  },
  locationBtnWrapper:{
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 20
  },
  btnWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 30,
    left: 60
  },
  title: {
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 25
  },
  subtitle: {
    marginLeft: 20,
    marginBottom: 20
  }
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
      selLocation: '',
      selService: '',
      btnTxt1: '重設',
      btnTxt2: '確認'
    }
  }

  static navigationOptions = {
    title: '探索潛店',
    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#545454'
    },
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    this.props.navigation.setParams({
      showModal: this.showModal.bind(this)
    });
  }
  showModal = () => {
    this.setModalVisible(true)
  }

  onGetLocationBtn = () => {
    const {
      shop: { location },
      selLocation,
    } = this.state;

    return location.map((item, i) => (
      <SmallBtn
        key={location[i].value}
        text={location[i].label}
        onPress={this.onLocationChange(location[i].value)}
        select={selLocation}
        value={location[i].value}
      />
    ));
  }

  onGetServiceBtn = () => {
    const {
      shop: { service },
      selService,
    } = this.state;

    return service.map((item, i) => (
      <SmallBtn
        key={service[i].value}
        text={service[i].label}
        onPress={this.onServiceChange(service[i].value)}
        select={selService}
        value={service[i].value}
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

  onServiceChange = (value) => () => {
    if (this.state.selService === value) {
      this.setState({
        selService: ''
      })
    } else {
      this.setState({
        selService: value
      })
    }
  }

  clearBtn = () => {
    this.setState({
      selLocation: '',
      selService: ''
    })
  }

  onGetShopList = async () => {
    const { navigate } = this.props.navigation
    const url = Api.url + `shop/search?location=${this.state.selLocation}&service=${this.state.selService}`
    if (this.state.selLocation === '' && this.state.selService === '') {
      let response = await fetch(Api.url + `shops`);
      let responseValue = await response.json();
      let responseShop = await navigate('shopList', { shopData: responseValue.item });
      let closeModal = await this.setModalVisible(!this.state.modalVisible);
    } else {
      try {
        let response = await fetch(url);
        let responseValue = await response.json();
        let resultList = await navigate('shopList', { shopData: responseValue.item })
        let closeModal = await this.setModalVisible(!this.state.modalVisible);
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
      let response = await fetch(Api.url + `shop/${id}`);
      let responseJson = await response.json();
      let responseDetail = await navigate('shopDetail', { data: responseJson.item[0] });
    }
    catch (err) {
      console.log('err:', err)
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Content style={Styles.bodyContent}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
          >
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

              <View style={{ flex: 1 }}>
                {this.onGetLocationBtn()}
                {this.onGetServiceBtn()}
                <SmallBtn
                  select={false}
                  text={this.state.btnTxt1}
                />
                <SmallBtn
                  onPress={this.onGetShopList}
                  text={this.state.btnTxt2}
                />
              </View>
            </View>
            </SafeAreaView>
          </Modal>

        <FlatList
          data={this.props.navigation.state.params.shopData}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />

        </Content>
      </SafeAreaView>
    )
  }
}


