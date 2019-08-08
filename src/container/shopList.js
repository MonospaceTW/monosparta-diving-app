import React, { Component } from 'react'
import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  View
} from 'react-native';

import { Content, Card, CardItem } from 'native-base';

import SmallBtn from '../components/smallButton';
import ListModal from '../components/listModal'
import LoadingModal from '../components/loadingModal';

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
  cardContainer: {
    borderRadius: 6,
    borderColor: 'transparent',
    overflow: 'hidden'
  },
  spotImg: {
    width: width * 0.85,
    height: height * 0.4,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  txt: {
    fontSize: 16,
    color: '#969696',
    marginBottom: 10
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
      modalTitle: '篩選潛店',
      modalLocationTitle: '地區',
      modalServiceTitle: '服務',
      btnTxt1: '重設',
      btnTxt2: '確認',
      loadingModalVisible: false
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
  setLoadingModalVisible(visible) {
    this.setState({ loadingModalVisible: visible });
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
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `shop`);
      let responseValue = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseShop = await navigate('shopList', { shopData: responseValue.item.data });
      let closeModal = await this.setModalVisible(!this.state.modalVisible);
    } else {
      try {
        let showLoading = this.setLoadingModalVisible(true);
        let response = await fetch(url);
        let responseValue = await response.json();
        let cancelLoading = this.setLoadingModalVisible(false);
        let resultList = await navigate('shopList', { shopData: responseValue.item.data })
        let closeModal = await this.setModalVisible(!this.state.modalVisible);
      } catch (err) {
        this.setModalVisible(!this.state.modalVisible);
        navigate('errorPage')
        console.log(err)
      }
    }
  };

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (

      <TouchableOpacity style={styles.listContainer} onPress={this.onGetShopDetail.bind(this, item.id)}>
        <Card style={styles.cardContainer}>
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

  onSetModalVisible = () => {
    this.setModalVisible(!this.state.modalVisible)
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
      this.setLoadingModalVisible(false)
      navigate('errorPage')
      console.log('err:', err)
    }
  }

  render() {
    if (this.props.navigation.state.params.shopData.length === 0) {
      return (
        <View style={Styles.container}>
          <View style={{ alignItems: 'center', paddingTop: 25 }}>
            <Text style={styles.txt}>找不到結果</Text>
            <Text style={styles.txt}>請調整篩選條件再試試看！</Text>
            <ListModal
              modalVisible={this.state.modalVisible}
              onPress={this.onSetModalVisible}
              onPressReset={this.clearBtn}
              onPressSubmit={this.onGetShopList}
              title={this.state.modalTitle}
              subtitle1={this.state.modalLocationTitle}
              subtitle2={this.state.modalServiceTitle}
              onGetFirstBtn={this.onGetLocationBtn()}
              onGetSecondBtn={this.onGetServiceBtn()}
              btnTxt1={this.state.btnTxt1}
              btnTxt2={this.state.btnTxt2}
            />
          </View>
        </View>
      )
    } else {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={Styles.container}>
            <Content style={Styles.bodyContent}>

              <ListModal
                modalVisible={this.state.modalVisible}
                onPress={this.onSetModalVisible}
                onPressReset={this.clearBtn}
                onPressSubmit={this.onGetShopList}
                title={this.state.modalTitle}
                subtitle1={this.state.modalLocationTitle}
                subtitle2={this.state.modalServiceTitle}
                onGetFirstBtn={this.onGetLocationBtn()}
                onGetSecondBtn={this.onGetServiceBtn()}
                btnTxt1={this.state.btnTxt1}
                btnTxt2={this.state.btnTxt2}
              />

              <FlatList
                data={this.props.navigation.state.params.shopData}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
              />

              <LoadingModal
                loadingModalVisible={this.state.loadingModalVisible}
              />
            </Content>
          </View>
        </SafeAreaView>
      )
    }
  }
}


