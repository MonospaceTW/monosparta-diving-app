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
import ListModal from '../components/listModal';
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
      selLocation: '',
      selLevel: '',
      modalTitle: '篩選潛點',
      modalLocationTitle: '地區',
      modalLevelTitle: '難度',
      btnTxt1: '重設',
      btnTxt2: '確認',
      loadingModalVisible: false
    }
  }

  static navigationOptions = {
    title: '探索潛點',

    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#545454'
    }
  }

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
      spot: { location },
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
  onGetLevelBtn = () => {
    const {
      spot: { level },
      selLevel,
    } = this.state;

    return level.map((item, i) => (
      <SmallBtn
        key={level[i].value}
        text={level[i].label}
        onPress={this.onLevelChange(level[i].value)}
        select={selLevel}
        value={level[i].value}
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
  onLevelChange = (value) => () => {
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

  clearBtn = () => {
    this.setState({
      selLocation: '',
      selLevel: ''
    })
  }

  onGetSpotList = async () => {
    const { navigate } = this.props.navigation
    const url = Api.url + `spot/search?location=${this.state.selLocation}&level=${this.state.selLevel}`
    if (this.state.selLocation === '' && this.state.selLevel === '') {
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `spot`);
      let responseValue = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseSpot = await navigate('spotList', { spotData: responseValue.item.data });
      let closeModal = await this.setModalVisible(!this.state.modalVisible);
    } else {
      try {
        let showLoading = this.setLoadingModalVisible(true);
        let response = await fetch(url);
        let responseValue = await response.json();
        let cancelLoading = this.setLoadingModalVisible(false);
        let resultList = await navigate('spotList', { spotData: responseValue.item.data });
        let closeModal = await this.setModalVisible(!this.state.modalVisible);
      } catch (err) {
        this.setModalVisible(!this.state.modalVisible);
        navigate('errorPage')
        console.log(err)
      }
    }
  }

  keyExtractor = (item, index) => { return index.toString() };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.listContainer} onPress={this.onGetSpotDetail.bind(this, item.id)}>
        <Card style={styles.cardContainer}>
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
      let showLoading = this.setLoadingModalVisible(true);
      let response = await fetch(Api.url + `spot/${id}`);
      let responseJson = await response.json();
      let cancelLoading = this.setLoadingModalVisible(false);
      let responseDetail = await navigate('spotDetail', {
        data: responseJson.item[0],
        comment: responseJson.comment,
        nearShop: responseJson.Nearby,
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
    if (this.props.navigation.state.params.spotData.length === 0) {
      return (
        <View style={Styles.container}>
          <View style={{ alignItems: 'center', paddingTop: 25 }}>
            <Text style={styles.txt}>找不到結果</Text>
            <Text style={styles.txt}>請調整篩選條件再試試看！</Text>
            <ListModal
              modalVisible={this.state.modalVisible}
              onPress={this.onSetModalVisible}
              onPressReset={this.clearBtn}
              onPressSubmit={this.onGetSpotList}
              title={this.state.modalTitle}
              subtitle1={this.state.modalLocationTitle}
              subtitle2={this.state.modalLevelTitle}
              onGetFirstBtn={this.onGetLocationBtn()}
              onGetSecondBtn={this.onGetLevelBtn()}
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
                onPressSubmit={this.onGetSpotList}
                title={this.state.modalTitle}
                subtitle1={this.state.modalLocationTitle}
                subtitle2={this.state.modalLevelTitle}
                onGetFirstBtn={this.onGetLocationBtn()}
                onGetSecondBtn={this.onGetLevelBtn()}
                btnTxt1={this.state.btnTxt1}
                btnTxt2={this.state.btnTxt2}
              />

              <FlatList
                data={this.props.navigation.state.params.spotData}
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
