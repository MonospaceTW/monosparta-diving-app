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
} from 'react-native';

import { Content, Card, CardItem } from 'native-base';

import Btn from '../components/button';
import Api from '../config/api'
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
    height: height * 0.3,
    borderRadius: 6
  },
  outerContainer: {
    flex: 1,
    width: width*0.2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
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
      <Btn
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
      <Btn
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

  onGetShopList = async () => {
    const { navigate } = this.props.navigation
    const url = Api.url + `shop/search?location=${this.state.selLocation}&service=${this.state.selService}`
    if (this.state.selLocation === '' && this.state.selService === '') {
      let response = await fetch(Api.url + `shops`);
      let responseValue = await response.json();
      let responseShop = await navigate('shopList', { data: responseValue.item });
      let closeModal = await this.setModalVisible(!this.state.modalVisible);
    } else {
      try {
        let response = await fetch(url);
        let responseValue = await response.json();
        let resultList = await navigate('shopList', { data: responseValue.item })
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

      <Content style={Styles.bodyContent}>
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
          >
            <View style={{ flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity style={styles.outerContainer} onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                <View />
              </TouchableOpacity>

              <View style={{ flex: 4, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <View style={{ height: height, width: width * 0.8, backgroundColor: 'white' }}>
                  <Btn
                    onPress={this.onGetShopList}
                    text={this.state.btnTxt2}
                  />

                  {this.onGetLocationBtn()}
                  {this.onGetServiceBtn()}
                  <Btn
                    select={false}
                    text={this.state.btnTxt1}
                  />
                </View>
              </View>
            </View>

          </Modal>
        </View>
        <FlatList
          data={this.props.navigation.state.params.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />

      </Content>
    )
  }
}


